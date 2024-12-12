window.addEventListener("load", iniciar);

function iniciar() {
    miXHR = new XMLHttpRequest();
    document.getElementById("enviar").addEventListener("click", enviarFormulario, false);
}

function enviarFormulario() {
    let campo = document.getElementById("campo").value;
    let valor = document.getElementById("valor").value;

    // Asegúrate de que las variables están correctamente codificadas y formateadas
    if (campo && valor) {
        cargarAsync(`datosjson.php?campo=${campo}&valor=${valor}`);
    } else {
        console.error('Faltan los parámetros "campo" o "valor"');
    }
}

function cargarAsync(url) { 
    if (miXHR) {     
        document.getElementById("indicador").innerHTML = "<img src='ajax-loader.gif'/>";

        // Si existe el objeto  miXHR 
        miXHR.open('GET', url, true); // Abrimos la url, true = ASINCRONA 

        // En cada cambio de estado(readyState) se llamará a la función estadoPeticion 
        miXHR.onreadystatechange = estadoPeticion;

        // Hacemos la petición al servidor. Como parámetro: null ya que los datos van por GET 
        miXHR.send(null);
    }
}

function estadoPeticion() {
    // Haremos la comprobación en este orden ya que primero tiene que llegar readyState == 4  
    // y por último se comprueba el status devuelto por el servidor == 200. 
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("indicador").innerHTML = "";

        // Ahora que la respuesta es JSON, utilizamos JSON.parse() para convertirla en un objeto JavaScript.
        let datos = JSON.parse(this.responseText);

        // Crear la tabla con los datos
        let salida = tabla();
        datos.forEach(centro => {
            let tr = document.createElement("tr");
            let tdNombreCentro = document.createElement("td");
            tdNombreCentro.textContent = centro.nombrecentro;
            tr.appendChild(tdNombreCentro);

            let tdLocalidad = document.createElement("td");
            tdLocalidad.textContent = centro.localidad;
            tr.appendChild(tdLocalidad);

            let tdProvincia = document.createElement("td");
            tdProvincia.textContent = centro.provincia;
            tr.appendChild(tdProvincia);

            let tdTelefono = document.createElement("td");
            tdTelefono.textContent = centro.telefono;
            tr.appendChild(tdTelefono);

            let tdFechaVisita = document.createElement("td");
            tdFechaVisita.textContent = centro.fechavisita;
            tr.appendChild(tdFechaVisita);

            let tdNumVisitantes = document.createElement("td");
            tdNumVisitantes.textContent = centro.numvisitantes;
            tr.appendChild(tdNumVisitantes);

            salida.appendChild(tr);
        });

        document.getElementById("resultados").appendChild(salida);
    }
}

function tabla() {
    let tabla = document.createElement("table");
    tabla.setAttribute("border", 1);
    let tr = document.createElement("tr");

    let listaTH = ["Nombre Centro", "Localidad", "Provincia", "Telefono", "Fecha Visita", "Numero Visitantes"];
    listaTH.forEach(titulo => {
        let th = document.createElement("th");
        th.textContent = titulo;
        tr.appendChild(th);
    });

    tabla.appendChild(tr);
    return tabla;
}
