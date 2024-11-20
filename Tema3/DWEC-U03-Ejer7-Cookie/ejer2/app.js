document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("guardar").addEventListener("click",anadirVariable);
    document.getElementById("leer").addEventListener("click",cogerVariable);
});


function anadirVariable(){
    var nombre=document.getElementById("nombre");
    var valor=document.getElementById("valor");
    crearVariable(nombre.value,valor.value,false);
}

function cogerVariable(){
    var valorVer=document.getElementById("verValor");
    getVariable(valorVer.value,false);
}