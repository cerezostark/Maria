document.getElementById('btn-abrir').addEventListener('click', function() {
    // Reproducir la música
    let audio = document.getElementById('musica-fondo');
    audio.play();

    // Ocultar la pantalla de inicio con un efecto visual
    let inicio = document.getElementById('pantalla-inicio');
    inicio.style.opacity = '0';
    
    setTimeout(() => {
        inicio.classList.add('oculto');
        // Mostrar el contenido de los tulipanes
        document.getElementById('contenido-principal').classList.remove('oculto');
    }, 1000); // Espera 1 segundo a que termine el desvanecimiento
});
