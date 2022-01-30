"use strict";

 // Propiedades objeto navigator
//Puedo profundizar más en la documentacion oficial DeveloperMozilla

/*
 console.log("Navegador: ", navigator.appCodeName);
 console.log("Navegador: ", navigator.appName);
 console.log("Navegador: ", navigator.appVersion);
*/
 // Esas 3 pueden devolver valores erroneos, no son confiables

 console.log("Connection: ", navigator.connection);
 console.log("Geolocation: ", navigator.geolocation);
 console.log("HardwareConcurrency: ", navigator.hardwareConcurrency);
 //Hardwareconcurrncy devuelve la cantidad de nucleos (lógicos?) del procesador
 console.log("Language: ", navigator.language);
 console.log("Languages: ", navigator.languages); //?
 console.log("MimeTypes: ", navigator.mimeTypes) //Tipos de objeto / archivo (mas en profundidad cuando aprenda nodeJS)
 console.log("OnLine: ", navigator.onLine);
 console.log("UserAgent: ", navigator.userAgent); //Tampoco es correcto siempre
 console.log("CookieEnabled: ", navigator.cookieEnabled);
 console.log("Permissions: ", navigator.permissions);
 console.log("Plataform: ", navigator.platform) //tampoco correcta
 console.log("Plugins: ", navigator.plugins);
 console.log("Product: ", navigator.product);
 console.log("ServiceWorker: ", navigator.serviceWorker);


 //Métodos estándar (Ver mas en DeveloperMozilla)
// navigator.getUserMedia();
// navigator.registerContentHandler();
// navigator.registerProtocolHandler();
// navigator.requestMediaKeySystemAccess();
// navigator.sendBeacon();
// navigator.javaEnabled();
// navigator.vibrate();