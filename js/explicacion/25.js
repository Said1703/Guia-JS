const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 300 },
    { nombre: 'Tv 50 pulgadas', precio: 1000 },
    { nombre: 'Tablet', precio: 600 },
    { nombre: 'Audifonos', precio: 75 },
    { nombre: 'teclado', precio: 28 },
    { nombre: 'Celular', precio: 800 },
    { nombre: 'Laptop', precio: 1530 }
];

//While Loop
//El while loop se ejecuta mientras una condicion sea verdadera

let i = 0; //inicializar el while loop
while (i < carrito.length) { //condicion del while loop 
    console.log(carrito[i].nombre); //bloque de codigo
    i++; //incremento del while loop
}

//Do While Loop
//El do while loop es similar al while loop, la diferencia es que el do while loop se ejecuta al menos una vez

let n = 0; //inicializar el do while loop

do {
    console.log(n); //bloque
    i++; //incremento del do while loop
} while (n < 10)