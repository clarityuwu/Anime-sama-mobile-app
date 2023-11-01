import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
  appId: 'io.animesama.clarity',
  appName: 'anime-sama',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
