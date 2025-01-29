// Arreglos o arrays
const numeros = [10, 20, 30, 40, 50];

//console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

//console.table(meses);

const arreglo = ["hola", 10, true, "si", null, {nombre: "Said", trabajo: "Programador"}, [1, 2, 3]];
//console.log(arreglo)

numeros.push(60); // con .push puedes agregar un valor al final
numeros.unshift(-10,-20,-30); // con .unshift puedes agregar un valor al inicio del arreglo
meses.pop(); // con .pop puedes eliminar el ultimo valor del arreglo
meses.shift(); // con .shift puedes eliminar el primer valor del arreglo
meses.splice(4); // con .splice puedes eliminar un valor en una posicion especifica

console.table(meses);