const commentHandler = async (event) => {
    event.preventDefault();
    const recipe_id = document.querySelector('input[name="recipe-id"]').value;
    const comment = document.querySelector('textarea[name ="comment-body"]').value.trim();
    console.log(comment, recipe_id )
    if (comment) {
        await fetch ('/api/comments', {
            method: 'POST',
            body: JSON.stringify({recipe_id, comment}),
            headers: {'Content-Type': 'application/json'}
        })
        // document.location.reload();
    }
}
document.querySelector('#newcommentForm').addEventListener('submit', commentHandler);