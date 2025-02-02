// Clases en JavaScript
//las clases son una forma de crear objetos de manera más sencilla
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }
}

const producto = new Producto('Monitor Curvo de 49 pulgadas', 800);
const producto2 = new Producto('MacPro', 1800);

console.log(producto);
console.log(producto2);