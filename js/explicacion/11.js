//Objetos
const producto = {
    nombreProducto: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}
//Forma anterior
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//Destructuring de objetos ( significa sacar de una estructura)
const {precio} = producto;
const {nombreProducto, disponible} = producto;
console.log(precio)
console.log(nombreProducto, disponible)