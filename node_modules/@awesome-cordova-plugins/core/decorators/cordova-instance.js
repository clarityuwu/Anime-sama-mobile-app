import { wrapInstance } from './common';
/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
export function cordovaInstance(pluginObj, methodName, config, args) {
    args = Array.from(args);
    return wrapInstance(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova-instance.js.map