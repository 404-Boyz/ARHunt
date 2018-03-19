const router = require('express').Router()
const { Location } = require('../db/models')

router.get('/', (req, res, next) => {
    Location.findAll({
        where: {
            adventureId: req.body.adventureId // this will likely have to change but the intent is to find only the clue locations that belong to this adventure
        }
    })
        .then(locations => res.json(locations))
        .catch(next)
});

router.get('/:locationId', (req, res, next) => {
    Location.findById(req.params.id)
        .then(location => res.json(location))
        .catch(next)
});


module.exports = router

