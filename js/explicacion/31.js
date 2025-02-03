//POO Herencia

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    obtenerPrecio() {
        console.log(this.precio);
    }
}

const producto = new Producto('Monitor Curvo de 49 pulgadas', 800);
const producto2 = new Producto('MacPro', 1800);

// la Herencia pasa valores o atributos de un lado a otro
class Libro extends Producto { // con extends estamos aplicando herencia
    constructor(nombre, precio, isbn) {
        super(nombre, precio, isbn); // super es para llamar al constructor de la clase padre y va a buscar los valores que pases a esta funcion
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`; // super es para llamar a la funcion del padre
    }

    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Y si hay en existencia')
    }
}

const libro = new Libro('JavaScript la Revolución', 120, '123456');
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto2.formatearProducto());