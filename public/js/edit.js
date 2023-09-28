// variable for recipe id
const recipeId = document.querySelector('input[name="recipe-id"]').value;
// fucntion to edit recipe
const editHandler = async function(event) {
    event.preventDefault();
// variables for the recipe title, ingredients, instructions, image, and category id
    const title = document.querySelector('#title').value;
    const ingredients = document.querySelector('#ingredients').value;
    const instructions = document.querySelector('#instructions').value;
    const image = document.querySelector('#image').value;
    const catId = document.querySelector('#category').value;
    // fetch PUT request to edit the recipe
    await fetch(`/api/recipe/${recipeId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            ingredients,
            instructions,
            image,
            catId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // loads the mypage page
    document.location.replace('/mypage');
}
// click event listener for the edit button
document
    .querySelector('#edit-form')
    .addEventListener('submit', editHandler);
