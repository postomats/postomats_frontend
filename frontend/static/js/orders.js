function elementList(data) {
    let result = ''
    for (let item of JSON.parse(data.basket)){
        result += `<p>${item.title}. ${item.author}. ${item.publication_year}</p>`
    }
    return result
}

function cardCreated(element) {
    const result = `<div class="card">
    <div class="card-header">
        Заказ создан
    </div>
    <div class="card-body">
      <h5 class="card-title">Книги</h5>
    ` + elementList(element) +
        `<a id=${element.id} href="#" class="btn btn-primary disabled">Получить</a>
    </div>
  </div>`
    return result
}

function cardProcessing(element) {
    const result = `<div class="card">
    <div class="card-header">
        Заказ в обработке
    </div>
    <div class="card-body">
      <h5 class="card-title">Книги</h5>
    ` + elementList(element) +
        `<a id=${element.id} href="#" class="btn btn-primary disabled">Получить</a>
    </div>
  </div>`
    return result
}

function cardDelivered(element) {
    const result = `<div class="card">
    <div class="card-header">
        Заказ доставлен
    </div>
    <div class="card-body">
      <h5 class="card-title">Книги</h5>
    ` + elementList(element) +
        `<a id=${element.id} href="#" class="btn btn-primary">Получить</a>
    </div>
  </div>`
    return result
}

function cardReceived(element) {
    const result = `<div class="card">
    <div class="card-header">
        Заказ получен
    </div>
    <div class="card-body">
      <h5 class="card-title">Книги</h5>
    ` + elementList(element) +
        `<a id=${element.id} href="#" class="btn btn-primary">Вернуть</a>
    </div>
  </div>`
    return result
}

function cardReturned(element) {
    const result = `<div class="card">
    <div class="card-header">
        Заказ возвращен
    </div>
    <div class="card-body">
      <h5 class="card-title">Книги</h5>
    ` + elementList(element) +
        `<a id=${element.id} href="#" class="btn btn-primary disabled">Получить</a>
    </div>
  </div>`
    return result
}

function cardClosed(element) {
    const result = `<div class="card">
    <div class="card-header">
        Сделка завершена
    </div>
    <div class="card-body">
      <h5 class="card-title">Книги</h5>
    ` + elementList(element) + 
    `</div>
  </div>`
    return result
}

function cardRejected(element) {
    const result = `<div class="card">
    <div class="card-header">
        Заказ отменен
    </div>
    <div class="card-body">
      <h5 class="card-title">Книги</h5>
    ` + elementList(element) + `
    </div>
  </div>`
    return result
}


function getUserOrders() {
    fetch(`/api/mcc/order/list?jwt=${localStorage.getItem('token')}`).then(
        response => response.json().then(
            data => {
                const root = document.getElementById('orders');
                console.log(data)

                for (let element of data){
                    let card = null;
                    switch (element.status) {
                        case "created":
                            card = cardCreated(element);
                            break;
                        case "processing":
                            card = cardProcessing(element);
                            break;
                        case "delivered":
                            card = cardDelivered(element);
                            break;
                        case "received":
                            card = cardReceived(element);
                            break;
                        case "returned":
                            card = cardReturned(element);
                            break;
                        case "closed":
                            card = cardClosed(element);
                            break;
                        case "rejected":
                            card = cardRejected(element);
                        default:
                            break;
                    }
                    root.innerHTML += card;
                }
            }
        )
    )
}


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('token') === null){
        location.href = '/login.html';
    }
    getUserOrders();
})