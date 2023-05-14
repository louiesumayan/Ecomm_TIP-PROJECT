let list = document.querySelector('.overview');
let products = [
  {
    id: 1,
    name: 'UNVEILED',
    image: '1.jpg',
    price: '₱120000',
    link: 'view_product.html',
    Buy: 'checkout.html',
  },
];
let prodItems = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item-item-detail');
    newDiv.innerHTML = `
            
     <div class="item-detail">
            <h1>${value.name}</h1>
            <img src="./assets/img/${value.image}" alt="" />
            <p>
            Unveiled is a thought-provoking artwork that captures the essence of liberation and self-discovery. The centerpiece of the piece is a mask, delicately crafted and adorned with intricate patterns.
            </p>
            <p class="price">PRICE ${value.price}</p>
            <div class="btn-button">
              <button class="btn-btn-success text-white"><a href='${value.Buy}' class="text-white">BUY NOW</button>
              <button onclick="addToCard(${key}) class="btnbtn-warning"><a href="shop.html">BACK</a></button>
            </div>
          </div>



           `;
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
