// initialize express router
const router = require('express').Router();
const { Recipe } = require('../../models');

// create post route to create a new recipe
router.post("/", async (req,res)=>{
   
   const body = req.body
 
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
// create a put route to edit/update a recipe by id
router.put("/:id", async (req, res) => {
    try {
        const updatedRecipe = await Recipe.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
     
        res.json(updatedRecipe);
    } catch (error) {
        console.log(error);
        res.json(error);

    }
}
);
//  added delete route to delete a recipe by id
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