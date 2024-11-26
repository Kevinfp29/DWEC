//Kevin Fernandez Pizarro
function crearCookie(nombre,valor, diasCaduc,ruta,dominio,seguro){
    cookie="";
    if(nombre!=undefined && valor!=undefined){
        cookie+=nombre+"="+valor;
    }else{
        return;
    }

    if(diasCaduc!=undefined){
        var d = new Date();
        d.setTime(d.getTime()+expiracion*24*60*60*1000);
        cookie+=";expires="+d.toUTCString();
    }

    if(ruta!=undefined){
        cookie+=";path="+ruta
    }

    if(dominio!=undefined){
        cookie+=";domain="+dominio;
    }

    if(seguro!=undefined){
        if(seguro==true){
            cookie+=";secure=true";
        }
    }

    document.cookie=cookie;
}


function leerCookie(nombre){
    var resultado = getCookie(nombre);
    return resultado;
}

function getCookie(nombre){
    var nom = nombre+"=";
    var array = document.cookie.split(";");
    for (var i=0; i<array.length; i++){
        var c = array[i];
        while (c.charAt(0)==" "){ 
            c = c.substring(1);
        }
        if (c.indexOf(nombre)==0){
            return c.substring(nom.length, c.length);
        }
    }
    return null;
}