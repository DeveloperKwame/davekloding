let cartBtn = document.querySelector('.cart');
let cart = document.querySelector('#main-cart');

cartBtn.addEventListener('click',function(){
    if (cart.style.display === "none"){
        cart.style.display = 'block';
    }
    else{
        cart.style.display = 'none';
    }
});