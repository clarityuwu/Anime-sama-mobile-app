import { WebPlugin } from '@capacitor/core';
import type { AppUpdateInfo, AppUpdatePlugin, AppUpdateResult } from './definitions';
export declare class AppUpdateWeb extends WebPlugin implements AppUpdatePlugin {
    getAppUpdateInfo(): Promise<AppUpdateInfo>;
    openAppStore(): Promise<void>;
    performImmediateUpdate(): Promise<AppUpdateResult>;
    startFlexibleUpdate(): Promise<AppUpdateResult>;
    completeFlexibleUpdate(): Promise<void>;
}
