// Autenticación

// Crear un programa que pida ingresar el usuario y la contraseña y los compare con el usuario y contraseña guardados en variables. Si coinciden debe mostrar un mensaje que diga "Autenticación exitoso" y si no, debe mostrar "Usuario o contraseña equivocados".


const usuario = prompt("Ingrese su nombre de usuario");
const contrasenia = prompt("Ingrese su contraseña");

const autenticacion = usuario === "AdaLovelace" && contrasenia === "12345678" && "Autenticación exitosa" ||
                      "Usuario o contraseña equivocados";

alert(autenticacion);
