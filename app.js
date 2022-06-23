const express = require('express')
const morgan = require('morgan')
const html = require("html-template-tag");
const layout = require('./views/layout')

const app = express()

app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
  res.send(layout(''))
})

PORT = 1337

app.listen(PORT)
