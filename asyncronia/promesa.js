'use strict';

const request = fetch(`https://restcountries.com/v3.1/region/europe`)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
