/**
 * Desafíos:
Crear una función que muestre "¡Hola, mundo!" en la consola.
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba tres números como parámetros y devuelva su promedio.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

 */
function holaMundo(){
    console.log('¡Hola Mundo!!!')
    return;
}

function obtenerNombre(nombre){
    console.log(`¡Hola, ${nombre}!`);
    return;
}

function obtenerNumero(numero){
    console.log(`El número es, ${numero}!`);
    return;
}

function calcularDoble(numero) {
    return numero * 2;
  }
  

function obtenerPromedio(numero1, numero2, numero3){
    let promedio = ((numero1 + numero2 + numero3) / 3);
    return promedio;
}

function obtenerMayor(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}

function obtenerMultiplicacion(numero){
    return numero * numero;
}
obtenerNombre('Adrian');
obtenerNumero(1);
console.log(`El doble del numero es: ${calcularDoble(5)}`);
console.log(`El promedio es: ${obtenerPromedio(5,6,7)}`);
console.log(`El número mayor es: ${obtenerMayor(8,7)}`);
console.log(`El resultado de la multiplicacion es: ${obtenerMultiplicacion(5)}`);