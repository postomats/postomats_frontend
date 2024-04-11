function login() {

}


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log(email, password);
        return 1;
    })
})