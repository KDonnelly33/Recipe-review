async function deleteFormHandler(event) {
    const id;

    await fetch(`/api/recipe/${id}`, {
        method: "DELETE",
        body: JSON.stringify({ id: id }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(() => { document.location.replace("/mypage"); })
    .catch(() => alert("Try again"));
}


document.querySelector("#delete-btn").addEventListener("click", deleteFormHandler);