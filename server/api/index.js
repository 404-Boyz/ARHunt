const router = require('express').Router()
const db = require('../db')

router.use('/user', require('./user'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
});


module.exports = router;
