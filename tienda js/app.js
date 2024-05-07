let iconcart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listproduct');

let listproducts = [];

iconcart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.remove('showCart');
});
 const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listproducts.length > 0){
        listproducts.forEach(product =>{
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = ;
        })
    }
 }

const iniApp = () => {
    fetch('productos.json')
    then(Response => Response.json)
    then(data => {
        listproducts = data;
        addDataToHTML();
    })
}

iniApp();