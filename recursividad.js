"strict mode";
const validarEdad = (msg)=>{
    let edad;
    try{
        if (msg) edad = prompt(msg);
        else edad = prompt("introduce tu edad")
        edad = parseInt(edad);
        if (isNaN(edad)) throw "introduce un numero para tu edad"
        if (edad > 18) console.log("sos mayor de edad")
        else console.log("sos menor")
    } catch(e){
        validarEdad(e)
    }
}

validarEdad()