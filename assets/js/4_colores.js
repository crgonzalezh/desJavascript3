// Cambiar el color de los divs a negro al hacer clic
const divs = ['blue', 'red', 'green', 'yellow'];
divs.forEach(id => {
    const element = document.getElementById(id);
    element.addEventListener('click', () => {
        element.style.backgroundColor = 'black';
    });
});

// Variable global para almacenar el color según la tecla presionada
let currentColor = '';

// Manejar la pulsación de teclas para cambiar el color del div "key"
document.addEventListener('keydown', function (event) {
    const keyDiv = document.getElementById('key');

    if (event.key === 'a') {
        currentColor = 'pink';
        keyDiv.style.backgroundColor = currentColor;
    } else if (event.key === 's') {
        currentColor = 'orange';
        keyDiv.style.backgroundColor = currentColor;
    } else if (event.key === 'd') {
        currentColor = 'skyblue';
        keyDiv.style.backgroundColor = currentColor;
    } else if (event.key === 'q') {
        createColoredDiv('purple');
    } else if (event.key === 'w') {
        createColoredDiv('gray');
    } else if (event.key === 'e') {
        createColoredDiv('brown');
    }
});

// Función para crear un nuevo div con un color específico
function createColoredDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    document.body.appendChild(newDiv);
}
