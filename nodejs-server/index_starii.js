const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('project-x_db', 'root', '1234_Airat_qwerTy', {
  dialect: 'mysql',
  host: 'localhost'
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

sequelize.sync().then(res => {
  // console.log(res);
  console.log('OK');
}).catch (err => {
  // console.log(err);
  console.log('ERROR');
});

// User.create({
//   email: "test@email.com",
//   password: "123456"
// }).then(res => {
//   const user = {id: res.id, email: res.email, password: res.password};
//   console.log(user);
// }).catch(err => console.log(err));
