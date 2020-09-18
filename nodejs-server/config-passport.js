const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { user } = require('./tablesDB');

// const userDB = {
//     id: 136345,
//     email: 'test@mail.com',
//     password: '123',
// };

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    user.findAll({ raw: true }).then(users => {
        // console.log('Сериализация: ', users);
        // users.findById(id, function (err, user) {
        //     done(err, user);
        // });
        const userId = users.findIndex(item => item.id === id);
        if (userId > -1) {
            done(null, users[userId]);
        }
    }).catch(err => console.log(err));
});

// passport.serializeUser(function (user, done) {
//     console.log('Сериализация: ', user);
//     done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//     console.log('Десериализация: ', id);
//     const user = userDB.id === id ? userDB : false;
//     done(null, user);
// });

passport.use(
    new LocalStrategy({ usernameField: 'email' }, function (email, password, done) {
        user.findAll({ raw: true }).then(users => {
            let resultFindIndex = users.findIndex(item => item.email === email);
            if (resultFindIndex > -1 && users[resultFindIndex].password === password) {
                return done(null, users[resultFindIndex]);
            } else {
                return done(null, false, { message: 'User not found.' });
            }
        }).catch(err => console.log(err));
    })
);