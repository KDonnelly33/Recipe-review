// create function to hande delete request
const deleteFormHandler = async (event) => {
    // creates variable for the recipe id
    const id = event.target.getAttribute("data-recipe-id");
// fetch request to delete the recipe
    await fetch(`/api/recipe/${id}`, {
        method: "DELETE",
        body: JSON.stringify({ id: id }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    // promise to show sweetalert message
    .then((response) => { 
        if (response.status == 200) {
            sweetalert("success", "The recipe has been successfully deleted");
        }
    })
    .catch(() => sweetalert("error", "Please try again"));
}
// click event listener for the delete button
document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", deleteFormHandler);
});