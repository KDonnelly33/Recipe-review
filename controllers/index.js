// initialize router
const router = require('express').Router();
// import routes
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const mypageRoutes = require('./mypageRoutes');
// inmport withAuth
const withAuth = require('../utils/auth');
// use routes
router.use('/', homeRoutes);
// used with auth to protect routes
router.use('/mypage',withAuth, mypageRoutes);
router.use('/api', apiRoutes);


module.exports = router;
