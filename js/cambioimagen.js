/*código para cambiar imagen al pasar el mouse y volverlo a sacar*/
let viejo = document.querySelector('#docupdf');
let nuevo = document.querySelector('#docupdf');

viejo.addEventListener('mouseover', ver);

function ver() {
    document.getElementById('docupdf').src = "img/view.png";
    document.getElementById('escribir').innerHTML = "¡CONSULTA MI CV!";
}
nuevo.addEventListener('mouseout', volver);

function volver() {
    document.getElementById('docupdf').src = "img/document.png";
    document.getElementById('escribir').innerHTML = "CV TERESA MARTÍNEZ";
}