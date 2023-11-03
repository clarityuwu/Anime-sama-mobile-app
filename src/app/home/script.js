import { App as CapacitorApp } from '@capacitor/core';

CapacitorApp.addListener('backButton', ({ canGoBack }) => {
    if (!canGoBack) {
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
  });

window.addEventListener('popstate', () => {
const iframe = document.getElementById('myIframe');
if (iframe.contentWindow.history.length > 1) {
    iframe.contentWindow.history.back();
}
});