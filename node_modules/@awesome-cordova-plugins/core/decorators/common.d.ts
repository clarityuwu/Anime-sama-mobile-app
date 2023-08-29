import { CordovaOptions } from './interfaces';
export declare const ERR_CORDOVA_NOT_AVAILABLE: {
    error: string;
};
export declare const ERR_PLUGIN_NOT_INSTALLED: {
    error: string;
};
/**
 * @param callback
 */
export declare function getPromise<T>(callback: (resolve: Function, reject?: Function) => any): Promise<T>;
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
export declare function wrapPromise(pluginObj: any, methodName: string, args: any[], opts?: CordovaOptions): Promise<unknown>;
/**
 * Checks if plugin/cordova is available
 *
 * @returns {boolean | { error: string } }
 * @private
 */
export declare function checkAvailability(pluginRef: string, methodName?: string, pluginName?: string): boolean | {
    error: string;
};
export declare function checkAvailability(pluginObj: any, methodName?: string, pluginName?: string): boolean | {
    error: string;
};
/**
 * Checks if _objectInstance exists and has the method/property
 *
 * @param pluginObj
 * @param methodName
 * @private
 */
export declare function instanceAvailability(pluginObj: any, methodName?: string): boolean;
/**
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
export declare function setIndex(args: any[], opts?: any, resolve?: Function, reject?: Function): any;
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
export declare function callCordovaPlugin(pluginObj: any, methodName: string, args: any[], opts?: any, resolve?: Function, reject?: Function): any;
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
export declare function callInstance(pluginObj: any, methodName: string, args: any[], opts?: any, resolve?: Function, reject?: Function): any;
/**
 * @param pluginRef
 */
export declare function getPlugin(pluginRef: string): any;
/**
 * @param element
 * @param path
 */
export declare function get(element: Element | Window, path: string): any;
/**
 * @param pluginName
 * @param plugin
 * @param method
 */
export declare function pluginWarn(pluginName: string, plugin?: string, method?: string): void;
/**
 * @private
 * @param pluginName
 * @param method
 */
export declare function cordovaWarn(pluginName: string, method?: string): void;
export declare type WrapFn = (...args: any[]) => any;
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
export declare const wrap: (pluginObj: any, methodName: string, opts?: CordovaOptions) => WrapFn;
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
export declare function wrapInstance(pluginObj: any, methodName: string, opts?: any): Function;
