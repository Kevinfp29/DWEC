/*
Añadir un párrafo con un mensaje de bienvenida a la página y colocarlo al principio del body.

Añadir, a continuación del anterior, una imagen con el logotipo del instituto.

Mover los dos enlaces para que formen parte del párrafo Primero.

Modificar el destino del segundo enlace para que apunte a la página de inicio del instituto.

Crear un nuevo párrafo con id="Segundo", que cuelgue del párrafo Primero. Dicho párrafo se convertirá en el primer contenido del párrafo padre. El contenido de dicho párrafo será el texto IES Julio Verne, y tendrá un atributo para centrar el texto.

Añadir tres cuadros de texto con etiquetas Nombre, Apellido y Curso para que los 
alumnos puedan introducir sus datos. Cada cuadro de texto estará en una línea distinta.

Añadir varios checkbox que representen los módulos del 2º curso del ciclo, con su atributo 'value'
correspondiente. Deben tener etiquetas que indiquen el módulo concreto.
Los módulos son: 'EIE','DIWB','DWEC','DWES','LC','DAI'.

Mostrar mediante un 'alert' la información de los atributos de las etiquetas de los párrafos del documento.

Eliminar el cuadro de texto que representa el curso y sustituirlo por un texto indicando el 2º curso.
*/ 
window.onload = function() {
    //Añadir al principio de la pagina 
    let p = document.createElement("p");
    p.textContent = "Bienvenido a mi pagina";
    document.body.prepend(p);

    //Añadir la imagen despues de la bienvenida
    let img = document.createElement("img");
    img.setAttribute("src", "./images/logo_jverne.png");
    p.after(img);

    //Añadimos lso enlaces a el parrafo Primera
    let enlaces = document.querySelectorAll("a");
    for (let i = 0; i < enlaces.length; i++) {
        document.getElementById("Primero").appendChild(enlaces[i]);
    }

    //Modificar el src del segundo parrafo
    enlaces[1].setAttribute("href", "https://www.iesjulioverne.es/");

    //Añadimos un parrafo a "Primero"
    let p1 = document.createElement("p");
    p1.textContent="IES Julio Verne";
    p1.setAttribute("id","Segundo");
    p1.style.textAlign = "center";
    document.getElementById("Primero").prepend(p1);

    //Añadir tres cuadros de texto con etiquetas Nombre, Apellido y Curso
    let lista = ["Nombre","Apellido","Curso"];
    for (let i = 0; i < lista.length; i++) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        let br = document.createElement("br");
        input.setAttribute("type","text");
        input.setAttribute("id", lista[i]);
        label.setAttribute("for", lista[i]);
        label.textContent = lista[i];
        document.body.appendChild(label);
        document.body.appendChild(input);
        document.body.appendChild(br);
    }
    
    //Añadir varios checkbox 
    let modulos = ['EIE','DIWB','DWEC','DWES','LC','DAI'];
    for (let i = 0; i < modulos.length; i++) {
        let checkbox = document.createElement("input");
        let label = document.createElement("label");
        let br = document.createElement("br");
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("value",modulos[i]);
        checkbox.setAttribute("id", modulos[i]);
        label.setAttribute("for", modulos[i]);
        label.textContent = modulos[i];
        document.body.appendChild(label);
        document.body.appendChild(checkbox);
        document.body.appendChild(br);
    }

    //Mostrar mediante un 'alert' la información de los atributos de las etiquetas de los párrafos del documento.
    let parrafos = document.querySelectorAll("p");
    for (let i = 0; i < parrafos.length; i++) {
        let atributos = parrafos[i].attributes;
        let cadena = "";
        for (let j = 0; j < atributos.length; j++) {
            cadena += atributos[j].name + ": " + atributos[j].value + " ";
        }
        alert(cadena);
        cadena = "";
    }

    //Eliminar el cuadro de texto que representa el curso y sustituirlo por un texto indicando el 2º curso.
    document.getElementById("Curso").remove();
    let segundo = document.createElement("p");
    segundo.textContent = "2º curso";
    let etiquetas = document.querySelectorAll("label");
    etiquetas[2].after(segundo);

};

