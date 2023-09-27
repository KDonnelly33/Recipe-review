const recipeId = document.querySelector('input[name="recipe-id"]').value;

const editHandler = async function(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const ingredients = document.querySelector('#ingredients').value;
    const instructions = document.querySelector('#instructions').value;
    const image = document.querySelector('#image').value;
    const catId = document.querySelector('#category').value;
    console.log(title, ingredients, instructions, image, catId)
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
    
    document.location.replace('/mypage');
}

document
    .querySelector('#edit-form')
    .addEventListener('submit', editHandler);
