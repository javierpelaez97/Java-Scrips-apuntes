// EJERCICIO B: dado el array ['juan', 'ramón', 'julio', 'ana', 'beatriz'], 
//añadir un nombre nuevo detras de cada uno existente usando bucles.
 let names = ['juan', 'ramón', 'julio', 'ana', 'beatriz'];
let names2 = ['facundo', 'arturo', 'agapito', 'remigio', 'anselmo'];
let newNames = new Array();


for(let i = 0; i < names.length; i++ ){
   newNames.push(names[i]);
   newNames.push(names[i]);
}
console.log('newNames', newNames); 


// EJERCICIO C: averigua si el número 2 existe en la siguiente matriz usando solo bucles:
let matriz = [
    [1,2,4],
    [2,3,4],
    [5,6,7]
]

let numberTwo = false ;
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        if(matriz[i][j] == 2){
            numberTwo = true;
            break;
         }
    }      
}
console.log('is two?', numberTwo);

// EJERCICIO E: crea un bucle que sume los 100 primeros números primos.

let suma = 0;
let index = 1;

while(index > 20){
    let isPrimo = true;
    for(let i = 1; i < index; i++){
        if(i!= index && i !=i){
            if(index % i == 0){
                isPrimo = false;
            }
        }
    }
    suma+= index;
    index++;
}
