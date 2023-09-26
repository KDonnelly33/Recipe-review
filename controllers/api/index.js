const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const recipeRoutes = require('./recipeRoutes');

router.use('/recipe', recipeRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;
