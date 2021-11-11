async function loginFormHandler(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username-login')
    const passwordInput = document.getElementById('password-login')

        const response = await fetch('/api/users/login', {
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
            alert(response.statusText);
        }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);