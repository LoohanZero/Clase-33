// Login

// Crear un programa que pida ingresar la edad y muestre un mensaje de bienvenida al sitio si la edad es mayor o igual a 18, o de que no puede ingresar si es menor.

const edad = Number(prompt("Ingrese su edad"));

const mensaje = edad >= 18 && "¡Bienvenido a nuestro sitio!" ||
                "Usted no puede ingresar ya que es menor de 18 años.";

alert(mensaje);
