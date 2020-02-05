// Términos y condiciones de uso

// Crear un programa que pregunte si acepta los términos y condiciones de uso. Si el usuario responde que sí, debe mostrar un mensaje que diga "Continuando con el proceso...". Si responde que no, debe mostrar un mensaje que diga "No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso".

let termsConditions = confirm("¿Acepta usted los términos y condiciones?");

let resultado = termsConditions === true && "Continuando con el proceso..." ||
                "No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso";


alert(resultado);