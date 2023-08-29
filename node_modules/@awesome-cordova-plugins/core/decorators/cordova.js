import { wrap } from './common';
/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
export function cordova(pluginObj, methodName, config, args) {
    return wrap(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova.js.map