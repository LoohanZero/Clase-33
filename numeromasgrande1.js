// Número más grande (2 números)

// Hacer un programa que pida ingresar 2 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.

let numero1 = Number(prompt("Ingrese un número"));
let numero2 = Number(prompt("Ingrese otro número"));


let resultado = numero1 > numero2 && `El número ${numero1} es más grande.` || numero2 > numero1 && `El número ${numero2} es más grande` || numero1 === numero2 &&  `Los números son iguales`;

alert(resultado)