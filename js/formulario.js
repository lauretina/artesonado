window.onload = esperarEvento;

function esperarEvento() {
    document.querySelector('#botonEnvia').addEventListener('click', enviarFormulario);
}

// Validar los campos 
function enviarFormulario() {
    // Inicio una variable para los campos validados
    let camposValidados = 0;
    // Validar Nombre
    if (validaNombre()) {
        camposValidados++;
    }

    // Validar Mail
    if (validaMail()) {
        camposValidados++;
    }

    // Validar Teléfono
    if (validaTelefono()) {
        camposValidados++;
    }

    // Validar Política de Privacidad
    if (validaPolitica()) {
        camposValidados++;
    }

    // Envía el formulario si se cumplen todas las condiciones
    if (camposValidados == 4) {

        alert('Formulario enviado con éxito');
        document.formula.submit();
        spanError.className = 'noError';
        entrada.className = 'noborderror';
    }
}

// Validar Nombre
function validaNombre() {
    // Expresión regular para validar un campo de texto (nombre)
    // Inicialización de variables
    let nombreUsuario = document.querySelector('#nombre').value;
    let entrada = document.querySelector('#nombre');
    let spanError = document.querySelector('#nombreError');

    if (nombreUsuario == null || nombreUsuario.length == 0 || /^\s+$/.test(nombreUsuario) || /^\d+$/.test(nombreUsuario)) {
        spanError.innerHTML = '* Introduzca un nombre correcto, por favor';
        spanError.className = 'error';
        entrada.className = 'borderror';
        return false;
    } else {
        spanError.className = 'noError';
        entrada.className = 'noborderror';
        return true;
    }
}

// Función Validar Mail
function validaMail() {
    let correoUsuario = document.querySelector('#correo').value;
    let entrada = document.querySelector('#correo');
    let spanError = document.querySelector('#correoError');

    if (/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(correoUsuario)) {
        spanError.className = 'noError';
        entrada.className = 'noborderror';
        return true;
    } else {
        spanError.innerHTML = '* El correo introducido no es válido';
        spanError.className = 'error';
        entrada.className = 'borderror';
        return false;
    }
}

// Función Validar Teléfono
function validaTelefono() {
    let telefonoUsuario = document.querySelector('#telefono').value;
    let entrada = document.querySelector('#telefono');
    let spanError = document.querySelector('#telefonoError');

    if (!(/^\d{9}$/.test(telefonoUsuario))) {
        spanError.innerHTML = '* El teléfono introducido no es válido';
        spanError.className = 'error';
        entrada.className = 'borderror';
        return false;
    } else {
        spanError.className = 'noError';
        entrada.className = 'noborderror';
        return true;
    }
}

// Evaluar una entrada de tipo checkbox
function validaPolitica() {
    let politicaPrivacidad = document.querySelector('#condiciones');
    let spanError = document.querySelector('#politicaError');

    if (!politicaPrivacidad.checked) {
        spanError.innerHTML = '* Debe aceptar la política de privacidad';
        spanError.className = 'error';
        return false
    } else {
        spanError.className = 'noError';
        return true;
    }
}