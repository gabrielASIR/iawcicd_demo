// Mapeo en variables los elementos HTML que voy a utilizar
let idUsuario = document.getElementById("user");
let passUsuario = document.getElementById("pass");
let terminosUsuario = document.getElementById("term");
let formulario = document.getElementById("formulario");

let msgID = document.getElementById("user_msg");
idUsuario.addEventListener("change", validarID);
function validarID() {
    // Recupero el numero que ha escrito el usuario en el campo.
    let idRecogido = idUsuario.value;

    // Miro si esta en el rango correcto.
    if(idRecogido >= 0 && idRecogido <=100) {
        msgID.style.color = "green";
    } else {
        msgID.style.color = "red";
    }
}

let msgPass = document.getElementById("pass_msg");
passUsuario.addEventListener("input", validarPass);
function validarPass() {
    // Recupero el valor del password del usuario
    let passRecogido = passUsuario.value;

    // Comprobar que tiene al menos 5 caracteres de longitud
    if(passRecogido.length >= 5 ) {
        msgPass.style.color = "green";
    } else {
        msgPass.style.color = "red";
    }
}

let msgTerm = document.getElementById("term_msg");
terminosUsuario.addEventListener("input", validarTerm);
function validarTerm() {
    // Recupero si esta checkeado o no el checkbox
    let termRecogido = terminosUsuario.checked;
    
    // Si esta checkeado cambiar a verde y si no mantener en rojo.
    if(termRecogido == true) {
        msgTerm.style.color = "green";
    } else {
        msgTerm.style.color = "red";
    }
}

formulario.addEventListener("submit", envioForm);
function envioForm(e) {
    // Comprobar que todos los requisitos se han cumplido

    
    // Si se cumplen todos enviar el formulario.


    // Si no se evita que el formulario se envíe.
    e.preventDefault();
}
