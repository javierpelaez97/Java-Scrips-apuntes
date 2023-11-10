/* FUNCIONES */

/* 1. DEFINICION */

function myFuncion(param1, param2) {
    return something;
}

const myFunc = (params) => {
    return something;
};

// EJERCICIOS

function sumar(num1, num2){             //primero creamos la función de lo que queremos hacer con un nombre 
    let suma = num1+num2;               //aqui creamos la operacion que queremos hacer en esa funcion
    return suma;                        //carga en la variable el resultado
}                                       ///es como si fuese un indice de lo que queremos añadir 

let x = 5;
let y = 4;

let suma = sumar(x, y);
console.log(`El valor de la suma ${suma}`)

function multiplicar(num1, num2){
    let multiplica = num1 * num2;
    return multiplica
}

let multiplica = multiplicar(x, y);
console.log(`El valor de la multiplica ${multiplica}`);

function restas (num1, num2){
    let resta = num1 - num2 ;
    return resta;
}
let resta = restas(x, y);
console.log(`El valor de la resta ${resta}`);

/* PARÁMETRROS OPCIONALES */

function sumarOPC (num1 = 5, num2 = 5){     //Es cuando no nos mandan uno de los parámetros  marcamos uno por defecto 
    return num1 + num2;
}
/* APRAMETROS ILIMITADOS " arguments "*/ // Hace referencia a todo lo que hay dentro de los paraentesis.
function sumarTodos(){
    arguments.forEach(numero=>{
        suma += numero
    })
    return suma;
}
console.log(sumarTodos(1,5,5,5,4,6,8,5,6,3,525,6,))
/* FUNCIONES ANONIMAS */

const sumaAnonima = (num1, num2)=>{
    return num1 + num2;
}

// GENERALIZAR LOS EJERCICIOS DEL APARTADO BUCLES EN FUNCIONES.


// VER FUNCIONES LAMBDA


//Una funcion que me debuelva si es necesario ir a comprar un producto
//Hay que comprarlo si quedan menos de 3 o esta caducado

const compra = [
    {name:'leche', cantidad: 6, caducado: false},
    {name:'huevos', cantidad: 2, caducacdo:false},
    {name:'pollo', cantidad: 4, caducado: true},
    {name: 'mayonesa', cantidad:1, caducado: true},
];

function irAcomprar(compra){
    let hacerCompra = newArray();

    compra.forEach(comida=>{
        if (comida.cantidad < 3 || comida.caducado == true){
            hacerCompra.push(comida.name);
        }
    });
    return hacerCompra
}
console.log(hacerCompra)


