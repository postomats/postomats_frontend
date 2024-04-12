function getBusket() {
    let busket = localStorage.getItem('busket');
    if (busket == null) {
        localStorage.setItem('busket', JSON.stringify([]));
    }
    busket = JSON.parse(busket);
    return busket;
}


function pushToBusket(element) {
    const busket = getBusket();
    busket.push(element);
    localStorage.setItem('busket', JSON.stringify(busket));
}


function addToBusket(id) {
    fetch(`/api/bookworm/book/${id}`).then(res => res.json().then(data => {
        pushToBusket(data);
    }))
    viewBusket()
}

function viewBusket() {
    const busket_body = document.getElementById('busket_body');
    busket_body.innerHTML = ''
    const busket = getBusket();

    if (busket.length == 0) {
        busket_body.innerHTML = '<p>Корзина пока пустая</p>'
        return;
    }

    getBusket().forEach(element => {
        busket_body.innerHTML += `<p>${element.title}. ${element.author}. ${element.publication_year}</p>`
    });

}

function sendBusketOnServer() {
    const busket = getBusket();
    console.log(busket);

    fetch("/api/mcc/order/do", {
        body:
            JSON.stringify({
                jwt: localStorage.getItem('token'),
                content: JSON.stringify(busket)
            })
        ,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST"
    }).then(response => response.json().then(data => {
        localStorage.removeItem('busket');
        location.href = '/orders.html';
    }))

}


document.addEventListener('DOMContentLoaded', () => {
    getBusket()
    viewBusket()
})