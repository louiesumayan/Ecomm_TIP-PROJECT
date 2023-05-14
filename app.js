let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

let products = [
  {
    id: 1,
    name: 'UNVEILED',
    image: '1.jpg',
    price: 120000,
    link: 'view_product.html',
  },
  {
    id: 2,
    name: 'SMOKE AND REFLECTION',
    image: '2.jpg',
    price: 120000,
    link: 'view_product.html',
  },
  {
    id: 3,
    name: 'DUAL ESSENCE',
    image: '3.jpg',
    price: 220000,
    link: 'view_product.html',
  },
  {
    id: 4,
    name: 'THE JOKER SYMPHONY',
    image: '4.jpg',
    price: 123000,
    link: 'view_product.html',
  },
  {
    id: 5,
    name: 'SILENT ECHOES',
    image: '5.jpg',
    price: 320000,
    link: 'view_product.html',
  },
  {
    id: 6,
    name: 'FRACTURED SYMMETRY',
    image: '6.jpg',
    price: 120000,
    link: 'view_product.html',
  },
  {
    id: 7,
    name: 'DUAL REFLECTION',
    image: '7.jpg',
    price: 120000,
    link: 'view_product.html',
  },
  {
    id: 8,
    name: 'BLIND JUSTICE',
    image: '8.jpg',
    price: 120000,
    link: 'view_product.html',
  },
  {
    id: 9,
    name: 'CAPTIVE SHADOWS',
    image: '9.jpg',
    price: 120000,
    link: 'view_product.html',
  },
  {
    id: 10,
    name: 'FRAGMENTED IDENTITY',
    image: '10.jpg',
    price: 120000,
    link: 'view_product.html',
  },
  {
    id: 11,
    name: 'MUSCLEBOUND RESILIENCE',
    image: '11.jpg',
    price: 120000,
    link: 'view_product.html',
  },
  {
    id: 12,
    name: 'SMOKE AND CONTEMPLATION',
    image: '12.jpg',
    price: 120000,
    link: 'view_product.html',
  },
  {
    id: 13,
    name: 'WHISPERED DESIRES',
    image: '13.jpg',
    price: 120000,
    link: 'view_product.html',
  },
  {
    id: 14,
    name: 'FRAGILE EMBRACE',
    image: '14.jpg',
    price: 120000,
    link: 'view_product.html',
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
            
            <img src="./assets/img/${value.image}">
<a href="${value.link}"><div class="title">${value.name}</div></a>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">ADD TO CART</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
                <div><img src="./assets/img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
