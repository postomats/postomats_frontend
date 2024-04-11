function logout() {

}


const header_html = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
    <a class="navbar-brand" href="/">postomatus.vsuet</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id='nav_list'>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/catalog.html">Каталог</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/orders.html">Заказы</a>
            </li>
            <li class="nav-item" id="login_nav">
            </li>
        </ul>
    </div>
</div>
</nav>`


const busketButton = `<li class="nav-item">
<a class="nav-link" aria-disabled="true" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-basket" viewBox="0 0 16 16">
        <path
            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
    </svg>
</a>
</li>`


const modal = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Корзина</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <p>test</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
      <button type="button" class="btn btn-primary">Заказать</button>
    </div>
  </div>
</div>
</div>
`

const nav_login = `<a class="nav-link" aria-current="page" href="/login.html">Авторизация</a>`

const nav_logout = `<a class="nav-link" aria-current="page" href="#" onclick="logout()">Выйти</a>`


document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementsByTagName('header')[0];
    header.innerHTML = header_html;

    if (localStorage.getItem('Token')) {
        document.getElementById('login_nav').innerHTML = nav_logout;
        document.getElementById('nav_list').innerHTML += busketButton;
    } else {
        document.getElementById('login_nav').innerHTML = nav_login;
        
    }


    const parser = new DOMParser();
    const doc = parser.parseFromString(modal, 'text/html');
    const modalNode = doc.body.firstChild;
    header.appendChild(modalNode);
})