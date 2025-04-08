//Async / await
/* 
En JavaScript, async y await son características introducidas en ES2017 (ES8)
que simplifican el trabajo con código asíncrono, especialmente con promesas (Promises).
Estas palabras clave permiten escribir código asíncrono de una manera más clara y legible,
similar a cómo se escribe código síncrono.
En JavaScript, async y await son características introducidas en ES2017 (ES8) que simplifican
el trabajo con código asíncrono, especialmente con promesas (Promises). Estas palabras clave permiten
escribir código asíncrono de una manera más clara y legible, similar a cómo se escribe código síncrono.
 */

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 4000);

    });
}

async function app() {
    try {
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
app();