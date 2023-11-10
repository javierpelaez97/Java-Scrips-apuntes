// HACER LOS EJERCIOS PROPUESTOS

/* 
1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

*/
/* 1.1 */
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log('Primer elemento del array',avengers[0]);
/* 1.2 */ 
/*avengers[0] = 'IRONMAN';*/
console.log ('cambia primer elemeto del Array', avengers)
/* 1.3 */
console.log('longitud del array',avengers.length);
/*1.4*/
/*const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('morty','Summer');
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length -1])*/
/* 1.5 */
let rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.pop();
console.log('Primer elemento:', rickAndMortyCharacters[0], 'Ultimo elemento:',rickAndMortyCharacters[rickAndMortyCharacters.length-1]);

rickAndMortyCharacters.splice(1,1);

console.log(rickAndMortyCharacters);


