import { App as CapacitorApp } from '@capacitor/app';

CapacitorApp.addListener('backButton', ({canGoBack}) => {
  if(!canGoBack){
    CapacitorApp.exitApp();
  } else {
    window.history.back();
  }
});

document.addEventListener('deviceready', () => {
  const iframe = document.getElementById('myIframe');
  resizeIframe();
  window.addEventListener('resize', resizeIframe);
});

window.addEventListener('popstate', () => {
const iframe = document.getElementById('myIframe');
if (iframe.contentWindow.history.length > 1) {
  iframe.contentWindow.history.back();
}
});