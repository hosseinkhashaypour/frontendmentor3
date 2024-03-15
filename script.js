const products = [{
    name: "sneakers shoes",
    price: "$125_00",
    quantity: "1000"
}]

const counter = document.querySelector('.quantity .quantity-number');
const addtoCart = document.querySelector('.add-to-cart');
const plusCount = document.querySelector('.plus-icon');
const minusCount = document.querySelector('.minus-icon');
// const divaddtocart = document.querySelector('.add-to-cart')
const price = document.querySelector('.price .current-price');


addtoCart.addEventListener('click', () => {
    addtoCart.style.opacity = "0.5"
})
plusCount.addEventListener('click', () => {
    let currentValue = parseInt(counter.textContent)
    currentValue++;
    counter.textContent = currentValue;

    if (currentValue > 1) {
        let currentPrice = parseFloat(price.textContent.replace('$', ''));
        let newPrice = currentPrice + 125.00
        newPrice = "$" + newPrice.toFixed(2)
        price.textContent = newPrice

    }
})

minusCount.addEventListener('click', () => {
    let currentValue = parseInt(counter.textContent)
    currentValue--;
    counter.textContent = currentValue;
    if (counter.textContent < 0) {
        counter.textContent = 0;
    }

    if (currentValue--) {
        let currentPrice = parseFloat(price.textContent.replace('$', ''));
        let newPrice = currentPrice - 125.00;
        newPrice = "$" + newPrice.toFixed(2);
        price.textContent = newPrice;
    }
})

function openNav(){
    document.getElementById('myNav').style.width = "75%"
}
function closeNav(){
    document.getElementById('myNav').style.width = "0%"
}