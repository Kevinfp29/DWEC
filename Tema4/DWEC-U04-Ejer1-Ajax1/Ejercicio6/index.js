////////////////////////////////////////////////////////////////////
// Cuando el documento esté cargado llamamos a la función iniciar().
////////////////////////////////////////////////////////////////////
window.addEventListener("load",iniciar);
/////////////////////////////////////////////////////////

function iniciar()
{
	// Creamos un objeto XHR.
	miXHR = new XMLHttpRequest;	
	
	// Cargamos los datos XML de forma asíncrona.
	// En este caso ponemos una página PHP que nos devuelve datos en formato XML

	let enviar=document.getElementById("enviar");

	enviar.addEventListener("click",function(){
		cargarAsync("datosxml4.php");
	},false);

	// pero podríamos poner también el nombre de un fichero XML directamente: catalogo.xml
	// Se adjunta ejemplo de fichero XML.
	//cargarAsync("catalogo.xml");
}

function crearImagen(src){
	let imagen = document.createElement("img");
	imagen.src=src;
	imagen.id=1;
	document.getElementById("indicador").appendChild(imagen);
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
		crearImagen("ajax-loader.gif");
		
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

function tabla(){
	let tabla = document.createElement("table");
	tabla.setAttribute("border",1);
	var tr = document.createElement("tr");
	let inNom = document.getElementById("nombre");
    let inCurso = document.getElementById("curso");
    let inHoras = document.getElementById("horas");
    let inProf = document.getElementById("profesor");

    if (inNom.checked) {
        let th = document.createElement("th");
        let nombre = document.createTextNode("Nombre");
        th.appendChild(nombre);
        tr.appendChild(th);
    }

    if (inCurso.checked) {
        let th = document.createElement("th");
        let curso = document.createTextNode("Curso");
        th.appendChild(curso);
        tr.appendChild(th);
    }

    if (inHoras.checked) {
        let th = document.createElement("th");
        let numHoras = document.createTextNode("Número de Horas");
        th.appendChild(numHoras);
        tr.appendChild(th);
    }

    if (inProf.checked) {
        let th = document.createElement("th");
        let profesor = document.createTextNode("Profesor");
        th.appendChild(profesor);
        tr.appendChild(th);
    }

    tabla.appendChild(tr);
	return tabla;
}

function estadoPeticion()
{
	if (this.readyState==4 && this.status == 200)
	{

		var datos=this.responseXML;

		let asignaturas= datos.documentElement.getElementsByTagName("ASIGNATURA");
		
		let inNom=document.getElementById("nombre");
		let inCurso=document.getElementById("curso");
		let inHoras=document.getElementById("horas");
		let inProf=document.getElementById("profesor");

		let resultados=document.getElementById("resultados");
		resultados.innerHTML="";


		salida = tabla();
		
		// Hacemos un bucle para recorrer todos los elementos CD.
		for (i=0;i<asignaturas.length;i++)
		{
			let tr = document.createElement("tr");			
			salida.appendChild(tr);
			//salida+="<tr>";
			
			// Para cada CD leemos el título
			let nombres=asignaturas[i].getElementsByTagName("NOMBRE");
			
			if(inNom.checked){
				try	// Intentamos imprimir el contenido de ese elemento
					{
						let td = document.createElement("td");
						let texto = document.createTextNode(nombres[0].firstChild.nodeValue);
						td.appendChild(texto);
						salida.appendChild(td);
						//salida+="<td>" + titulos[0].firstChild.nodeValue + "</td>";
					}
				catch (er)	// En el caso de que no tenga contenido ese elemento, imprimimos un espacio en blanco
					{
						let td = document.createElement("td");
						let texto = document.createTextNode("");
						td.appendChild(texto);
						salida.appendChild(td);
						//salida+= "<td>&nbsp;</td>";
					}
			}

			if(inCurso.checked){
				
			// Para cada CD leemos el Artista
				let cursos=asignaturas[i].getElementsByTagName("CURSO");
				try	// Intentamos imprimir el contenido de ese elemento
					{
						let td = document.createElement("td");
						let texto = document.createTextNode(cursos[0].firstChild.nodeValue);
						td.appendChild(texto);
						salida.appendChild(td);
						//salida+="<td>" + titulos[0].firstChild.nodeValue + "</td>";
					}
				catch (er)	// En el caso de que no tenga contenido ese elemento, imprimimos un espacio en blanco
					{
						let td = document.createElement("td");
						let texto = document.createTextNode("");
						td.appendChild(texto);
						salida.appendChild(td);
						//salida+="<td>&nbsp;</td>";
					}
			
				}

			
			if(inHoras.checked){
				
			// Para cada CD leemos el Año
				let horas=asignaturas[i].getElementsByTagName("HORAS");
				try	// Intentamos imprimir el contenido de ese elemento
					{
						let td = document.createElement("td");
						let texto = document.createTextNode(horas[0].firstChild.nodeValue);
						td.appendChild(texto);
						salida.appendChild(td);
						//salida+="<td>" + titulos[0].firstChild.nodeValue + "</td>";
					}
				catch (er)	// En el caso de que no tenga contenido ese elemento, imprimimos un espacio en blanco
					{
						let td = document.createElement("td");
						let texto = document.createTextNode("");
						td.appendChild(texto);
						salida.appendChild(td);
						//salida+="<td>&nbsp;</td>";
					}
			}

			if(inProf.checked){

                let profes=asignaturas[i].getElementsByTagName("PROFESOR");
                try	// Intentamos imprimir el contenido de ese elemento
                    {
                        let td = document.createElement("td");
                        let texto = document.createTextNode(profes[0].firstChild.nodeValue);
                        td.appendChild(texto);
                        salida.appendChild(td);
                        //salida+="<td>" + titulos[0].firstChild.nodeValue + "</td>";
                    }
                catch (er)	// En el caso de que no tenga contenido ese elemento, imprimimos un espacio en blanco
                    {
                        let td = document.createElement("td");
                        let texto = document.createTextNode("");
                        td.appendChild(texto);
                        salida.appendChild(td);
                        //salida+="<td>&nbsp;</td>";
                    }
			}
			
			// Podríamos seguir sacando más campos del fichero XML..
			
			// Cerramos la fila.			
			//salida+="</tr>";
		}
		
		// Cuando ya no hay más Cd's cerramos la tabla.
		//salida+="</table>";
		
		// Desactivamos el indicador AJAX cuando termina la petición
		document.getElementById("indicador").removeChild(document.getElementById("indicador").childNodes[0]); 
		
		// Imprimimos la tabla dentro del contenedor resultados.
		//document.getElementById("resultados").removeChild(document.getElementById("resultados").childNodes[0]);
		document.getElementById("resultados").appendChild(salida);
	}
}