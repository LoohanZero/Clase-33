// Quizz

// Crear un programa que sea un cuestionario con 3 preguntas de sí o no. Al finalizar, mostrar un mensaje de felicitaciones si se respondió bien a todas, o uno de que ha perdido el juego si respondió mal al menos una.


const pregunta1 = confirm("¿Es más grande el colon del caballo que su estómago?");
const pregunta2 = confirm("¿Mueren los caballos si vomitan?");
const pregunta3 = confirm("¿Tienen las vacas un estómago?");

const resultado = pregunta1 === true && pregunta2 === true && pregunta3 === false && "¡Felicitaciones! Usted ha respondido bien todas las preguntas" ||
                    "¡Intente nuevamente! Alguna de sus respuestas era incorrecta";

alert(resultado);

