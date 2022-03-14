// let prodHead = document.querySelector('#prod-heading');
// console.log(prodHead);

// prodHead.innerText = 'Dave is Great';
// prodHead.style.color = '#6C757D';

let products = document.getElementsByClassName('prod');

for(let i = 0; i < products.length; i++){
    if((i + 1) % 2 == 0){
    products[i].style.background = "#000";
    }
};
console.log(products);

products = Array.from(products);

products.reverse();