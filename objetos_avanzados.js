function crearCoche(marca,modelo,martricula,color){
    return{
        marca: marca,
        modelo : modelo,
        matricula : martricula,
        color: color,
        year: 2022,
    }
}

let coche1 = crearCoche('Mazda', 'Mazda3', '6474LNK', 'Rojo');

console.log(coche1)

if ('year' in coche1){
    console.log('El coche es del año', coche1.year)
}else {
    console.log('El coche no tiene año')
}