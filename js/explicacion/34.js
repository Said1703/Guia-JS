//Notificación API
/* 
En JavaScript, un evento es una acción o suceso que ocurre en el navegador, generalmente como resultado
de la interacción del usuario con la página web. Estos eventos pueden ser cosas como hacer clic en un botón,
mover el mouse, presionar una tecla, cargar una página, entre otros.
Los eventos son fundamentales para crear interactividad en las páginas web, ya que permiten ejecutar código
en respuesta a las acciones del usuario o a cambios en el estado del documento.
 */
const boton =  document.querySelector('#boton');
boton.addEventListener('click', () => { //Es una funcion que nos va a permitir registrar un evento a esta variable
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`))
});

if(Notification.permission == 'granted') {
    new Notification('Esta es una notificación'), {
        icon: 'img/ccj.png',
        body: 'haciendo ejercicios de Javascript'
    }
}