// Etch a Sketch JS file

const container = document.getElementById('container');
const containerSize = 16 * 16;

for (let i = 0; i < containerSize; i++) {
    const containerItem = document.createElement('div');
    containerItem.classList.add('container-item');
    container.appendChild(containerItem);
}

const containerItem = document.getElementsByClassName('container-item');

for (let item of containerItem) {
    item.addEventListener('mouseover', function() { 
        item.style.backgroundColor = "black";
    });
}

const btn = document.getElementById('button');
btn.addEventListener('click', () => {
    userInput = prompt('Pick how many squares per side you want to generate? Max: 100');
    if (userInput < 1 || userInput > 100 || isNaN(userInput) || !Number.isInteger(Number(userInput))) {
        alert('Pick a valid number');
    } else {
        containerSize = userInput;
    }
})