// Etch a Sketch JS file

const grid = document.querySelector('.grid');

addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
        const userInput = prompt('Choose the number of squares per side of the new grid', 16);
        if (userInput !== null) {
            removeAllChildElements(grid);
            createGrid(+userInput);
        };
    });
});


function removeAllChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(size = 16) {
    // If size is bigger than 100, then its 100. else, gets the determined size
    size = (size > 100) ? 100 : size;

    const itemBrightness = new Array(size * size).fill(1);

    for (let i = 1; i <= size * size; i++) {
        const containerItem = document.createElement('div');
        containerItem.classList.add('container-item');
        containerItem.style.width = `${100 / size}%`;

        containerItem.addEventListener('mouseenter', () => {
            // Change of color on the first interaction
            if (itemBrightness[i] === 1) {
                const red = getRandom(0, 256);
                const green = getRandom(0, 256);
                const blue = getRandom(0, 256);
                containerItem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            }
            // Decrease the brightness by 10% after every interaction
            itemBrightness[i] -= 0.1;
            containerItem.style.filter = `brightness(${itemBrightness[i]})`;
        });

        grid.appendChild(containerItem);
    };
};

function getRandom(from = 0, to = 1) {
    return from + Math.floor((Math.random() * to));
}

createGrid();