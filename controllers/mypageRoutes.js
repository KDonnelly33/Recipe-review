const router = require('express').Router();
const { Recipe, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                User, 
                {
                    model: Comment,
                    include: [User]
                }
            ],
        });

        // Serialize data so the template can read it
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
        console.log("mypage Routes", recipes)
        res.render('mypage', { 
            recipes,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.delete('/:id', withAuth, (req, res) => {
    Recipe.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(postData => {
        if (!postData) {
            res.status(404).json({
                message: 'No post found with this id'
            });

            return;
        }
        res.json(postData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
