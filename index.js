function changeText(cart) {
    cart.innerHTML = "Added!";
    cart.style.backgroundColor = "#8888";
    var cartText = cart.previousSibling;
    navigator.clipboard.writeText(cartText.textContent);
    setTimeout(function() {
      cart.innerHTML = "Add to cart";
    }, 2000)
}

