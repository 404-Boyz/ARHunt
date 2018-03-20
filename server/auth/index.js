const router = require('express').Router()
const User = require('../db/models/user')

module.exports = router

router.post('/login', (req, res, next) => {
  console.log('YOU MADE IT TO SERVER!!!')
  User.findOne({ where: { userName: req.body.userName } })
    .then(user => {
      console.log('HIT IT!!!!')
      if (!user) {
        res.status(401).send('User not found')
      } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password')
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)))
      }
      return user
    })
    .catch(next)
})

router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => (err ? next(err) : res.json(user)))
      return user
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists')
      } else {
        next(err)
      }
    })
})

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  //  from throwback do we need this?
  // res.clearCookie('cartId').redirect('/');
})

router.use('/google', require('./google'));
