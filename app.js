const express = require('express')
const morgan = require('morgan')
const html = require("html-template-tag");
const layout = require('./views/layout')
const {db, Page, User} = require('./models/index')
const userRouter = require('./routes/users')
const wikiRouter = require('./routes/wiki')

const app = express()

app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}))
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);


app.get('/', (req,res) => {
  res.redirect('/wiki')
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

