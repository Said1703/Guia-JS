//For Loop
//for loop sirve para repetir un bloque de codigo un numero determinado de veces
//for (inicio; condicion; incremento) 

for (let i = 0; i <= 10; i++) { //primera parte inicia el indice, segundo mientras sea menor a 10, tercera incrementa el indice
    console.log(i);
}

//Ejercicio de for loop: identifica del 1 al 100 si el numero actual es par o impar

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`El numero ${i} es par`)
    } else {
        console.log(`El numero ${i} es impar`)
    }
}

//Ejercicio 2 cuantos elementos hay en el carrito

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 300 },
    { nombre: 'Tv 50 pulgadas', precio: 1000 },
    { nombre: 'Tablet', precio: 600 },
    { nombre: 'Audifonos', precio: 75 },
    { nombre: 'teclado', precio: 28 },
    { nombre: 'Celular', precio: 800 },
    { nombre: 'Laptop', precio: 1530 }
];

for (let i = 0; i < carrito.lenght; i++) { //si quieres iterar x2 seria i+2
    console.log(carrito[i].nombre);
}
