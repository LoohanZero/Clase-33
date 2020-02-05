// Recomendación de comida

// Crear un programa que pregunte si va el usuario va a almorzar o cenar, y si es vegetariano o no. Dependiendo de las respuestas, debe recomendar un plato (es decir, debe haber cuatro platos posibles).

let preguntaComida = prompt("¿Va a usted a almorzar o a cenar?");
let preguntaVegetariano = confirm("¿Es usted vegetariano?");

let respuestaComida = preguntaComida === "almorzar" && preguntaVegetariano === true && "Le recomiendo comer chaw fan vegetariano" ||
                      preguntaComida === "cenar" && preguntaVegetariano === true && "Le recomiendo comer chaw mien vegetariano" ||
                      preguntaComida === "almorzar" && preguntaVegetariano === false && "Le recomiendo comer fajitas de pollo" ||
                      preguntaComida === "cenar" && preguntaVegetariano === false && "Le recomiendo comer pasta a la bolognesa";

alert(respuestaComida)
