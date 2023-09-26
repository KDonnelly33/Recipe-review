
handleNewPost = async (event) => {
    // event.preventDefault();
    console.log("new post running")
    const title = document.querySelector('#title').value.trim();
    const ingredients = document.querySelector('#ingredients').value.trim();
    const instructions = document.querySelector('#instructions').value.trim();
    const image_url = document.querySelector('#image').value.trim();
    const category_id = document.querySelector('#category').value.trim();
    console.log(title, ingredients, instructions, image_url, category_id)
  if (title && ingredients && instructions && image_url && category_id) {
    await fetch('/api/recipe', {
        method: 'POST',
        body: JSON.stringify({ title, ingredients, instructions, image_url, category_id }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/');
}
}




document
    .querySelector('#newpost-form')
    .addEventListener('submit', handleNewPost);