//promises(promesa)
//promises refleja un valor que podrá estar disponible ahora en un futuro o nunca

const usuarioAutenticado = new Promise((resolve, reject) => {

    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado'); //resolve se ejectura cuando el promises se cumple
    } else {
        reject('No se pudo iniciar sesión'); // el promise no se cumple
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado)) //.then significa vamos a usar este promise entonces este punto va a ejecutar una function
    .catch( error => console.log(error))

console.log(usuarioAutenticado)

// En los promises existen 3 valores
// Pending: No se a cumplido pero tampoco se ha rechazado
// Fulfield: Ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir