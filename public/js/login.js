// function for login
const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const username = document.querySelector('#name-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
// if response is ok, show sweetalert message; else show error message
        if (response.ok) {
           
            sweetalert("success", "You have successfully logged in");
        } else {
            sweetalert("error", "Please try again");
        }
    }
};
// signup function
const signupFormHandler = async (event) => {
    event.preventDefault();
// collect username and password
    const username = document.querySelector('#name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
// if both are fill out, send a POST request to the API endpoint
    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
// if response ok show sweetalert message; else show error message
        if (response.ok) {
            sweetalert("success", "Congratulations! You have successfully registered");
        } else {
            sweetalert("error", "Please try again");
        }
    }
};
// click events for login and signup buttons
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
