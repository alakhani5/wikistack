const express = require('express')
const morgan = require('morgan')
const html = require("html-template-tag");
const layout = require('./views/layout')
const {db, Page, User} = require('./models/index')

const app = express()

app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
  res.send(layout(''))
})

PORT = 1337

const init = async () => {
  await db.sync({force: true});
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();

