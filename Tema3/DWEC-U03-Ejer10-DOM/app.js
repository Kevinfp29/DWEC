window.addEventListener("DOMContentLoaded", iniciar);
let control = true;
function iniciar() {
    crearTabla();
    document.getElementsByClassName("color1")[0].addEventListener("click", color1, false);
    document.getElementsByClassName("color2")[0].addEventListener("click", color2, false);
    document.getElementsByClassName("color3")[0].addEventListener("click", color3, false);
    document.getElementsByClassName("color4")[0].addEventListener("click", color4, false);
    document.getElementsByClassName("color5")[0].addEventListener("click", color5, false);
    document.getElementsByClassName("color6")[0].addEventListener("click", color6, false);
    let tds = document.querySelectorAll("table.tablerodibujo td");
    for (let i = 0; i < tds.length; i++) {
        tds[i].addEventListener("click", asignarColorear, false);
    }
}

function asignarColorear() {
    let tds = document.querySelectorAll("table.tablerodibujo td");
    if (control) {
        for (let i = 0; i < tds.length; i++) {
            tds[i].addEventListener("mouseover", colorear, false);
        }
        control = false;
        document.getElementById("pincel").textContent = "PINCEL ACTIVADO";
    } else {
        for (let i = 0; i < tds.length; i++) {
            tds[i].removeEventListener("mouseover", colorear, false);
        }
        control = true;
        document.getElementById("pincel").textContent = "PINCEL DESACTIVADO";
    }
}

//CAMBIAR COLORES Y SELECCIONADO
function color1() {
    resetearSeleccionado()
    document.getElementsByClassName("color1")[0].setAttribute("class", `color1 seleccionado`);
}
function color2() {
    resetearSeleccionado()
    document.getElementsByClassName("color2")[0].setAttribute("class", `color2 seleccionado`);
}
function color3() {
    resetearSeleccionado()
    document.getElementsByClassName("color3")[0].setAttribute("class", `color3 seleccionado`);
}
function color4() {
    resetearSeleccionado()
    document.getElementsByClassName("color4")[0].setAttribute("class", `color4 seleccionado`);
}
function color5() {
    resetearSeleccionado()
    document.getElementsByClassName("color5")[0].setAttribute("class", `color5 seleccionado`);
}
function color6() {
    resetearSeleccionado()
    document.getElementsByClassName("color6")[0].setAttribute("class", `color6 seleccionado`);
}

function resetearSeleccionado() {
    let clases = document.getElementsByClassName("seleccionado")[0].getAttribute("class");
    let partes = clases.split(" ");
    document.getElementsByClassName(partes[0])[0].setAttribute("class", partes[0]);
}
function colorear() {
    let colorSeleccionado = document.querySelector(".seleccionado").classList[0];
    this.setAttribute("class", colorSeleccionado);
}
//CREAR TABLAS
function crearTabla() {
    let tabla = document.createElement("table");
    tabla.setAttribute("class", "tablerodibujo");
    for (let i = 0; i < 30; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 30; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    document.getElementById("zonadibujo").appendChild(tabla);
}