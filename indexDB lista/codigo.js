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

IDBRequest.addEventListener("success", ()=> leerObjetos())

IDBRequest.addEventListener("error", ()=> console.log("Ocurrio un error"));

document.getElementById("add").addEventListener("click", ()=>{
    let nombre = document.getElementById("name").value;
    if (nombre.length > 0){
        if (document.querySelector(".posible") != undefined){
            if (confirm("Hay elementos sin guardar, desea continuar?")){
                addObjetos({nombre});
                leerObjetos()
            }
        }else{
            addObjetos({nombre});
            leerObjetos()
        }
    }
})

const addObjetos = obj =>{
    const IDBData = getIDBData("readwrite", "objeto agregado correctamente");
    IDBData.add(obj);
}

const leerObjetos = () =>{
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor();
    let fragmento = document.createDocumentFragment();
    document.querySelector(".name-container").innerHTML = "";
    cursor.addEventListener("success", () =>{
        if (cursor.result){
            let elemento = nombresHTML(cursor.result.key, cursor.result.value);
            fragmento.appendChild(elemento)
            cursor.result.continue()
        } else document.querySelector(".name-container").appendChild(fragmento)
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

const nombresHTML = (id, nombre)=>{
    const container = document.createElement("DIV");
    const h2 = document.createElement("H2");
    const options = document.createElement("DIV");
    const saveBtn = document.createElement("BUTTON");
    const deleteBtn = document.createElement("BUTTON");
    container.classList.add("name");
    options.classList.add("options");
    saveBtn.classList.add("imposible");
    deleteBtn.classList.add("delete");

    saveBtn.textContent = "Guardar";
    deleteBtn.textContent = "Eliminar";
    h2.textContent = nombre.nombre
    h2.setAttribute("contenteditable", "true");
    

    options.appendChild(saveBtn);
    options.appendChild(deleteBtn);
    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup", ()=> saveBtn.classList.replace("imposible", "posible"));

    saveBtn.addEventListener("click", ()=>{
        if (saveBtn.classList.contains("posible")){
            modObjetos(id, {nombre: h2.textContent});
            saveBtn.classList.replace("posible", "imposible")
        }
    })
    
    deleteBtn.addEventListener("click", ()=>{
        eliminarObjetos(id);
        document.querySelector(".name-container").removeChild(container)
    })

    return container
}