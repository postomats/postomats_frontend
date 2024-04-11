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

document.addEventListener('DOMContentLoaded', () => {
    getBusket()
})