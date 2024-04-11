function getBusket() {
    let busket = localStorage.getItem('busket');
    if (busket == null) {
        localStorage.setItem('busket', JSON.stringify([]));
    }
    busket = JSON.parse(busket);
    return busket;
}


function pushToBusket(element){
    const busket = getBusket();
    busket.push(element);
    localStorage.setItem('busket', JSON.stringify(busket));
}


function addToBusket(id) {
    fetch(`http://localhost:8000/${id}`).then(res => res.json().then(data => {
        pushToBusket(data);
    }))
}

function viewBusket() {
    const busket_body = document.getElementById('busket_body');
    busket_body.innerHTML = ''
    const busket = getBusket();

    if (busket.length == 0){
        busket_body.innerHTML = '<p>Корзина пока пустая</p>'
         return;
    }

    getBusket().forEach(element => {
        console.log(element);
        busket_body.innerHTML += `<p>${element.title}. ${element.author}. ${element.publication_year}</p>`
    });

}

function sendBusketOnServer(){
    const busket = getBusket();
    
}


document.addEventListener('DOMContentLoaded', () => {
    getBusket()
    viewBusket()
})