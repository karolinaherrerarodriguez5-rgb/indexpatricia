document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el título circular
    const title = document.querySelector('header h1');

    // Define una función para cambiar el color del título
    function changeTitleColor() {
        const colors = ['#2a5d34', '#4a6d4f', '#5a7f5d', '#a1c4a6'];
        // Elige un color aleatorio
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        // Cambia el color del título
        title.style.color = randomColor;
    }

    // Añade un evento de clic al título para cambiar el color
    title.addEventListener('click', changeTitleColor);
});
