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
import { AppUpdate, AppUpdateInfo } from '@capawesome/capacitor-app-update';
import { RateApp } from 'capacitor-rate-app'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  public appUpdateInfo: AppUpdateInfo | undefined;
  
  constructor(private platform: Platform,) { }
  
  
  ngOnInit() {

    let reviewRequested = false;

    // Check if the tour has already been shown and if not, show it
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
        text: 'Le tour est terminé ! Vous pouvez me soutenir en mettant un avis !',
        buttons: [
          {
            text: 'Fermer',
            action: () => {
              if (!reviewRequested) {
                RateApp.requestReview();
                reviewRequested = true;
              } else {
                tour.hide(); // or tour.complete();
              }
            }
          }
        ]
      });
    
      tour.start();
      localStorage.setItem('tourShown', 'true');
    }

    const storedVersion = localStorage.getItem('appVersion');

    AppUpdate.getAppUpdateInfo().then(async (appUpdateInfo) => {
      this.appUpdateInfo = appUpdateInfo;
      if (storedVersion && appUpdateInfo.currentVersion > storedVersion) {
        setTimeout(() => {
          RateApp.requestReview().catch(error => {
            console.error('Error requesting review:', error);
          });
        }, 2000); 
      }
      localStorage.setItem('appVersion', appUpdateInfo.currentVersion);
    });

    AppUpdate.getAppUpdateInfo().then(async (appUpdateInfo) => {
      this.appUpdateInfo = appUpdateInfo;
      if (appUpdateInfo.availableVersion > appUpdateInfo.currentVersion) {
        const choice = await this.presentUpdateAlert();
        if (choice === 'Fermer') {
        } else if (choice === 'PlayStore') {
          AppUpdate.openAppStore();
        }
      }
    }).catch(error => {
      console.error('Error getting app update info:', error);
    });
    

    // Lock screen orientation to landscape when fullscreen
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
    
  
    // Go back when the back button is pressed
    App.addListener('backButton', ({ canGoBack }) => {
     console.log(canGoBack);
      if(canGoBack){
       window.history.back();
      }
    }
    );
    

    // Initialize Push Notifications
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
}
  
  // Go to the main page when fab button is clicked
  goToMainPage() {
    const iframe = document.getElementById('myIframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = 'https://anime-sama.fr';
    }
  }

  // Go to the main page when fab button is clicked
  goToReleasedPage() {
    const iframe = document.getElementById('myIframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = 'https://anime-sama.fr/planning/';
    }
  }

  // Notification channel list
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
    { id: 'shangri', name: 'Shangri-La Frontier' }
  ];
    
  // Create notification channels
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

  // Present the update alert

  async presentUpdateAlert(): Promise<string> {
    return new Promise<string>((resolve) => {
      const alert = document.createElement('ion-alert');
      alert.header = 'Mise à jour disponible';
      alert.message = 'Une mise à jour est disponible. Vous pouvez aussi ignorer cette mise à jour mais les notification des anime seront obsolètes.';
      alert.buttons = [
        {
          text: 'Fermer',
          role: 'cancel',
          handler: () => {
            resolve('Fermer');
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
