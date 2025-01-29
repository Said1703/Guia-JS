//"use strict"; // con esto podemos ejecutar el codigo de JS de forma estricta
// Objetos
const producto = {
    nombreProducto: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

Object.freeze(producto); //aqui estamos agregando freeze para no agregar mas propiedades al objeto producto y con "seal" si te permite modificar

producto.imagen = 'imagen.jpg';
//Aqui estamos agregando una nueva propiedad al objeto producto

console.log(Object.isFrozen(producto)); //aqui estamos verificando si el objeto producto esta congelado

console.log(producto);