var player;

// Carga el video de YouTube en la div y muestra la capa de superposición
function loadYouTubeVideo(videoId) {
  if (player) {
    player.destroy(); // Destruye el reproductor anterior si existe
  }

  player = new YT.Player('video-container', {
    height: '100%',
    width: '100%',
    videoId: videoId,
    events: {
      'onReady': onPlayerReady
    }
  });

  document.getElementById('video-container').style.display = 'block'; // Muestra la div
  document.getElementById('overlay').style.display = 'block'; // Muestra la capa de superposición
}

// Reproduce el video cuando el reproductor esté listo
function onPlayerReady(event) {
  event.target.playVideo();
}

// Cierra la div y la capa de superposición al hacer clic fuera de la div
window.onclick = function(event) {
  if (event.target == document.getElementById('overlay')) {
    document.getElementById('video-container').style.display = 'none'; // Oculta la div
    document.getElementById('overlay').style.display = 'none'; // Oculta la capa de superposición
    player.stopVideo(); // Detiene la reproducción del video
  }
}