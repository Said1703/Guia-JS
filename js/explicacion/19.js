// funciones que retornan valores

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(500);
total = agregarCarrito(60);

console.log(total);

const totalPagar = calcularImpuesto(total);

console.log(`Èl total a pagar con impuestos es de: ${totalPagar}`);