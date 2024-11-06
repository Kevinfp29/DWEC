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
let intentos = 0;
function validar() {
    let errores = "";
    let inputs = document.querySelectorAll("input");
    document.getElementById("provincia").classList.remove("error");
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
        errores += "-El campo nombre no puede estar vacio" + "\n";
    }
    //Comprueba que el apellido no este vacio
    let apellidos = document.getElementById("apellidos").value;
    if (apellidos.length == 0) {
        document.getElementById("apellidos").classList.add("error");
        event.preventDefault();
        errores += "-El campo apellido no puede estar vacio" + "\n";
    }

    //Comprueba que la edad sea un numero, sea mayor de 0, menor de 105 y que no este vacio
    let edad = document.getElementById("edad").value;
    if(isNaN(edad) ||edad < 0 || edad > 105 || edad.length == 0){
        document.getElementById("edad").classList.add("error");
        event.preventDefault();
        errores += "-La edad es invalida" + "\n";
    }

    //Comprueba que sean ocho numeros y una letra, despues comprueba que la letra sea la correcta
    let dni = document.getElementById("nif").value;
    let suma = 0, resto = 0;
    if(!/^\d{8}[A-Z]$/.test(dni)){
        document.getElementById("nif").classList.add("error");
        event.preventDefault();
        errores += "-Falta un NIF valido" + "\n";
    }else{
        let numeroDNI = parseInt(dni.slice(0, 8), 10);
        resto = numeroDNI % 23;
        let cadena = "TRWAGMYFPDXBNJZSQVHLCKE";
        if (cadena.charAt(resto) != dni.charAt(8)) {
            document.getElementById("nif").classList.add("error");
            event.preventDefault();
            errores += "-Falta un NIF valido" + "\n";
        }
    }

    //Comprueba el correo electronico mediante una expresion regular
    let email = document.getElementById("email").value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        document.getElementById("email").classList.add("error");
        event.preventDefault();
        errores += "-El campo email esta incorrecto" + "\n";
    }

    //Comprueba que la provincia esta seleccionada
    let provincia = document.getElementById("provincia").value;
    if (provincia == 0) {
        document.getElementById("provincia").classList.add("error");
        event.preventDefault();
        errores += "-Debes seleccionar una provincia" + "\n";
    }

    //Comprueba la fecha con una expresion regular
    let fecha = document.getElementById("fecha").value;
    if(!/^(0[1-9]|[12][0-9]|3[01])[-\/](0[1-9]|1[0-2])[-\/](\d{4})$/.test(fecha)){
        document.getElementById("fecha").classList.add("error");
        event.preventDefault();
        errores += "-Fecha invalida" + "\n";
    }

    //Comprueba que el telefono tenga 9 digitos
    let telefono = document.getElementById("telefono").value;
    if (isNaN(telefono) || telefono.length != 9 || telefono.length == 0) {
        document.getElementById("telefono").classList.add("error");
        event.preventDefault();
        errores += "-Telefono invalida" + "\n";
    }

    //Comprueba la hora con una expresion regular
    let hora = document.getElementById("hora").value;
    if (!/^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/.test(hora)) {
        document.getElementById("hora").classList.add("error");
        event.preventDefault();
        errores += "-Hora invalida" + "\n";
    }

    //Insertamos lo errores que hemos ido recogiendo en cada uno de los campos
    document.getElementById("errores").innerText = errores;
    
    

    //Actualizamos los intentos
    document.getElementById("intentos").innerHTML = ++intentos;
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