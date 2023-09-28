// recipe instructions
const instructions = document.querySelector(".instructions");
const text = instructions.innerText;
const modifiedText = text.replace(/(2\.|3\.)/g, '<br>$1');

instructions.innerHTML = modifiedText;

// comment handler
// create a function to handle the comment form submission
const commentHandler = async (event) => {
    event.preventDefault();
    // create variables for the comment and recipe id
    const recipe_id = document.querySelector('input[name="recipe-id"]').value;
    const comment = document.querySelector('textarea[name ="comment-body"]').value.trim();
// if the comment exists, post the comment to the database
    if (comment) {
        await fetch ('/api/comments', {
            method: 'POST',
            body: JSON.stringify({recipe_id, comment}),
            headers: {'Content-Type': 'application/json'}
        })
        // reloads the page
        document.location.reload();
    }
}
// add click event listener to the submit button
document.querySelector('#newcommentForm').addEventListener('submit', commentHandler);