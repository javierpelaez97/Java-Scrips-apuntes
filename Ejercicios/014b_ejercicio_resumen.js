/* 
Las notas de María, Juan y Luis en los exámenes de evaluación son respectivamente:

María: 10, 3, 6, 7
Juan: 5, 6, 1, 4
Luís: 9, 1, 1, 8

- define un objeto para cada estudiante donde se vean reflejadas las notas
- crea un bloque if - else if en el que se devuelva si el estudante suspende (<5) aprueba (5 - 7) o tiene un notable (>= 8), tendras que hacer la media.
- testea el bloque con cada alumno

*/
let maria = {
    nota1 : 10,
    nota2 : 3,
    nota3 : 6,
    nota4 : 7
};
let juan = {
    nota1 : 5,
    nota2 : 6,
    nota3 : 1,
    nota4 : 4
};
let luis = {
    nota1 : 9,
    nota2 : 1,
    nota3 : 1,
    nota4 : 8
};

maria = ((maria.nota1 + maria.nota2 + maria.nota3 + maria.nota4) / 4);

juan = ((juan.nota1 + juan.nota2 + juan.nota3 + juan.nota4) / 4);

luis = ((luis.nota1 + luis.nota2 + luis.nota3 + luis.nota4) / 4);

if(maria < 5){
    console.log('SUSPENDE');
}else if (maria >= 5, 6, 7 ){
    console.log ('APRUEBA');
}else if (maria >= 8){
    console.log('Notable');
}


