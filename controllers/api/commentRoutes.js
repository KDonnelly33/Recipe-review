const router = require('express').Router();
const { Comment } = require('../../models/');

// get route
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
})

// post route for new comment
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

      res.json(newComment);
    }
    // error handling
    catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;