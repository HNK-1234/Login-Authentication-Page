const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessageElement = document.getElementById('errorMessage');
    const user = users.find(u => u.username === username);
    if (!user || user.password !== password) {
        errorMessageElement.textContent = 'Invalid username or password.';
    } else {
        errorMessageElement.textContent = '';
        alert('Login successful!');
        // Redirect to dashboard or perform other actions after successful login
    }
});
