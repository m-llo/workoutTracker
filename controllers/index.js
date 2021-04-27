const router = require('express').Router();

const apiRoutes = require('./api');
const exerciseRoutes = require('./exercise');

router.use('/', exerciseRoutes);
router.use('/api', apiRoutes);

module.exports = router;