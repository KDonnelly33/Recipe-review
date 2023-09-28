// function to handle new post submission
handleNewPost = async (event) => {
    event.preventDefault();
// variables for the recipe title, ingredients, instructions, image, and category id
    const title = document.querySelector('#title').value.trim();
    const ingredients = document.querySelector('#ingredients').value.trim();
    const instructions = document.querySelector('#instructions').value.trim();
    const image_url = document.querySelector('#image').value.trim();
    const category_id = document.querySelector('#category').value.trim();
// if all fields are filled out, send a POST request to the API endpoint
  if (title && ingredients && instructions && image_url && category_id) {
    await fetch('/api/recipe', {
        method: 'POST',
        body: JSON.stringify({ title, ingredients, instructions, image_url, category_id }),
        headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => { 
        if (response.status == 200) {
            sweetalert("success", "The recipe has been successfully deleted");
        }
    })
    .catch(() => sweetalert("error", "Please try again"));
}
}



// click event for the submit button
document
    .querySelector('#newpost-form')
    .addEventListener('submit', handleNewPost);