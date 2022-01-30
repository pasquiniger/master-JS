"use strict";
if (!('Notification' in window)){
    console.log("Las notificaciones no estan disponibles en tu navegador")
    //hay algunos navegadores como internet explorer que no disponen de notificaciones
}

Notification.requestPermission(()=>{
    if (Notification.permission == "granted") new Notification("Primera notificación")
})