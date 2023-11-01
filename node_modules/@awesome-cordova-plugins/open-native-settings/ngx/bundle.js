'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var OpenNativeSettings = /** @class */ (function (_super) {
    tslib.__extends(OpenNativeSettings, _super);
    function OpenNativeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenNativeSettings.prototype.open = function (setting) { return core.cordova(this, "open", {}, arguments); };
    OpenNativeSettings.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OpenNativeSettings, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OpenNativeSettings.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OpenNativeSettings });
    OpenNativeSettings.pluginName = "OpenNativeSettings";
    OpenNativeSettings.plugin = "cordova-open-native-settings";
    OpenNativeSettings.pluginRef = "cordova.plugins.settings";
    OpenNativeSettings.repo = "https://github.com/guyromb/Cordova-open-native-settings";
    OpenNativeSettings.platforms = ["Android", "iOS"];
    OpenNativeSettings = tslib.__decorate([], OpenNativeSettings);
    return OpenNativeSettings;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OpenNativeSettings, decorators: [{
            type: i0.Injectable
        }], propDecorators: { open: [] } });

exports.OpenNativeSettings = OpenNativeSettings;
