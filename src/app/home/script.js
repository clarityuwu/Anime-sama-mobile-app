import { App as CapacitorApp } from '@capacitor/core';
  document.addEventListener('deviceready', async () => {
    const iframe = document.getElementById('myIframe');
    iframe.addEventListener('load', () => {
      const videoPlayer = iframe.contentDocument.getElementById('playerDF');

      if (videoPlayer) {
        videoPlayer.addEventListener('click', () => {
          if (iframe.contentDocument.fullscreenElement || iframe.contentDocument.mozFullScreenElement || iframe.contentDocument.webkitFullscreenElement) {
            exitFullscreen(iframe.contentDocument);
          } else {
            enterFullscreen(videoPlayer);
          }
        });
      }
    });
  });

// Function to enter fullscreen for the video player
function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }

  // **Set the fullscreen flag in the Capacitor app**
  CapacitorApp.setFullscreen(true);
}

// Function to exit fullscreen
function exitFullscreen(doc) {
  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen();
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen();
  }

  // **Unset the fullscreen flag in the Capacitor app**
  CapacitorApp.setFullscreen(false);
}
