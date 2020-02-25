// Adivinar cumpleaños

// Crear un programa que pida adivinar tu cumpleaños ingresando por separado ingresar día, mes y año, en números, y mostrar luego si un mensaje si ha adivinado o no.

const dia = Number(prompt("Ingresa el día de mi cumpleaños"));
const mes = Number(prompt("Ingresa el mes de mi cumpleaños en números"));
const anio = Number(prompt("Ingresa mi año de nacimiento"));


const mensaje = dia === 14 && mes === 4 && anio === 1987 && "¡Felicidades!¡Usted ha adivinado, mi cumpleaños es el 14/04/1987!" ||
                "¡Siga intentando, todavía no ha adivinado mi cumpleaños!";

alert(mensaje);