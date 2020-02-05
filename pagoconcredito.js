// Pago con crédito

// Crear un programa que pida el monto a pagar, y si quiere pagarlo pagarlo con tarjeta o no. Si responde que no, debe mostrar un mensaje que diga "Gracias por su compra". Si responde que sí, debe preguntar en cuántas cuotas desea pagarlo: 3, 6, o 12. Luego, debe mostrar la cantidad de cuotas a pagar elegidas con su valor teniendo en cuenta el interés. El interés debe ser del 5% para 3 cuotas, 10% para 6 y 15% para 12, sobre el total. Guardar los porcentajes de intereses en variables.

const compra = Number(prompt("Ingrese el monto a pagar"));
const tarjeta = confirm("¿Desea pagarlo con tarjeta de crédito?")

const cuotas = tarjeta === true && Number(prompt("¿Desea pagarlo en 3, 6 o 12 cuotas?")) || 
               tarjeta === false && alert("Gracias por su compra");
const interes3 = 0.05;
const interes6 = 0.1;
const interes12 = 0.15;

const intereses = cuotas === 3 && (compra * interes3) + compra || 
                cuotas === 6 && (compra * interes6) + compra || 
                cuotas === 12 && (compra * interes12) + compra;


alert(`Usted está pagando ${compra} pesos en ${cuotas} cuotas lo que da un total de ${intereses} pesos`);