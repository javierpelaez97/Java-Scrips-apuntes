// FUNCION PARA TESTS
const test = (resultado, functTested) =>
  Array.isArray(resultado)
    ? JSON.stringify(resultado) === JSON.stringify(functTested)
      ? "test OK"
      : "test KO"
    : resultado === functTested
    ? "test OK"
    : "test KO";

///////////////////////////////////////////////////////////////////////////

/* 
1. Crea una función que devuelva el numero de vocales que hay en un string.
*/

const contarVocales = (str) =>
  Array.from(str).filter(
    (vocal) =>
      vocal.includes("a") ||
      vocal.includes("e") ||
      vocal.includes("i") ||
      vocal.includes("o") ||
      vocal.includes("u")
  ).length;

/* const contarVocales = (str => {
    
    const vocales = Array.from(str).filter (vocal => (vocal.includes('a')||vocal.includes('e')|| vocal.includes('i')|| vocal.includes('o')|| vocal.includes('u')));
    return vocales.length
}); */

// test ejercicio 1.
console.log("1A. contarVocales", test(4, contarVocales("upgrade hub")));
console.log("1B. contarVocales", test(5, contarVocales("abracadabra")));

/* 
2. Crea una función que devuelva la suma de los dos numeros positivos más pequeños de un array de numeros.

La función tiene que descartar aquellos que sean negativos o decimales
*/

const dosNumerosMenores = (numbers) => {
  
  let enteros = numbers.filter(
    (numero) => Number.isInteger(numero) && numero > 0
  );
  enteros.sort((a , b) => a - b);
  return enteros[0] + enteros[1];
  console.log(enteros)
 
};

/* for(positivos of enteros){   // esto sería lo mismo que la linea 46
        if(positivos > 0){
            console.log(positivos)
        } */

// test ejercicio 2
console.log(
  "2A. dosNumerosMenores",
  test(6, dosNumerosMenores([1.5, 28, 4, 2, -43]))
);
console.log(
  "2B. dosNumerosMenores",
  test(16, dosNumerosMenores([52, 7.6, 14, 12, 4, -1]))
);

/* 
3. Crea dos funciones para encriptar y desencriptar un mensaje.
la función 1 convertirá los caracteres en su número ascii equivalente y los guardará en un array
usa el método "Character".charCodeAt(0);
la funciín 2 convertirá un array de números ascii en letras y devolverá un string.
usa el método String.fromCharCode(numero);
*/

const encriptar = (str) => {
    const encriptados = new Array();
    for (letra of str){
        //console.log(letra)
        let encriptado = letra.charCodeAt(0);
        encriptados.push(encriptado)
    }
    //console.log(encriptados)
    return encriptados;
};

const desencriptar = (array) => {
    const frase = array.map(palabra =>String.fromCharCode(palabra))
    //console.log(frase.join(""))
    return frase.join("");
}

console.log(encriptar("Agarra la gata de la azotea"));

console.log(
  "3A. encriptar",
  test(
    [
      65, 103, 97, 114, 114, 97, 32, 108, 97, 32, 103, 97, 116, 97, 32, 100,
      101, 32, 108, 97, 32, 97, 122, 111, 116, 101, 97,
    ],
    encriptar("Agarra la gata de la azotea")
  )
);

console.log(
  "3B. desencriptar",
  test(
    "Agarra la gata de la azotea",
    desencriptar([
      65, 103, 97, 114, 114, 97, 32, 108, 97, 32, 103, 97, 116, 97, 32, 100,
      101, 32, 108, 97, 32, 97, 122, 111, 116, 101, 97,
    ])
  )
);

/* 
4. Crea una funcion que, dados 3 numeros, la funcion debe decir si es posible 
construir un triangulo cuyos lados sea la longitud dada por los números.

PISTA: en todo triangulo la suma de los dos lados más cortos tiene que ser mayor
al lado mas largo. a + b > c;
*/

const esTriangulo = (a, b, c) => {
    if(a + b > c){
        return true;
    } else{
      return false
    }
};

console.log("4A. esTriangulo", test(false, esTriangulo(1.5, 4, 6)));
console.log("4B. esTriangulo", test(true, esTriangulo(3, 7, 8)));

/* 
5. Calendario Marciano.

Un día en Marte tiene una duración de 24,6 horas terrestres.
Un año en Marte tiene una duración de 864 días marcianos.

Si consideramos que los calendarios Occidental Terrestre y Marciano tienen el punto de origen
en el 1 de enero del año 1... 


-> Crea una función que convierta una fecha terrestre a fecha marciana.

El parametro fecha debe expresarse con el siguiente formato: 'DD-MM-AAAA', tanto 
en el input como en el return.

Para simplificar, asumiremos que:
- Todos los eventos tienen lugar a las 0:00 AM 
- Todos los meses tienen 30 días en la tierra y 72 en marte. 
- No hay años bisiestos
-Los años en martee tienen 865 dias marcianos
-Las horas son constantes en ambos planetas


*/

const calendarioMarciano = (fecha) => {
  const horasM = 24.6;
  const añoM = 864;
  const mesesM = 72;

  if()
};

console.log(
  "5A. calendarioMarciano",
  test("57-05-194", calendarioMarciano("4-10-476"))
);
console.log(
  "5c. calendarioMarciano",
  test("20-07-801", calendarioMarciano("20-07-1969"))
);
console.log(
  "5B. calendarioMarciano",
  test("53-04-823", calendarioMarciano("18-11-2023"))
);

