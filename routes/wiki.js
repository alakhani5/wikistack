const express = require('express')
// const layout = require('../views/')
const {addPage, layout} = require('../views/index')
const { Page } = require('../models/index')
const router = express.Router()

router.get('/', (req,res) => {
  res.send(layout(''))
})

router.post('/', async (req,res, next) => {

  const title = req.body.title
  const content = req.body.content

  try {
    const page = await Page.create({
      title: title,
      content: content
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) {
    next(error)
  }

})

router.get('/add', (req,res) => {
  res.send(addPage())
})




module.exports = router
