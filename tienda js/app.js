let iconcart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconcartSpan = document.querySelector('.icon-cart span');

let listproducts = [];
let carts = [];

iconcart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

// Agrega el manejador de eventos para cerrar el carrito
closeCart.addEventListener('click', () => {
    body.classList.remove('showCart');
});

const addDataToHTML = () => {
    if (listproducts.length > 0) {
        listproducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Añadir al carrito</button>
            `;
            listProductHTML.appendChild(newProduct);
        });
    }
};

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let product_id = positionClick.parentElement.dataset.id;
        addCart(product_id);
    }
});

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
        changeQuantity(product_id, type);
    }
});

const addCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if (positionThisProductInCart === -1) {
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        carts[positionThisProductInCart].quantity++;
    }
    addCartToHTML();
    addCartToMemory();
};

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
};

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuantity += cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id = cart.product_id;
            let positionProduct = listproducts.findIndex((value) => value.id == cart.product_id);
            if (positionProduct !== -1) {
                let info = listproducts[positionProduct];
                newCart.innerHTML = `
                    <div class="image"> 
                        <img src="${info.image}" alt="">
                    </div>
                    <div class="name"> 
                        ${info.name}
                    </div>
                    <div class="totalPrice"> 
                        $${info.price * cart.quantity}
                    </div>
                    <div class="quantity"> 
                        <span class="minus">-</span> 
                        <span>${cart.quantity}</span>
                        <span class="plus">+</span> 
                    </div>
                `;
                listCartHTML.appendChild(newCart);
            }
        });
    }
    iconcartSpan.innerText = totalQuantity;
};

const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        switch (type) {
            case 'plus':
                carts[positionItemInCart].quantity++;
                break;
            case 'minus':
                if (carts[positionItemInCart].quantity > 1) {
                    carts[positionItemInCart].quantity--;
                } else {
                    carts.splice(positionItemInCart, 1);
                }
                break;
            default:
                break;
        }
    }
    addCartToMemory();
    addCartToHTML();
};

const initApp = () => {
    fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        listproducts = data;
        addDataToHTML();
        if(localStorage.getItem('cart')){
            carts = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    });
};

initApp();