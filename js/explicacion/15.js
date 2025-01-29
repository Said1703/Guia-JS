const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
// rest operator o spread operator, hoy en dia no se recomienda modificar el arreglo original
const nuevoArreglo = [...meses, 'Agosto']; //aqui estoy haciendo una copia de los meses y agrego agosto
console.log(nuevoArreglo)