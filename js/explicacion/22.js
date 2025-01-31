//Estructuras de control 01

const puntaje = 1000;

if (puntaje === 1000) { //if significa si se cumple la condicion, === significa igual a, !== significa diferente de
    console.log('Si es igual');
} else { //else significa si no se cumple la condicion
    console.log('No es igual');
}

// Estructura de control 02
const efectivo = 1000;
const totalCarrito = 800;

if (efectivo > totalCarrito) {
    console.log('El usuario puede pagar');
} else {
    console.log(`Fondos insuficientes, solo tienes ${efectivo}`);
}

// Estructura de control 03
const rol = 'administrador';

if(rol === 'administrador') {
    console.log('Acceso a todo el sistema');
}else if(rol === 'editor'){ //else if significa si no se cumple la condicion anterior, se cumple esta
    console.log('Eres editor, puedes editar contenido');
}else{
    console.log('No tienes acceso');
}