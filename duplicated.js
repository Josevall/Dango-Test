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

function changeText(cart) {
    cart.innerHTML = "Added!";
    cart.style.backgroundColor = "#8888";
    var cartText = cart.previousSibling;
    navigator.clipboard.writeText(cartText.textContent);
    setTimeout(function() {
      cart.innerHTML = "Add to cart";
    }, 2000)
}
