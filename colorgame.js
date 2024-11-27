// declare las variables
let numberOfSquares;
let colors = []; //intente con const pero se rompio
let pickedColor; 

// función Math.random que generar un color RGB aleatorio
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

// genera un arreglo de colores aleatorios
const generateRandomColors = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
};

// elegir un color al azar 
const pickColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

// cambiar todos los colores al color correcto
const changeColors = (color) => {
    squares.forEach(square => square.style.backgroundColor = color);
};

// empezar devuelta el juego y asignar nuevos colores
const reset = () => {
    // Generar nuevos colores y elegir el color ganador
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    
    // Actualizar el display
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#000000";
    resetButton.textContent = "Nuevos Colores🌈";

    // Asignar colores a los cuadrados y gestionar la visibilidad
    squares.forEach((square, index) => {
        if (colors[index]) {
            square.style.display = "block"; // Mostrar cuadrados disponibles
            square.style.backgroundColor = colors[index];
        } else {
            square.style.display = "none"; 
        }

        // evento para el clic en las estrellas
        square.addEventListener("click", () => {
            const clickedColor = square.style.backgroundColor;

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "¡ADIVINASTE! Que CRACK 🎉";
                messageDisplay.classList.add("fade"); 
                changeColors(pickedColor); 
                h1.style.backgroundColor = pickedColor; 
                resetButton.textContent = "¿Jugamos devuelta? 🔄"; 
            } else {
                square.style.backgroundColor = "#000000"; 
                messageDisplay.textContent = "Ups! Inténtalo nuevamente 😅";
                messageDisplay.classList.add("fade"); // añadir una clase para el efecto
            }

            // quita la clase después de que termine la animación (1 segundito)
            setTimeout(() => {
                messageDisplay.classList.remove("fade");
            }, 1000);
        });
    });
};

// maneja el evento del botón facil
const easyMode = () => {
    numberOfSquares = 3; // Cambiar a 3 cuadrados
    document.getElementById("easy").classList.add("selected");
    document.getElementById("hard").classList.remove("selected");
    reset(); // juego con 3 cuadrados
};

// maneja el evento del botón dificil
const hardMode = () => {
    numberOfSquares = 6; // cambia a 6 cuadrados
    document.getElementById("hard").classList.add("selected");
    document.getElementById("easy").classList.remove("selected");
    reset(); // juego con 6 cuadrados
};

// inicio del juego
const init = () => {
 
    squares = document.querySelectorAll(".square");
    colorDisplay = document.getElementById("colorDisplay");
    messageDisplay = document.getElementById("message");
    h1 = document.getElementById("h1");
    resetButton = document.getElementById("reset");

    
    numberOfSquares = 6; // empieza con 6 cuadrados
    reset();

    // evento para el botón jugamos devuelta o Nuevos Colores
    resetButton.addEventListener("click", () => {
        if (resetButton.textContent === "¿Jugamos devuelta? 🔄?") {
            resetButton.textContent = "Nuevos Colores🌈"; // Cambiar texto
        }
        reset(); // reiniciar el juego
    });

    // configura los botones de modo (facil y dificil)
    document.getElementById("easy").addEventListener("click", easyMode);
    document.getElementById("hard").addEventListener("click", hardMode);
};

//ayuda
const helpButton = document.getElementById("helpButton");
const helpText = document.getElementById("helpText");

// ayuda cuando pasamos el mouse en el boton
helpButton.addEventListener("mouseenter", () => {
    helpText.style.display = "block"; 
   
});

// oculta el texto de ayuda cuando el mouse sale del boton
helpButton.addEventListener("mouseleave", () => {
    helpText.style.display = "none"; // Ocultar ayuda
    helpButton.textContent = "💡"; // Volver al texto original del botón
});





// iniciar el juego, creo que ahi estamos
init();
