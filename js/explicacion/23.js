//switch

/* switch es una estructura de control que nos permite evaluar una expresión y compararla
con diferentes valores, si la expresión coincide con alguno de los valores, se ejecutará
el bloque de código correspondiente. */

const metodoPago = 'tarjeta';
switch (metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break; //break es necesario para que no se sigan ejecutando los demás casos
    case 'efectivo':
        console.log('EL usuario va a pagar con efectivo');
        break;
    case 'cheque':
        console.log('El usuario va a pagar con cheque');
        break;
    default: //el default se va a ejecutar cuando ninguno de esos case se cumplan su condición
        console.log('Aun no has pagado');
        break;
}
