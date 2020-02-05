// Indicador de tiempo

// Crear un programa que pida ingresar la temperatura del día e indique qué tiempo hace dependiendo de la misma (p. ej.: "Hace frío", "Está templado", etc.). Hacerlo para 3 posibles casos mínimo.

const temperatura = Number(prompt("Ingrese la temperatura actual en grados centígrados"));

const mensaje = temperatura >= 30 && "Hace demasiado calor, mangueale la pileta a tu amigo" ||
                temperatura >= 20 && "Está templado, con un ventilador zafás" ||
                temperatura >= 10 && "Está fresco, ponete sweater y campera" ||
                temperatura < 10 && "Está helado, pegá mínimo el culo a la estufa";

alert(mensaje);