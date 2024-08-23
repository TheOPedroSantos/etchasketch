// Etch a Sketch JS file

const container = document.getElementById('container');

// Function to create a new grid with 16*16
function createGrid(size) {
    container.innerHTML = '';

    container.style.setProperty('--grid-size', size)

    for (let i = 0; i < size * size; i++) {
        const containerItem = document.createElement('div');
        containerItem.classList.add('container-item');
        container.appendChild(containerItem);
    }

    const containerItem = document.getElementsByClassName('container-item');

        // Get a random value for the 'limit'
        const getRandomNumber = (limit) => {
            return Math.floor(Math.random() * limit);
        };

        // Get a random background color for the containerItems(squares)
        const getRandomColor = () => {
            const h = getRandomNumber(360);
            const s = getRandomNumber(100);
            const l = getRandomNumber(100);
            return `hsl(${h}deg, ${s}%, ${l}%)`;
        }

    // When mouseover, the background color of the containerItems is changed
    for (let item of containerItem) {
        item.addEventListener('mouseover', function() { 
            const randomColor = getRandomColor();
            item.style.backgroundColor = randomColor;
        });
    }
}
createGrid(16);

// Function to create a grid base on user input
const btn = document.getElementById('button');
btn.addEventListener('click', () => {
    userInput = prompt('Pick how many squares per side you want to generate? Max: 100');
    if (userInput < 1 || userInput > 100 || isNaN(userInput) || !Number.isInteger(Number(userInput))) {
        alert('Pick a valid number');
    } else {
        createGrid(userInput);
    }
});