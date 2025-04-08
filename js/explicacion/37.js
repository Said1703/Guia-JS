// Fetch API
// Es el reemplazo a Ajax, te permite ver información al servidor u obtener información de un servidor
//Tambien te va a permitir que podamos actualizar el sitio web la aplicación sin necesidad de recargar
// Puedes obtener un archivo local o una respuesta de un servidor (texto o JSON)

async function obtenerEmpleados() {

    const archivo = 'empleados.json'; //Aqui puede ir un archivo o una url
    //primera forma
    /* fetch(archivo)
        .then(resultado => {
            return resultado.json(); //Si el estado dice 200 quiere decir que se pudo encontrar correctamente
        })
        .then(datos => {
            const { empleados } = datos;
            empleados.forEach(empleado => {
                console.log(empleado);
            });
        }) */
    //segunda forma
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();