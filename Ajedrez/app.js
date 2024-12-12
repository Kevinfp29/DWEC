window.onload = function() {
    /*
    for (let i = 0; i < 5; i++) {
        let ul = document.createElement("ul");
        if(i%2==0){
            ul.style.backgroundColor = "blue";
        }
        for (let j = 0; j < 11; j++) {
            let li = document.createElement("li");
            let texto = document.createTextNode(`lista ${i}, elemento ${j}`)
            li.appendChild(texto)
            if (j%2==0) {
                li.style.color = "red"
            }else{
                li.style.color = "yellow"
            }
            if(j == 5){
                li.style.listStyle = "square"
                li.style.fontWeight = "bold"
                li.style.backgroundColor = "red"
            }
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
    }
    */
    let table = document.createElement("table");
    for (let i = 0; i < 8; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 8; j++) {
            let img = document.createElement("img");
            if ((i==0) && (j==0 || j==7)) {
                img.setAttribute("src","imagenes/torreNegra.png");
            }
            if ((i==0) && (j==1 || j==6)) {
                img.setAttribute("src","imagenes/caballoNegra.png");
            }
            if ((i==0) && (j==2 || j==5)) {
                img.setAttribute("src","imagenes/alfilNegra.png");
            }
            if ((i==0) && (j==3)) {
                img.setAttribute("src","imagenes/reinaNegra.png");
            }
            if ((i==0) && (j==4)) {
                img.setAttribute("src","imagenes/reyNegra.png");
            }
            if (i==1){
                img.setAttribute("src","imagenes/peonNegra.png");
            }
            img.style.width = "200px"
            let td = document.createElement("td");
            td.appendChild(img);
            td.style.width = "300px";
            td.style.height = "300px";
            td.style.textAlign = "center";
            if (i%2==0) {
                if(j%2==0){
                    td.style.backgroundColor = "black";
                }
            }else{
                if(j%2!=0){
                    td.style.backgroundColor = "black";
                }
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
        table.setAttribute("border", 1)
    }
    document.body.appendChild(table);
}
