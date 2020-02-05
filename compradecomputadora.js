// Compra de computadora

// Crear un programa que muestre el mensaje: "Está por comprar la Notebook HP 3000 a $40000". Luego debe preguntar, por separado, si desea agregarle más memoria, más espacio en disco, y una placa de vídeo mejor. Por cada respuesta afirmativa, debe agregarle $10000 al precio base. Mostrar al final un mensaje con un detalle de la compra, las mejoras elegidas y el precio final.



let mejoras = confirm("Está por comprar la Notebook HP 3000 a $40000. ¿Desea agregarle más memoria?");



let precioFinal = mejoras === true && 40000 + 10000 || mejoras === false && 40000;
let insumos = mejoras === true && "más memoria adicional," || mejoras === false && "";

mejoras = confirm(`Su monto por ahora es ${precioFinal}. ¿Desea agregarle más espacio en disco?`);

precioFinal = mejoras === true && precioFinal + 10000 || mejoras === false && precioFinal;
insumos = mejoras === true && insumos + " más espacio en disco" || mejoras === false && "";

mejoras = confirm(`Su monto por ahora es ${precioFinal}. ¿Desea agregarle una mejor placa de video?`);

precioFinal = mejoras === true && precioFinal + 10000 || mejoras === false && precioFinal;
insumos = mejoras === true && insumos + " y una mejor placa de video" || mejoras === false && "";


alert(`Usted está comprando la Notebook HP 3000 a $40000 ${insumos} haciendo del precio un total de ${precioFinal} pesos`);









