const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;
