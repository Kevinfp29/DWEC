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
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            let td = document.createElement("td");
            td.style.width = "50px";
            td.style.height = "50px";
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
