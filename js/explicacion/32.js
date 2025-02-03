//Try catch
//sirve para capturar errores en el código y manejarlos de una forma más amigable para el usuario
//Ejemplo

const numero1 = 20;
const numero2 = 30;

try { //intenta hacer lo siguiente (es la parte que va a intentar hacer algo y si no puede, va a caer en el catch)
    console.log(numero2);
} catch (error) { //En caso que haya un error, se ejecuta este bloque
    console.log(error);
}

console.log(numero1);

console.log(numero2);