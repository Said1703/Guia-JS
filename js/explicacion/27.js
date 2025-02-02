//This
//this es una palabra reservada que hace referencia al objeto global en el navegador o al objeto global en node js

const reservacion = {
    nombre: 'Said',
    apellido: 'Ja',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad es de ${this.total}`);
    }
}

reservacion.informacion();