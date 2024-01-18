/**
 * Desafíos
Crea una lista vacía llamada "listaGenerica".
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
Crea una función que calcule el promedio de los elementos en una lista de números.
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
 */
let listaNumeros =[1,5,6,9,8];
let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
let listaNumerosASumar =[1,5,6,9,8];
let listaNumerosASumar2 =[5,5,6,9,8];
lenguajesDeProgramacion.push('Java', 'Ruby' , 'GoLang');

function mostrarLenguajesSeparados() {
    for(let i = 0; i< lenguajesDeProgramacion.length; i++){
    console.log(lenguajesDeProgramacion[i]);
    }
}

function mostrarLenguajesInvertidos() {
    for(let i = lenguajesDeProgramacion.length -1; i >=0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
}

function mostrarPromedio(lista) {
    let suma =0;
    for (let i = 0; i < lista.length; i++) {
       suma += lista[i];
    }
    return suma / lista.length;
}

function mostrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
    for (let i = 0; i < lista.length; i++) {
       if(mayor <= lista[i]){
        mayor = lista[i];
       }
       if (menor >= lista[i]) {
        menor = lista[i];
       }
    }
    return console.log(`El número mayor es: ${mayor}, el número menor es: ${menor}`);
}

function mostrarSuma(Lista) {
    let suma =0;
    for (let i = 0; i < Lista.length; i++) {
       suma += Lista[i];
    }
    return suma;
}
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i; // Retorna el índice del elemento encontrado
        }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

function mostrarSumaListas(Lista1, Lista2) {
    let suma = [];
    for (let i = 0; i < Lista1.length; i++) {
       suma[i] = Lista1[i] + Lista2[i];
    }
    return console.log(`La suma entre la lista: ${Lista1} y la lista ${Lista2} es igual a: ${suma}`);
}

function mostrarCuadrados(Lista1) {
    let cuadrado = [];
    for (let i = 0; i < Lista1.length; i++) {
        cuadrado[i] = Lista1[i] * Lista1[i];
    }
    return console.log(`El cuadrado de cada item de la lista: ${Lista1} es igual a: ${cuadrado}`);
}
mostrarLenguajesSeparados();
mostrarLenguajesInvertidos();
console.log("Promedio: ", mostrarPromedio(listaNumeros));
mostrarMayorMenor(listaNumeros);
console.log(`El resultad de la suma de la lista ${listaNumeros} es: ${mostrarSuma(listaNumeros)}`)
mostrarSumaListas(listaNumerosASumar, listaNumerosASumar2)
mostrarCuadrados(listaNumerosASumar);
