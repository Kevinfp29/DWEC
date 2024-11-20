document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("guardar").addEventListener("click", guardarCookie);
    document.getElementById("leer").addEventListener("click",verCookie);
});



function guardarCookie(){
    var nombre=document.getElementById("nombre");
    var valor=document.getElementById("valor");
    crearCookie(nombre.value,valor.value);
    nombre.value="";
    valor.value="";

}

function verCookie(){
    var nombre=document.getElementById("verValor");
    leerCookie(nombre.value);
    nombre.value="";
}