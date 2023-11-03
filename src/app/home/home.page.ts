import { Component, OnInit} from '@angular/core';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  constructor(private platform: Platform) { }
  ngOnInit() {

    let backButtonCount = 0;
    let backButtonTimeout: ReturnType<typeof setTimeout> | null = null;

    this.platform.backButton.subscribeWithPriority(0, () => {
      if (backButtonTimeout !== null) {
        clearTimeout(backButtonTimeout);
      }
      backButtonTimeout = setTimeout(() => {
        backButtonCount = 0;
      }, 2000);
      backButtonCount++;
      if (backButtonCount === 2) {
        App.exitApp();
      }
    });
    
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
        console.error('Permission not granted');
      }
    });
    
    console.log('Initializing HomePage');

    PushNotifications.addListener('registration', (token: Token) => {
      console.log('Push registration success, token: ' + token.value);
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      },
    );

  }

  goToMainPage() {
    const iframe = document.getElementById('myIframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = 'https://anime-sama.fr';
    }
  }

  goToReleasedPage() {
    const iframe = document.getElementById('myIframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = 'https://anime-sama.fr/planning/';
    }
  }
  animenotiflist = [
    { id: 'deadmount', name: 'Dead Mount Death Play' },
    { id: 'tokyorevengers', name: 'Tokyo Revengers' },
    { id: 'maitreinterdits', name: 'Moi, Le Maitre Des Interdits' },
    { id: 'eminence', name: 'The Eminence In Shadow' },
    { id: 'drstone', name: 'Dr Stone' },
    { id: 'jjk', name: 'Jujutsu Kaisen' },
    { id: 'frieren', name: 'Frieren' },
    { id: 'spy', name: 'Spy X Family' },
    { id: 'ragna', name: 'Ragna Crimson' },
    { id: 'shangri', name: 'Shangri-La Frontier' },
    { id: 'test', name: 'Test' },
  ];
    
  
  createNotificationChannels = async () => {
    const channels = await PushNotifications.listChannels();
    for (const channel of channels.channels) {
      if (!this.animenotiflist.some(anime => anime.id === channel.id)) {
        await PushNotifications.deleteChannel({ id: channel.id });
      }
    }
    for (const anime of this.animenotiflist) {
      const channel: any = {
        id: anime.id,
        name: anime.name,
        description: `Notifications for the anime ${anime.name}.`,
      };
      await PushNotifications.createChannel(channel);
    }
    await OpenNativeSettings.open('notification_id');
  };
  
}

