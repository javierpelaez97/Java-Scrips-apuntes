'use strict';

const request = fetch(`https://restcountries.com/v3.1/region/europe`)  //  Creamos una variable y la llamamos con fetch a la API
.then(response => response.json())          // le indicamos la promesa de que va a pasar los archivos JSOn
.then(data => console.log(data))            // Le indicamos la promesa de que va a hacer algo cuando acabe
.catch(error => console.error(error));      // Si no funciona nuestra promesa que lance un mensaje de error.
