const router = require('express').Router();
const apiRoutes = require('./api');

router.get('/', (req, res) => {
res.send('<h1> wrong route </h1>')
});

router.use('/api', apiRoutes);

module.exports = router;