//For each y map
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 300 },
    { nombre: 'Tv 50 pulgadas', precio: 1000 },
    { nombre: 'Tablet', precio: 600 },
    { nombre: 'Audifonos', precio: 75 },
    { nombre: 'teclado', precio: 28 },
    { nombre: 'Celular', precio: 800 },
    { nombre: 'Laptop', precio: 1530 }
];

//For each
/* For each es un metodo que nos permite iterar sobre un arreglo y mostrar los elementos en pantalla
a consola o imprimir el html solo foreach */

carrito.forEach(producto => console.log(producto.precio)
);

//map
/* map es un metodo que nos permite crear un nuevo arreglo con los resultados de
la llamada a la funcion indicada aplicados a cada uno de sus elementos
 */

carrito.map(producto => console.log(producto.nombre));
const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);