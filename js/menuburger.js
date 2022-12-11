let btnMenu = document.querySelector('#cruz');
let aspa = document.querySelector('#cruz');
let menu = document.querySelector('#menu');

// Muestra el menú hamburguesa o lo oculta

btnMenu.addEventListener('click', muestraMenu);

function muestraMenu() {
    menu.classList.toggle('mostrar');
    aspa.classList.toggle('fa-times');
}