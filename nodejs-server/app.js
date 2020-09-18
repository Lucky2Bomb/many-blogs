const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
const bodyParser = require('body-parser');
const tablesDB = require('./tablesDB');
const { addUser, getAll, user, post, addPost } = require('./tablesDB');
const { response } = require('express');
const hbs = require('hbs')

const app = express();
const port = 3001;
app.set("view engine", "hbs");
hbs.registerPartials('./views/particals');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'hghtfd7yNN23h',
    store: new FileStore(),
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: false,
  })
);

require('./config-passport');
app.use(passport.initialize());
app.use(passport.session());

app.use('/main', (req, res) => {
  res.render('main.hbs');
});

app.get('/users', (req, res) => {
  user.findAll({ raw: true }).then(users => {
    res.render('users.hbs', {
      users: users.map(item => `${item.email}`),
      id: users.map(item => `${item.id}`),
    });
  }).catch(err => console.log(err));

});

app.get('/users/*', (req, res) => {
  let userEmail = req.url.slice(7);
  user.findOne({ where: { email: userEmail } })
    .then(userObj => {
      post.findAll({ where: { idusers: userObj.id }, raw: true })
        .then(posts => {
          res.render('user.hbs', {
            email: userEmail,
            posts: posts.map(item => `${item.text}`)
          })
        })
        .catch(err => console.log(err));
    }).catch(err => console.log(err));

});


// app.get("/getAll", function (request, response) {
//   user.findAll({ raw: true }).then(users => {
//     response.send(users);
//   }).catch(err => console.log(err));
// });

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.get("/register", urlencodedParser, function (request, response) {
//   // response.sendFile(__dirname + "/testRegister.html");
//   response.send('registration');
// });

app.get("/register", urlencodedParser, function (request, response) {
  // response.sendFile(__dirname + "/testRegister.html");
  response.render('register.hbs');
});

app.post("/register", urlencodedParser, function (request, response) {
  if (!request.body) return response.sendStatus(400);
  console.log(request.body);
  if (request.body.password != request.body.confirmPassword || request.body.password == '') {
    console.log('пароли не совпадают или пусты');
    return response.sendStatus(403);
  }
  // response.send(`
  // email: ${request.body.email}
  // password: ${request.body.password}
  // confimPassword: ${request.body.confimPassword}
  // `);
  // response.send('данные для регистрации успешно отправлены!');

  addUser(request.body.email, request.body.password);
  // response.send('данные для регистрации успешно отправлены!');
  response.render('login.hbs');
  // tablesDB.User.create({
  //   email: request.body.email,
  //   password: request.body.password
  // }).then(res => {
  //   console.log(res);
  // }).catch(err => console.log('ERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERROR'));

});


app.get("/login", urlencodedParser, function (request, response) {
  // response.sendFile(__dirname + "/testRegister.html");
  response.render('login.hbs');
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local', function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send('Укажите правильный email или пароль!');
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/profile');
    });
  })(req, res, next);
});

const auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.redirect('/main');
  }
};

// app.get('/profile', auth, (req, res) => {

//   //req.user.id пользователя
//   if (req.user.id == undefined || req.user.id < 1) {
//     console.log(error);
//   } else {
//     console.log('ok');
//     post.findAll({ where: { idusers: req.user.id }, raw: true })
//       .then(posts => res.send(posts))
//       .catch(err => console.log(err));
//   }
// });

app.get('/profile', auth, (req, res) => {

  //req.user.id пользователя
  if (req.user.id == undefined || req.user.id < 1) {
    console.log(error);
  } else {
    post.findAll({ where: { idusers: req.user.id }, raw: true })
      .then(posts => {
        res.render('profile.hbs', {
          posts: posts.map(item => `${item.text}`)
        })
      })
      .catch(err => console.log(err));
  }
});

app.post("/profile", urlencodedParser, function (request, response) {
  if (!request.body) return response.sendStatus(400);
  addPost(request.user.id, request.body.text);
  response.redirect('/profile');
});

app.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/main');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));