const router = require('express').Router();
const { Recipe, User, Comment, Mealtype } = require('../models');
const withAuth = require('../utils/auth');

// Get route for homepage to get all recipes
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
        
        // Pass serialized data and session flag into template
        res.render('home', {
            recipes,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// get route for recipe by id
router.get('/recipe/:id', withAuth, async (req, res) => {
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
        
    } catch (err) {
        res.status(500).json(err);
    }
});
// get route for new recipe
router.get('/newpost', (req, res) => {
    // render newpost page
    res.render('newpost', {
        logged_in: req.session.logged_in
    });
}
);
// get route for edit recipe
router.get('/edit/:id', withAuth, async (req, res) => {


        try {
        const recipeData = await Recipe.findByPk(req.params.id);
        // if recipe data is found, render edit page
        if (recipeData) {
            const recipe = recipeData.get({ plain: true });
            res.render('edit', { recipe });
        }
        // error handler
    } catch (err) {
        res.status(500).json(err);
    }
}
);
        //  get route for login
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
// reder login page
    res.render('login');
});

// route to get all mealtypes by id and render the mealtypes page
router.get('/mealtypes', async (req, res) => {
    try {
        const mealData = await Mealtype.findAll();
        const meals = mealData.map((meal) => meal.get({ plain: true }));
        res.render('mealtypes', { meals });
    }
    catch (err) {
        res.status(500).json(err);
    }
}
);


module.exports = router;
 