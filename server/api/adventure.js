const router = require('express').Router()
const { Adventure, Location } = require('../db/models')



router.get('/', (req, res, next) => {
    Adventure.findAll()
        .then(adventures => res.json(adventures))
        .catch(console.error('Adventures not found!'))
});

router.get('/:adventureId', (req, res, next) => {
    Adventure.findById(req.params.adventureId)
        .then(adventure => res.json(adventure))
        .catch(next)
});


router.get('/:adventureId/location', (req, res, next) => {
    Location.findAll({
        where: {
            adventureId: req.params.adventureId
        }
    })
        .then(locations => res.json(locations))
        .catch(next)
});

router.get('/:adventureId/location/active', (req, res, next) => {
    Location.findOne({
        where: {
            adventureId: req.params.adventureId,
            visited: false
        }
    })
        .then(location => res.json(location))
        .catch(next)
})

router.get('/:adventureId/location/:locationId', (req, res, next) => {
    Location.findAll({
        where: {
            adventureId: req.params.adventureId,
            id: req.params.locationId
        }
    })
        .then(location => res.json(location))
        .catch(next)
});

router.put('/:adventureId/location/:locationId', (req, res, next) => {
    return Location.update({ visited: req.body.visited }, {
        where: {
            adventureId: req.body.adventureId,
            id: req.body.id
        }
    })
        .then(location => { console.log(location); res.json(location) })
        .catch(next)
});

module.exports = router;
