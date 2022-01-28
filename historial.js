"use strict";

console.log(history);
history.pushState({pepe : "22"}, "", "?jaja");
//history.length muestra la dimension del historial de la pestaña

addEventListener("popstate", e=> console.log(e.state));