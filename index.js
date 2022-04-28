function changeText(cart) {
    cart.innerHTML = "Added!";
    cart.style.backgroundColor = "#8888";
    setTimeout(function() {
      cart.innerHTML = "Add to cart";
      cart.style.backgroundColor = "#acd9b2"
    }, 2000)
}

var btn = document.getElementById('btn');
var title = document.getElementById('grid-container');
var counter=0;

function change(cart) {
    if(counter==0) {
        title.classList.add('change');
        counter=1;
    }
    else {
        title.classList.remove('change');
        counter=0;
    }
}

btn.addEventListener('click',change,true);