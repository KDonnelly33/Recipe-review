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
    const newRecipe = await Recipe.create(body, userId = "3")
    res.json(newRecipe)
   } catch (error){
         console.log(error)
         res.json(error)
    }
}
)


module.exports = router;