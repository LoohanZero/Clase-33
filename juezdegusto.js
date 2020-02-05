// Juez de gusto

// Crear un programa que pida al usuario evaluar del 1 al 10 cuánto le gusta X cosa (a elección). Dependiendo de la respuesta, debe mostrar un mensaje en consonancia. Hacer mínimo 4 casos posibles. Si se ingresa algo que no sea un número del 1 al 10, mostrar un mensaje de advertencia.

let cosa = Number(prompt("Evalúe de 1 a 10 El Chavo del 8"));

let mensaje = cosa >= 7 && "Buó, estás grande ya para eso" || cosa < 7 && "Hay cosas mucho mejores en la tele y vos lo sabés" || "Eso no es un número, no te hagas";

alert(mensaje);

cosa = Number(prompt("Evalúe de 1 a 10 el helado"));

mensaje =  cosa >= 7 && "Obvio, a quién no le va a gustar" || cosa < 7 && "¿Cómo no te va a gustar el helado?¿Sos un alien?"  || "Eso no es un número, no te hagas";

alert(mensaje);

cosa = Number(prompt("Evalúe de 1 a 10 el estornudar"));

mensaje =  cosa >= 7 && "Ah, sos re rarito vos" || cosa < 7 && "¿Y cuando estornudan en el auto y queda encerrado? ¡Un espanto!"  || "Eso no es un número, no te hagas";
 
alert(mensaje);

cosa = Number(prompt("Evalúe de 1 a 10 el verano"));

mensaje =  cosa >= 7 && "Uff, team verano tenías que ser. Andá para allá y dejame transpirar tranquila" || cosa < 7 && "Vos sos de los míos, team invierno for the win"  || "Eso no es un número, no te hagas";

alert(mensaje);
