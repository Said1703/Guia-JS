/* Prototypes son una forma de compartir propiedades y métodos entre objetos en JavaScript.
Todos los objetos en JavaScript tienen un prototipo. Algunos objetos tienen un prototipo
que es otro objeto. */

// Object constructor
/* 
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}
const producto2 = new Producto("Monitor curvo de 49 pulgadas", 800);
const producto3 = new Producto("Laptop", 1200);
const producto4 = new Producto("disponible", true);
 */
/* 
function formatearProducto(producto){
    retun `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
}

console.log(producto2);
console.log(producto3);
console.log(producto4);

console.log(formatearProducto(producto2));
 */

//Prototype nos va a permitir crear funciones que solo se utilizan en un objeto en específico

function Cliente(nombre, apellido) { //Clase del cliente
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(){ //Función del cliente
    return `El cliente ${this.nombre} ${this.apellido}`;
}


function Producto(nombre, precio, disponible) { //Clase del producto
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

Producto.prototype.formatearProducto = function(){ //Función del producto
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

const producto2 = new Producto("Monitor curvo de 49 pulgadas", 800);
const producto3 = new Producto("Laptop", 1200);
const producto4 = new Producto("disponible", true);
const cliente = new Cliente("Said", "Jauregui");

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

