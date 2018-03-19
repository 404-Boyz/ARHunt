const router = require('express').Router()
const { User } = require('../db/models')

router.use('/:userId/adventure', require('./adventure'))

router.get('/:userId', (req, res, next) => {
    User.findById(req.params.userId)
        .then(user => res.json(user))
        .catch(next)
});

router.post('/', (req, res, next) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(next)
})


module.exports = router
