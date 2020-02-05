// Termostato

// Crear un programa que muestre la temperatura actual de la habitación y pregunte si tiene desea subir la temperatura. Si responde que sí, que pregunte en cuánto desea subirla, y mostrar luego la temperatura actualizada. Si responde que no, que pregunte si desea bajar la temperatura. Si responde que sí desea hacerlo, que pregunte en cuánto desea bajarla, y mostrar luego la temperatura actualizada.
let temperatura = 18;

const  pregunta = confirm(`La temperatura actual de la habitación es de ${temperatura}°C, ¿desea usted subir la temperatura?`);


const suma = pregunta === true && Number(prompt("¿Cuántos grados desea subirla"));
const diferencia = pregunta === false && Number(prompt("¿Cuántos grados desea bajarla"));

pregunta === true && (temperatura += suma);
pregunta === false && (temperatura -= diferencia);


alert(`La temperatura actual es de ${temperatura}°C.`)

