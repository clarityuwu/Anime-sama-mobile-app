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
import { ScreenOrientation } from "@capacitor/screen-orientation";
import Shepherd from 'shepherd.js'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  constructor(private platform: Platform,) { }
  
  
  ngOnInit() {
    if (!localStorage.getItem('tourShown')) {
      const tour = new Shepherd.Tour({
        defaultStepOptions: {
          cancelIcon: {
            enabled: true
          },
          classes: 'shepherd-theme-dark',
          scrollTo: { behavior: 'smooth', block: 'center' }
        },
        useModalOverlay: true
      });

      tour.addStep({
        id: 'createNotificationChannels',
        text: 'Ce bouton va vous permettre modifier quel anime vous voulez recevoir ! Attention il faut clicker dessus pour créer les notifications !',
        attachTo: {
          element: '.fab-button-danger',
          on: 'bottom'
        },
        buttons: [
          {
            action: tour.next,
            text: 'Suivant'
          }
        ]
      });

      tour.addStep({
        id: 'goToReleasedPage',
        text: 'Ce bouton va sur la page des derniers anime du moment !',
        attachTo: {
          element: '.fab-button-primary',
          on: 'bottom'
        },
        buttons: [
          {
            action: tour.next,
            text: 'Suivant'
          }
        ]
      });
    
      tour.addStep({
        id: 'goToMainPage',
        text: 'Ce bouton va sur la page principale !',
        attachTo: {
          element: '.fab-button-secondary',
          on: 'bottom'
        },
        buttons: [
          {
            action: tour.next,
            text: 'Suivant'
          }
        ]
      });
    

      tour.addStep({
        id: 'tourComplete',
        text: 'Le tour est terminé ! Vous pouvez me soutenir en allant sur mon GitHub et en mettant une étoile !',
        buttons: [
          {
            text: 'Open GitHub',
            action: () => window.open('https://github.com/clarityuwu/Anime-sama-mobile-app', '_blank')
          }
        ]
      });
    
      tour.start();
      localStorage.setItem('tourShown', 'true');
    }
  
    document.addEventListener('fullscreenchange', async () => {
      const iframe = document.getElementById('myIframe');
      if (document.fullscreenElement === iframe) {
        try {
          await ScreenOrientation.lock({ orientation: 'landscape' });
        } catch (error) {
          console.error('Could not lock screen orientation:', error);
        }
      } else {
        try {
          await ScreenOrientation.unlock();
        } catch (error) {
          console.error('Could not unlock screen orientation:', error);
        }
      }
    });
  
  
    App.addListener('backButton', ({ canGoBack }) => {
     console.log(canGoBack);
      if(canGoBack){
       window.history.back();
      }
    }
    );

    
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
      async (notification: ActionPerformed) => {
        const data = notification.notification.data;
    
        if (data && data['update'] === '1') {
          const choice = await this.presentUpdateAlert(); // Call function to present the alert
          if (choice === 'GitHub') {
            window.open('https://github.com/clarityuwu/Anime-sama-mobile-app/releases', '_blank');
          } else if (choice === 'PlayStore') {
            // Add logic to open Play Store link
          }
        } else {
          this.goToMainPage();
        }
      }
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
    { id: 'update', name: 'Update' },
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

  async presentUpdateAlert(): Promise<string> {
    return new Promise<string>((resolve) => {
      const alert = document.createElement('ion-alert');
      alert.header = 'Mise à jour disponible';
      alert.message = 'Une mise à jour est disponible, veillez choisir ou vous voulez la télécharger. Vous pouvez aussi ignorer cette mise à jour mais les notification de anime sera obsolète.';
      alert.buttons = [
        {
          text: 'GitHub',
          handler: () => {
            resolve('GitHub');
          },
        },
        {
          text: 'Play Store',
          handler: () => {
            resolve('PlayStore');
          },
        },
      ];
  
      document.body.appendChild(alert);
      return alert.present();
    });
  }
  
}

