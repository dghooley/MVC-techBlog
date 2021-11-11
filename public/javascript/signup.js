async function signupFormHandler(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username-signup');
    const passwordInput = document.getElementById('password-signup');

        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameInput.value,
                password: passwordInput.value,
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert("Failed to Sign up.");
        }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);