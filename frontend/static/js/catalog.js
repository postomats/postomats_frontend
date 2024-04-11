function getBook() {
    fetch('/api/bookworm/book').then((response) => response.json().then((data) => {
        const container = document.getElementById('books');

        for (const book of data) {
            const card = `
<div class="card">
    <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">Автор: ${book.author}</p>
        <p class="card-text">Издатель: ${book.publisher}</p>
        <p class="card-text">Год издания: ${book.publication_year}</p>
        <a href="#" id="${book.id}" onclick="addToBusket(${book.id});" class="btn btn-primary">Добавить в корзину</a>
    </div>
</div>
`
            const parser = new DOMParser();
            const doc = parser.parseFromString(card, 'text/html');
            const cardNode = doc.body.firstChild;
            container.appendChild(cardNode);
        }
    })).catch(data => console.log(data))
}


document.addEventListener('DOMContentLoaded', () => {
    getBook();
})