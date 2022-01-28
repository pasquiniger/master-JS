"use strict";
const IDBRequest = indexedDB.open("primerabase",1);
console.log(indexedDB)

IDBRequest.addEventListener("upgradeneeded", ()=>{
    const db = IDBRequest.result;
    db.createObjectStore("nombres", {
        autoIncrement: true
        //esto hara que el arreglo incremente su indice automaticamente a medida que se le agregan datos
    })
})

IDBRequest.addEventListener("success", ()=> console.log("todo correcto"))

IDBRequest.addEventListener("error", ()=> console.log("error"))

const addObjetos = obj =>{
    const IDBData = getIDBData("readwrite", "objeto agregado correctamente");
    IDBData.add(obj);
}

const leerObjetos = () =>{
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor();
    cursor.addEventListener("success", () =>{
        if (cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue()
        } else console.log()
    })
}

const modObjetos = (key,obj) =>{
    const IDBData = getIDBData("readwrite", "objeto modificado correctamente");
    IDBData.put(obj,key)
}

const eliminarObjetos = key =>{
    const IDBData = getIDBData("readwrite", "objeto eliminado correctamente");
    IDBData.delete(key)
}
const getIDBData = (mode, msg) =>{
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("nombres", mode);
    const objectStore = IDBTransaction.objectStore("nombres");
    IDBTransaction.addEventListener("complete", ()=> console.log(msg))
    return objectStore
}