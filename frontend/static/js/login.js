function login(email, password) {
    fetch("/api/census/user/auth/sign-in", {
        body: JSON.stringify(
            { email: email, password: password }
        ),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST"
    }).then(response => response.json()
    .then(data => {
        localStorage.setItem('token', data.token);
        fetch(`/api/census/me?token=${localStorage.getItem('token')}`).then(response => response.json().then(data => {
            switch (data.role){
                case "Admin":
                    location.href = '/admin.html';
                    break;
                case "Worker":
                    location.href = "/worker.html";
                    break;
                default:
                    location.href = "/catalog.html";
                    break;
            }
        }))
    })).catch(
        data => console.log(`Autorisation error ${data}`)
    )
}

function registration(email, first_name, last_name, password, group) {
    fetch("/api/census/user/auth/sign-up", {
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            group: group,
            password: password
        }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST"
    }).then(response => response.json().then(data => {
        localStorage.setItem('token', data.token);
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

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            login(email, password);
        })
        return;
    }

    const registrForm = document.getElementById('registrForm');

    registrForm.addEventListener('submit', (event) => {
        const email = document.getElementById('email').value;
        const first_name = document.getElementById('first_name').value;
        const last_name = document.getElementById('last_name').value;
        const group = document.getElementById('group').value;
        const password1 = document.getElementById('password1').value;
        const password2 = document.getElementById('password2').value;

        if (password1 != password2) {
            alert('Пароли не совподают')
        }

        registration(email, first_name, last_name, password1, group)
        return 1;
    })
})