/* 

Suponiendo que nuestros soldados son:

a infanteria (potencia 1)
b caballería (potencia 5)
c catapultas (potencia 20)

y que el enemigo tiene un numero indeterminado de orcos:

x orcos (potencia 1)
y trolls (potencia 10)
z nazguls (potencia 50)

1. define un bloque if - elseif para cumplir estas condiciones:

- si mi potencia es mayor, atacar.
- si hay empate, defender
- si es menor, pedir refuerzos
- cualquier otra situación, huir

2. cada ejercito vendrá representado mediante un objeto:

let gondor = {
    infanteria : 1000,
    caballería : 200,
    catapultas : 5
}

3. haz un test del código con los siguentes datos:
    - gondor: infanteria = 1000, caballería = 200, catapultas = 5; - saruman: orcos = 1500, trolls = 20, nazguls = 5;
*/

let gondor = {
    infanteria : 1000,
    caballeria : 200,
    catapultas : 5
}
let saruman = {
    orcos : 1500,
    trolls : 20,
    nazguls : 5
}
gondor = (gondor.infanteria*1) + (gondor.caballeria*5) + (gondor.catapultas*20);
saruman = (saruman.orcos *1)+(saruman.trolls*10)+(saruman.nazguls*50);

console.log(gondor)
if (gondor > saruman) {
    console.log('atacar');
} else if (gondor == saruman) {
    console.log('Defender');
} else if ( gondor < saruman) {
    console.log('Defender');
} else {
    console.log('Pedir refuerzos');
}
