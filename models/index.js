const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.TEXT,
    allowNull:false
  },
  content: Sequelize.TEXT,
  status: {
    type: Sequelize.ENUM('open','closed'),
    allowNull: false
  },
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      isEmail: true
    }
  }
})

Page.beforeValidate((title) => {
  const slug = title.replace(/\s+/g, '_').replace(/\W/g, '');
  return slug
})




module.exports = {
  db,
  Page,
  User
}


db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })
