const router = require('express').Router();
const { Recipe } = require('../../models');
// const withAuth = require('../utils/auth');

router.post("/", async (req,res)=>{
    console.log("Post route hit!")
    console.log(req.body)
   const body = req.body
   console.log(body)

// ill need to unharcoded this later
   try{
    const newRecipe = await Recipe.create({
        ...body,
        user_id: req.session.user_id
    })
    res.json(newRecipe)
   } catch (error){
         console.log(error)
         res.json(error)
    }
}
)
router.put("/:id", async (req, res) => {
    try {
        const updatedRecipe = await Recipe.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        console.log(updatedRecipe)
        res.json(updatedRecipe);
    } catch (error) {
        console.log(error);
        res.json(error);

    }
}
);

router.delete('/:id', (req, res) => {
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

        res.status(200).json({
            message: 'Recipe deleted successfully'
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;