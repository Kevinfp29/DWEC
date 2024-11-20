//Kevin Fernandez Pizarro
function crearVariable(nombre,valor, sesion){
    if(nombre==undefined && valor==undefined){
        return;
    }
    if(sesion){
        sessionStorage.setItem(nombre,valor);
    }else{
        localStorage.setItem(nombre,valor);
    }
}

function getVariable(nombre,sesion){
    valor;
    if(sesion){
        valor=sessionStorage.getItem(nombre);
    }else{
        valor=localStorage.getItem(nombre);
    }
    if(valor==undefined){
        valor=null;
    }
    alert(valor);

}


