const deleteFormHandler = async (event) => {
    const id = event.target.getAttribute("data-recipe-id");

    await fetch(`/api/recipe/${id}`, {
        method: "DELETE",
        body: JSON.stringify({ id: id }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => { 
        console.log(response.status)
        if (response.status == 200) {
            sweetalert("success", "The recipe has been successfully deleted");
        }
    })
    .catch(() => sweetalert("error", "Please try again"));
}

document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", deleteFormHandler);
});