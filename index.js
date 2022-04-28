const color = document.querySelector(".color");
const background = document.querySelector(".primary-button");
function ChangeColor() {
    color.style.color = "#8888";
    background.style.background = "#8888";
    document.getElementById("change").innerHTML = "Added to cart!";
}
