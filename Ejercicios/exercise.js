/** VARIABLES */

let myFavouriteHero ='Hulk';
let x = 50;

let h = 5;
let y = 10;
let z = h+y;

console.log(z);
/** VARIABLES AVANZADAS */
const character = {
    name: 'Jack Sparrow', 
    age: 10
};
character.age = 25;

console.log(character.age);


let firstName ='Jhon';
let lastName ='Snow';
let age = 24;

console.log('Soy,', firstName, lastName , ', tengo' , age, 'años y me gustan los lobos.');

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price);

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice= car1.finalPrice + globalBasePrice;
car2.finalPrice= car2.finalPrice + globalBasePrice;

console.log(car1.finalPrice, car2.finalPrice); 


/** CONDICIONALES */

const number1 = 10;
const number2 = 20;
const number3 = 2;

if(number2 / number1 == 2 ){
    console.log("number2 dividido entre number1 es igual a 2");
}

if(number1 !== number2){
    console.log("number1 es estrictamente distinto a number2");
}

if(number3 != number1){
    console.log("number3 es distinto number1");  
}

if((number3*5) == number1){
    console.log("number3 por 5 es igual a number1");
}

if(((number3*5)==number1) && ((number1*2)== number2)){
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if(((number2 / 2)== number1) || ((number1/5)== number3)){
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

/** Operadores */

let operador1 = 10 * 5;
let operador2 = 10/2;
let operador3 = 15 % 9;

alert(operador1);
alert(operador2);
alert(operador3);

let operadorX;
let operadorY = 10;
let operadorZ = 5;

operadorX = operadorY + operadorZ;

alert('Operador X =' + operadorX);

let operadorAsigX;
let operadorAsigY = 10;
let operadorAsigZ = 5;

operadorAsigX= operadorAsigY * operadorAsigZ;
alert('Operador de asignación x = '+ operadorAsigX)


