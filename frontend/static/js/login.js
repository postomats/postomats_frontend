function login(email, password) {
    fetch("/api/census/user/auth/sign-in", {
        body: JSON.stringify(
            {email: email, password: password }
        ),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST"
    }).then(response => response.json().then(data => {
        localStorage.setItem('token', data.token);
        location.href = '/catalog.html'
    })).catch(
        data => console.log(`Autorisation error ${data}`)
    )
}

function logout() {
    localStorage.removeItem('token');
    location.href = '/'
}


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        login(email, password);
        return 1;
    })
})