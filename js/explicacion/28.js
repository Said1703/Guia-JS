// Objeto constructor y objeto literal POO

//Forma de objetos literales
const producto = {
    nombre: 'tablet',
    precio: 500
}

// Object constructor

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}
const producto2 = new Producto("Monitor curvo de 49 pulgadas", 800);
const producto3 = new Producto("Laptop", 1200);
const producto4 = new Producto("disponible", true);

console.log(producto2);
console.log(producto3);
console.log(producto4);