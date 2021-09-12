const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
let val = 16;
let r, g, b;
function defaultBoxMaker() {
    for (let i = 1; i <= val * val; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', i);
        div.classList.add("box");
        container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${val}, 1fr)`;
    etchASketch();
}
function randColor() {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
}
function etchASketch() {
    randColor();
    container.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        container.style.backgroundColor = "white";
        randColor();
    }, false);
}
btn.addEventListener('click', () => {
    for (let i = 1; i <= val * val; i++) {
        const div = document.getElementById(i);
        container.removeChild(div);
    }
    val = prompt("Enter the value of grid square you want.");
    if (!(val >= 2 && val <= 64)) {
        alert('Value should be from 2 to 63');
    }
    defaultBoxMaker();
}, false);
defaultBoxMaker();
