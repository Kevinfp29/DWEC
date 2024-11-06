/*
Al cargar la página deberá asignar los eventos siguientes:
Un evento click en el botón enviar, que llamará a una función para validar el formulario.
Un evento blur al elemento nombre y al elemento apellidos, que llamará a una función que pondrá en mayúsculas las iniciales.
La función enviar deberá comprobar cada uno de los campos, y si alguno no es correcto anulará la acción por defecto del botón.
Antes de chequear los campos, deberá eliminarse la clase css "error" si estuviera activa en alguno de ellos. Se aplicará la clase css "error" en aquellos campos que no cumplan los requisitos validos.
Los campos nombre y apellidos no pueden estar en blanco, y tendrán el primer carácter de cada palabra en mayúsculas. Éstas se asignarán automáticamente al abandonar el campo.
El campo edad debe ser numérico y estar comprendido entre 0 y 105 años.
El campo dni debe estar formado por ocho dígitos y una letra mayúscula, separados por un guión. Se deberá comprobar que la letra del documento es correcta. Investigar como se obtiene la letra del DNI.
El campo email será de la siguiente manera:
Debe comenzar con caracteres alfanuméricos, en mayúsculas o minúsculas, subrayados, puntos, etc.
Debe haber un símbolo @ después de los caracteres iniciales.
Después de la arroba puede haber caracteres alfanuméricos. También puede contener puntos . y guiones -.
Debe haber un punto . después del segundo grupo de caracteres para separar los dominios y subdominios.
Finalmente la dirección de e-mail deber terminar debe terminar con 2, 3 o cuatro caracteres para el dominio, de tipo alfabético.
Para la provincia, se comprobará que se ha elegido una.
El campo fecha responderá al siguiente patrón: dd-mm-aaaa o bien dd/mm/aaaa.
El campo teléfono deberá estar formado por 9 dígitos.
El campo hora responderá al formato: hh:mm.
Se añadirán dos botones de radio para elegir el formato de 12 o 24 horas.
Se comprobará que tanto la fecha como la hora sean correctas.
Si se detecta algún fallo, se indicará en el campo errores, y se marcará en rojo el componente del formulario que no cumple con los requisitos.
Se deberá contabilizar cada uno de los intentos, indicando el número en el campo intentos.
*/
window.onload = function() {
    document.getElementById("btnEnviar").addEventListener("click", validar, false);
    document.getElementById("nombre").addEventListener("blur", mayusculaNom, false);
    document.getElementById("apellidos").addEventListener("blur",mayusculaApe,false);
};

function validar() {
let inputs = document.querySelectorAll("input");

//Elimina la clase error de todos los inputs
for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("error");
}
//Comprueba que el nombre no este vacio
let nombre = document.getElementById("nombre").value;
if (nombre.length == 0) {
    document.getElementById("nombre").classList.add("error");
    //Desactiva el boton enviar
    event.preventDefault();
}
//
let apellidos = document.getElementById("apellidos").value;
if (apellidos.length == 0) {
    document.getElementById("apellidos").classList.add("error");
    event.preventDefault();
}

let edad = document.getElementById("edad").value;
if(isNaN(edad) ||edad < 0 || edad > 105 || edad.length == 0){
    document.getElementById("edad").classList.add("error");
    event.preventDefault();
}

let dni = document.getElementById("dni").value;
let suma = 0, resto = 0;
if((!(/^\d{8}[A-Z]$/).test(dni))){
    document.getElementById("edad").classList.add("error");
    event.preventDefault();
}else{
    for (let i = 0; i < dni.length-1; i++) {
        suma += parseInt(dni.charAt(i));
    }
    dni.
    resto = suma%23;

}
}

function mayusculaNom() {
    let nombre = document.getElementById("nombre").value;
    let nuevoNombre = "";
    for (let i = 0; i < nombre.length; i++) {
        if(i == 0){
            nuevoNombre += nombre.charAt(i).toUpperCase();
        }else{
            nuevoNombre += nombre.charAt(i);
        }
    }
   document.getElementById("nombre").value = nuevoNombre;
}

function mayusculaApe() {
    let apellido = document.getElementById("apellidos").value;
    let nuevoApellido = "";
    for (let i = 0; i < apellido.length; i++) {
        if(i == 0){
            nuevoApellido += apellido.charAt(i).toUpperCase();
        }else{
            nuevoApellido += apellido.charAt(i);
        }
    }
   document.getElementById("apellidos").value = nuevoApellido;
}

function botonEnviar() {
    document.getElementById("enviar").setAttribute("type","button");
}