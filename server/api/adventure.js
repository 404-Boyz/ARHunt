const router = require('express').Router()
const { Adventure } = require('../db/models')


router.use('/:adventureId/location', require('./location'));

router.get('/', (req, res, next) => {
    Adventure.findAll()
        .then(adventures => res.json(adventures))
        .catch(console.error('Adventures not found!'))
});

router.get('/:adventureId', (req, res, next) => {
    Adventure.findById(req.params.id)
        .then(adventure => res.json(adventure))
        .catch(next)
});

module.exports = router;
