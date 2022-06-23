const express = require('express')
// const layout = require('../views/')
const {addPage, layout} = require('../views/index')
const router = express.Router()

router.get('/', (req,res) => {
  res.send(layout(''))
})

router.post('/', (req,res, next) => {
  res.send('it works')
})

router.get('/add', (req,res) => {
  res.send(addPage())
})



module.exports = router
