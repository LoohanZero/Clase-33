// Cátedra promocionada

// Hacer un programa que pida ingresar los valores de los tres parciales de la cátedra mostrar un mensaje indicando si promociona o no la cátedra. La misma se promociona si al menos dos de ellos fueron aprobados con una nota de 8 o más.

let nota1 = Number(prompt("Ingrese la nota del primer parcial"));
let nota2 = Number(prompt("Ingrese la nota del segundo parcial"));
let nota3 = Number(prompt("Ingrese la nota del tercer parcial"));

let promocion = nota1 >= 8 && nota2 >= 8 && "Usted ha promocionado la materia" || 
                nota1 < 8 && nota2 >= 8 && nota3 >= 8 && "Usted ha promocionado la materia" ||
                nota1 >= 8 && nota2 < 8 && nota3 >= 8 && "Usted ha promocionado la materia" ||
                "Usted no ha promocionado la materia";
                



alert(promocion);
