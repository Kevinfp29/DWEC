window.addEventListener("DOMContentLoaded", iniciar);
function iniciar(){
    document.getElementById("btn_guardar").addEventListener("click",guardarConfiguracion,false);
}

function guardarConfiguracion() {
    let colorFondo = document.getElementById("colorFondo").getAttribute("value");
    let colorH = document.getElementById("colorH").value;
    let fuenteH = document.getElementById("fuenteH").value;
    let alinearH = document.getElementById("alinearH").value;
    let sizeH = document.getElementById("sizeH").value;
    let colorP = document.getElementById("colorP").value;
    let fuenteP = document.getElementById("fuenteP").value;
    let alinearP = document.getElementById("alinearP").value;
    let sizeP = document.getElementById("sizeP").value;

    document.body.style.backgroundColor = colorFondo;
}