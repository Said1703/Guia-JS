const reproductor = { // Objeto
    reproducir:function(id) { // Método
        console.log(`Reproduciendo canción con el ID: ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    },
    crearPlayslist:function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist:function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`);
    },
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`)
}

reproductor.reproducir(3511);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayslist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');