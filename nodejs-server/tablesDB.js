const { Sequelize, DataTypes } = require('sequelize');

/////////////////////////////////CONNECT MYSQL/////////////////////////////////
const sequelize = new Sequelize('project-x_db', 'root', '1234_Airat_qwerTy', {
  dialect: 'mysql',
  host: 'localhost',
  define: {
    timestamps: false
  }
});

const Post = sequelize.define('post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: false
  },
  idusers: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: false,
    allowNull: false,
    unique: false, 
  },
  text: {
    type: DataTypes.STRING(800),
    allowNull: false
  }
});

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
});
User.hasMany(Post, { onDelete: "cascade", foreignKey: 'idusers' });


let UserAddData = (email, password) => {
  //create row
  User.create({
    email: email,
    password: password
  }).then(res => {
    // console.log(res);
  }).catch(err => console.log(err));
}

let TextPostAddData = (id, text) => {
  //create row
  Post.create({
    idusers: id,
    text: text
  }).then(res => {
    // console.log(res);
  }).catch(err => console.log(err));
}

function UserGetAllData (response) {
  let data = User.findAll({ raw: true }).then(users => {
    console.log(users);
  }).catch(err => console.log(err));
}

let Actions = {
  
}



module.exports = {
  addUser: UserAddData,
  addPost: TextPostAddData,
  getAll: UserGetAllData,
  user: User,
  post: Post
}

//   //connection test
//   sequelize.sync().then(res => {
//     // console.log(res);
//     console.log('OK');
//   }).catch(err => {
//     // console.log(err);
//     console.log('ERROR');
//   });

//   //get all datatable User
//   User.findAll({ raw: true }).then(users => {
//     console.log(users);
//   }).catch(err => console.log('ERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERROR'));
// const UserDbActions = {
//   
// }
  ///////////////////////////////////////////////////////////////////////////////