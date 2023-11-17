import { App as CapacitorApp } from '@capacitor/core';

CapacitorApp.addListener('backButton', ({ canGoBack }) => {
    if (!canGoBack) {
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
  });

console.log('Hello world');