const products = [
    {id: 1, title: 'Notebook', price: 40000},
    {id: 2, title: 'Mouse', price: 1000},
    {id: 3, title: 'Keyboard', price: 2500},
    {id: 4, title: 'Gamepad', price: 1500},
];

const renderProduct= (item, img='img/noimg.jpg') => `<div class="product-item" data-id="${this.id}">
                <img src="${img}" alt="img">
                <h3>${item.title}</h3>
                <p>${item.price} \u20bd</p>
                <button class="by-btn">Добавить</button>
              </div>`;


const renderProducts = list => {
  document
    .querySelector('.products')
    .insertAdjacentHTML('beforeend', list.map(item =>renderProduct(item)).join(''));
};

renderProducts(products);
