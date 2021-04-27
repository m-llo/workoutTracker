const router = require('express').Router();

const wokroutRoutes = require('./workouts');



router.use('/workouts', wokroutRoutes);

module.exports = router;