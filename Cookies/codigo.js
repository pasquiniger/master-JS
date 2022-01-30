"user strict";

const newFechaUTC = dias =>{
    let fecha = new Date();
    fecha.setTime(fecha.getTime()+ dias*1000*60*60*24);
    return fecha.toUTCString()
}

const crearCookie = (nombre, dias)=>{
    let expires = newFechaUTC(dias);
    document.cookie = `${nombre};expires=${expires}`
};

const obtenerCookie = cookieName =>{
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for (let i=0; cookies.length > i; i++){
        let cookie = cookies[i].trim(); //trim elimina espacios en blanco innecesarios
        if (cookie.startsWith(cookieName)){
            return cookie.split("=")[1]
        }   
    }
    return "No hay cookies con ese nombre"
}