//En expresion de la funcion se puede hacer arrow function "=>"
// Su estructura básica es: const nombre = () => {}
//nombre();
/* 
const sumar2 = function(n1, n2){
    console.log(n1 + n2);
}

sumar2(5, 10); 
*/

const sumar2 = (n1, n2) => console.log(n1 + n2); // Con arrow function las llaves son opcionales si solo hay una linea de codigo

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('Javascript');


// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 300 },
    { nombre: 'Tv 50 pulgadas', precio: 1000 },
    { nombre: 'Tablet', precio: 600 },
    { nombre: 'Audifonos', precio: 75 },
    { nombre: 'teclado', precio: 28 },
    { nombre: 'Celular', precio: 800 },
    { nombre: 'Laptop', precio: 1530 }
];
 
//ForEach
meses.forEach(mes => {
    if(mes === 'Marzo') {
        console.log('Marzo si existe');
    }
});

//Includes (buscamos si existe el mes de Marzo) 
let resultado = meses.includes('Marzo'); //funciona mas si tiene arreglos planos

//Some con arrow function
resultado = carrito.some (producto => producto.nombre === 'Celular');

//Reduce va a tomar los valores del carrito y te dará un resultado
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//Filter sirve todos los elementos o menos el que quieras o los que son mayores a 500, etc.
resultado = carrito.filter(producto => producto.precio > 400);

console.log(resultado);