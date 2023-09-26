const router = require('express').Router();
const { Recipe, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all recipes and JOIN with user data
        const recipeData = await Recipe.findAll({
            include: [{
                model: User,
                attributes: ['username'],
            }, ],
        });

        // Serialize data so the template can read it
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
        console.log(recipes)
        // Pass serialized data and session flag into template
        res.render('home', {
            recipes,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/recipe/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id, {
        include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

        const recipe = recipeData.get({ plain: true });

        res.render('recipe', {
            ...recipe,
            logged_in: req.session.logged_in
        });
        console.log(recipe)
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/newpost', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (!req.session.logged_in) {
    //     res.redirect('/login');
    //     return;
    // }

    res.render('newpost');
}
);

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
