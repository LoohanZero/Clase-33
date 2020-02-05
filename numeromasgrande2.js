// Número más grande (3 números)

// Hacer un programa que pida ingresar 3 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.

let numero1 = Number(prompt("Ingrese un número"));
let numero2 = Number(prompt("Ingrese otro número"));
let numero3 = Number(prompt("Ingrese un tercer número"));

let resultado = numero1 > numero2 && numero1 > numero3 && `El número ${numero1} es el más grande.` ||
                numero1 === numero2 && "Hay al menos dos números iguales" ||
                numero2 > numero1 && numero2 > numero3 && `El número ${numero2} es el más grande.` ||
                numero2 === numero3 && "Hay al menos dos números iguales" ||
                numero3 > numero1 && numero3 > numero1 && `El número ${numero3} es el más grande.` ||
                numero1 === numero3 && "Hay al menos dos números iguales";

alert(resultado);