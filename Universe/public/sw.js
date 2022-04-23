import { version } from "react";

const VERSION = 1;
self.addEventListener('install' ,function(event){

    console.log("[SW] installing service worker version" + VERSION);
});