// let noti = document.querySelector('.cart');
// let cartList = document.querySelector('.cart-list');
// let button = document.querySelectorAll('.prod-btn');

// for(but of button)
// {
//     but.addEventListener('click', (e)=>{
//         let add = Number(noti.getAttribute('data-count')|| 0);
//         noti.setAttribute('data-count', add + 1);
//         noti.classList.add('zero');

//         // Copy and Paste Elements
//         let parent = e.target.parentNode.parentNode;
//         let clone = parent.cloneNode(true);
//         cartList.appendChild(clone);
//         // clone.lastElementChild.innerText = `\$${price}`;

//         if (clone){
//             noti.onclick =()=>{
//                 cartList.classList.toggle('display');
//             }
//         }
//     })
// }

let cartButton = document.querySelector('.cart');
let continueButton = document.querySelector('.cart-button-1');
cartButton.addEventListener("click", toggleFunction);

continueButton.addEventListener("click", function closeFunction() {
    document.getElementById('main-cart').style.display = "none";
})

function toggleFunction(){
    document.getElementById('main-cart').style.display = "block";
}

// console.log(cartButton);