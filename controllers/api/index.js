const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const withAuth = require('../../utils/auth');


router.use('/comments', withAuth, commentRoutes);
router.use('/users', userRoutes);

module.exports = router;
