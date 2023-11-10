/* MAPAS */

let seat ={
    modelo:'leon',
    color: 'blanco'
}
let mazda = {
    modelo: 'mazda3',
    color: 'rojo'
}

let cochesMap = new Map();
cochesMap.set(seat, 'No arrancar');
cochesMap.set(mazda,'hinchar las ruedas');

/* FOR OF */

for(let [key,value] of cochesMap){
    console.log('key',key);
    console.log('value', value)
}

/* FOR IN */

let perro= {
    raza: 'Braco',
    nombre : 'Urus',
    edad: 3,
    peso: 35
}

for(let param in perro){
    console.log(param, perro[param]);
}


/* Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:
 */

let popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35} //
]

for(let toy of toys){
    if(toy.sellCount > 15){
        popularToys.push(toy);
    }
}

console.log(popularToys);

let toysMap = new Map();
let newToysArray = new Array();
let toy1 = {id: 23, name: 'Barbie Man'};//15
let toy2 = {id: 40, name: 'El gato con Guantes'};//8
let toy3 = {id: 40, name: 'El gato felix'};//35

toysMap.set(toy1, 15);
toysMap.set(toy2, 8);
toysMap.set(toy3, 35);

for(let [k,v] of toysMap){
    if(v>14){
        newToysArray.push(k);
    }
}

console.log(newToysArray);