// Imports
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const recipeRoutes = require('./recipeRoutes');

const withAuth = require('../../utils/auth');
// use routes

router.use('/recipe', withAuth, recipeRoutes);
router.use('/comments', withAuth, commentRoutes);
router.use('/users', userRoutes);

module.exports = router;
