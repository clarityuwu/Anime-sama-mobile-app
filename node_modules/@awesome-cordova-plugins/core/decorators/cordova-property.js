import { checkAvailability, getPlugin } from './common';
/**
 * @param pluginObj
 * @param key
 */
export function cordovaPropertyGet(pluginObj, key) {
    if (checkAvailability(pluginObj, key) === true) {
        return getPlugin(pluginObj.constructor.getPluginRef())[key];
    }
    return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
export function cordovaPropertySet(pluginObj, key, value) {
    if (checkAvailability(pluginObj, key) === true) {
        getPlugin(pluginObj.constructor.getPluginRef())[key] = value;
    }
}
//# sourceMappingURL=cordova-property.js.map