const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const mypageRoutes = require('./mypageRoutes');

router.use('/', homeRoutes);
router.use('/mypage', mypageRoutes);
router.use('/api', apiRoutes);

module.exports = router;
