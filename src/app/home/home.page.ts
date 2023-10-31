import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(100, () => {
      const iframe = document.getElementById('myIframe') as HTMLIFrameElement;
      if (iframe && iframe.contentWindow && iframe.contentWindow.history.length > 1) {
        iframe.contentWindow.history.back();
      } else {
        (navigator as any).app.exitApp();
      }
    });
  }

}