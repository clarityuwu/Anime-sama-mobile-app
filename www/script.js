import { App as CapacitorApp, Plugins } from '@capacitor/core';

const { StatusBar } = Plugins; // Import the StatusBar plugin

CapacitorApp.addListener('backButton', ({ canGoBack }) => {
  if (!canGoBack) {
    CapacitorApp.exitApp();
  } else {
    window.history.back();
  }
});

document.addEventListener('deviceready', async () => {
  // Set the status bar to overlay the web view content and use light content style
  await StatusBar.setBackgroundColor({ color: '#33000000' });
  await StatusBar.setOverlaysWebView({ overlay: true });
  await StatusBar.setStyle({ style: StatusBarStyle.Dark }); // Adjust as needed

  // Resize the iframe after the status bar overlay is applied
  resizeIframe();
  window.addEventListener('resize', resizeIframe);
});

window.addEventListener('popstate', () => {
  const iframe = document.getElementById('myIframe');
  if (iframe.contentWindow.history.length > 1) {
    iframe.contentWindow.history.back();
  }
});

function resizeIframe() {
  const iframe = document.getElementById('myIframe');
  if (iframe) {
    iframe.style.height = window.innerHeight + 'px';
  }
}
