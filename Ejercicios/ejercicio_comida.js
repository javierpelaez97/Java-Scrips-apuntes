//Una funcion que me debuelva si es necesario ir a comprar un producto
//Hay que comprarlo si quedan menos de 3 o esta caducado

const compra = [
    {name:'leche', cantidad: 6, caducado: false},
    {name:'huevos', cantidad: 2, caducacdo:false},
    {name:'pollo', cantidad: 4, caducado: true},
    {name: 'mayonesa', cantidad: 1, caducado: true},
];

function irAcomprar(compra){
    let hacerCompra = new Array();

    compra.forEach(comida=>{
        if (comida.cantidad < 3 || comida.caducado === true){
            hacerCompra.push(comida);
        }
    });
    return hacerCompra;
}
console.log(hacerCompra);
