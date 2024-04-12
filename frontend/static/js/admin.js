function adminCheck() {
    const token = localStorage.getItem('token');
    fetch(`/api/census/me?token=${token}`, {
        headers: {
            Accept: "application/json"
        }
    })
    .then(response => response.json()
    .then(data => {
        if (data.role != "Admin") {
            localStorage.removeItem('token');
            location.href = '/login.html'
        }
    }))
}

function openAllCells() {
    const token = localStorage.getItem('token');
    fetch(`/api/mcc/admin/open_all_cells?jwt=${token}`).then(response => response.json().then(data => {
        console.log(data);
    }));
}

document.addEventListener('DOMContentLoaded', () => {
    adminCheck();
})