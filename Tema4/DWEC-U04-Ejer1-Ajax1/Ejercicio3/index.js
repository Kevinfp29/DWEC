////////////////////////////////////////////////////////////////////
// Cuando el documento esté cargado llamamos a la función iniciar().
////////////////////////////////////////////////////////////////////
window.addEventListener("load",iniciar);

/////////////////////////////////////////////////////////

function iniciar()
{
	// Creamos un objeto XHR.
	miXHR = new XMLHttpRequest;	

	let enviar=document.getElementById("enviar");
	enviar.addEventListener("click",enviarFormulario,false);
}

function enviarFormulario(){
	let nombre=document.getElementById("nombre").value;
	let localidad=document.getElementById("localidad").value;
	let provincia=document.getElementById("provincia").value;
	let telefono=document.getElementById("telefono").value;
	let fecha=document.getElementById("fecha").value;
	let visitas=document.getElementById("visitas").value;
	let url="datosjson.php?nombre="+nombre+"&local="+localidad+"&prov="+provincia+
		"&tfno="+telefono+"&fech="+fecha+"&numv="+visitas;
	cargarAsync(url);
}
/////////////////////////////////////////////////////////
// Función cargarAsync: carga el contenido de la url
// usando una petición AJAX de forma ASINCRONA.
/////////////////////////////////////////////////////////
function cargarAsync(url) 
{ 
	if (miXHR) 
	{	
		// Activamos el indicador Ajax antes de realizar la petición.
		document.getElementById("indicador").innerHTML="<img src='ajax-loader.gif'/>";
		
		//Si existe el objeto  miXHR
		miXHR.open('GET', url, true); //Abrimos la url, true=ASINCRONA 
		
		// En cada cambio de estado(readyState) se llamará a la función estadoPeticion
		miXHR.onreadystatechange = estadoPeticion;
	
		// Hacemos la petición al servidor. Como parámetro: null ya que los datos van por GET
		miXHR.send(null);
	}
}

/////////////////////////////////////////////////////////
// Función estadoPeticion: será llamada a cada cambio de estado de la petición AJAX
// cuando la respuesta del servidor es 200(fichero encontrado) y el estado de
// la solicitud es 4, accedemos a la propiedad responseText
/////////////////////////////////////////////////////////
function estadoPeticion()
{
	if (this.readyState == 4 && this.status == 200)
	{
		// Los datos JSON los recibiremos como texto en la propiedad this.responseText
		
		// Con la función JSON.parse evaluaremos ese resultado para convertir a objetos y variables el string que estamos recibiendo en JSON.
		// Lo que recibimos en formato JSON es un string que representa un array [ ... ] que contiene objetos literales {...},{...},... 
		/* Ejemplo: [ {"id":"2","nombrecentro":"IES A Piringalla","localidad":"Lugo","provincia":"Lugo","telefono":"982212010","fechavisita":"2010-11-26","numvisitantes":"85"} , {"id":"10","nombrecentro":"IES As Fontiñas","localidad" : ..... } ]  */
		
		// Asignamos a la variable resultados la evaluación de responseText
		// Al hacer parse nos devuelve un objeto.
		var resultados = JSON.parse(this.responseText);
		
		texto = "<table border=1><tr><th>Nombre Centro</th><th>Localidad</th><th>Provincia</th><th>Telefono</th><th>Fecha Visita</th><th>Numero Visitantes</th></tr>";
		// Hacemos un bucle para recorrer todos los objetos literales recibidos en el array resultados y mostrar su contenido.
		for (var objeto of resultados){
			texto+="<tr><td>"+objeto.nombrecentro+"</td><td>"+objeto.localidad+"</td><td>"+objeto.provincia+"</td><td>"+objeto.telefono+"</td><td>"+objeto.fechavisita+"</td><td>"+objeto.numvisitantes+"</td></tr>";
		}
	
		// Desactivamos el indicador AJAX cuando termina la petición
		document.getElementById("indicador").innerHTML="";
		
		// Imprimimos la tabla dentro del contenedor resultados.
		document.getElementById("resultados").innerHTML=texto;
	}
}