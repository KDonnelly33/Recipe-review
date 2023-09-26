const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const mypageRoutes = require('./mypageRoutes');
const withAuth = require('../utils/auth');

router.use('/', homeRoutes);
router.use('/mypage', withAuth,  mypageRoutes);
router.use('/api', apiRoutes);

module.exports = router;
