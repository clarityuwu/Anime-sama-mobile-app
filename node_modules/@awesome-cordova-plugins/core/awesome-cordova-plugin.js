import { checkAvailability } from './decorators/common';
import { get } from './util';
var AwesomeCordovaNativePlugin = /** @class */ (function () {
    function AwesomeCordovaNativePlugin() {
    }
    /**
     * Returns a boolean that indicates whether the plugin is installed
     *
     * @returns {boolean}
     */
    AwesomeCordovaNativePlugin.installed = function () {
        var isAvailable = checkAvailability(this.pluginRef) === true;
        return isAvailable;
    };
    /**
     * Returns the original plugin object
     */
    AwesomeCordovaNativePlugin.getPlugin = function () {
        if (typeof window !== 'undefined') {
            return get(window, this.pluginRef);
        }
        return null;
    };
    /**
     * Returns the plugin's name
     */
    AwesomeCordovaNativePlugin.getPluginName = function () {
        var pluginName = this.pluginName;
        return pluginName;
    };
    /**
     * Returns the plugin's reference
     */
    AwesomeCordovaNativePlugin.getPluginRef = function () {
        var pluginRef = this.pluginRef;
        return pluginRef;
    };
    /**
     * Returns the plugin's install name
     */
    AwesomeCordovaNativePlugin.getPluginInstallName = function () {
        var plugin = this.plugin;
        return plugin;
    };
    /**
     * Returns the plugin's supported platforms
     */
    AwesomeCordovaNativePlugin.getSupportedPlatforms = function () {
        var platform = this.platforms;
        return platform;
    };
    AwesomeCordovaNativePlugin.pluginName = '';
    AwesomeCordovaNativePlugin.pluginRef = '';
    AwesomeCordovaNativePlugin.plugin = '';
    AwesomeCordovaNativePlugin.repo = '';
    AwesomeCordovaNativePlugin.platforms = [];
    AwesomeCordovaNativePlugin.install = '';
    return AwesomeCordovaNativePlugin;
}());
export { AwesomeCordovaNativePlugin };
//# sourceMappingURL=awesome-cordova-plugin.js.map