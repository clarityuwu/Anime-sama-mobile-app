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

/**
 * Bit flag values for setSystemUiVisibility()
 *
 * @see  https://developer.android.com/reference/android/view/View.html#setSystemUiVisibility(int)
 */
exports.AndroidSystemUiFlags = void 0;
(function (AndroidSystemUiFlags) {
    /** View has requested the system UI (status bar) to be visible (the default). SYSTEM_UI_FLAG_VISIBLE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["Visible"] = 0] = "Visible";
    /** View has requested the system UI to enter an unobtrusive "low profile" mode. SYSTEM_UI_FLAG_LOW_PROFILE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LowProfile"] = 1] = "LowProfile";
    /** View has requested that the system navigation be temporarily hidden. SYSTEM_UI_FLAG_HIDE_NAVIGATION */
    AndroidSystemUiFlags[AndroidSystemUiFlags["HideNavigation"] = 2] = "HideNavigation";
    /** View has requested to go into the normal fullscreen mode so that its content can take over the screen while still allowing the user to interact with the application. SYSTEM_UI_FLAG_FULLSCREEN */
    AndroidSystemUiFlags[AndroidSystemUiFlags["Fullscreen"] = 4] = "Fullscreen";
    /** When using other layout flags, we would like a stable view of the content insets given to fitSystemWindows(Rect). SYSTEM_UI_FLAG_LAYOUT_STABLE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LayoutStable"] = 256] = "LayoutStable";
    /** View would like its window to be laid out as if it has requested SYSTEM_UI_FLAG_HIDE_NAVIGATION, even if it currently hasn't. SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LayoutHideNavigation"] = 512] = "LayoutHideNavigation";
    /** View would like its window to be laid out as if it has requested SYSTEM_UI_FLAG_FULLSCREEN, even if it currently hasn't. SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LayoutFullscreen"] = 1024] = "LayoutFullscreen";
    /** View would like to remain interactive when hiding the navigation bar with SYSTEM_UI_FLAG_HIDE_NAVIGATION. SYSTEM_UI_FLAG_IMMERSIVE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["Immersive"] = 2048] = "Immersive";
    /** View would like to remain interactive when hiding the status bar with SYSTEM_UI_FLAG_FULLSCREEN and/or hiding the navigation bar with SYSTEM_UI_FLAG_HIDE_NAVIGATION. SYSTEM_UI_FLAG_IMMERSIVE_STICKY */
    AndroidSystemUiFlags[AndroidSystemUiFlags["ImmersiveSticky"] = 4096] = "ImmersiveSticky";
    /** Requests the status bar to draw in a mode that is compatible with light status bar backgrounds. SYSTEM_UI_FLAG_LIGHT_STATUS_BAR */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LightStatusBar"] = 8192] = "LightStatusBar";
})(exports.AndroidSystemUiFlags || (exports.AndroidSystemUiFlags = {}));
var AndroidFullScreen = /** @class */ (function (_super) {
    tslib.__extends(AndroidFullScreen, _super);
    function AndroidFullScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidFullScreen.prototype.isSupported = function () { return core.cordova(this, "isSupported", {}, arguments); };
    AndroidFullScreen.prototype.isImmersiveModeSupported = function () { return core.cordova(this, "isImmersiveModeSupported", {}, arguments); };
    AndroidFullScreen.prototype.immersiveWidth = function () { return core.cordova(this, "immersiveWidth", {}, arguments); };
    AndroidFullScreen.prototype.immersiveHeight = function () { return core.cordova(this, "immersiveHeight", {}, arguments); };
    AndroidFullScreen.prototype.leanMode = function () { return core.cordova(this, "leanMode", {}, arguments); };
    AndroidFullScreen.prototype.showSystemUI = function () { return core.cordova(this, "showSystemUI", {}, arguments); };
    AndroidFullScreen.prototype.showUnderStatusBar = function () { return core.cordova(this, "showUnderStatusBar", {}, arguments); };
    AndroidFullScreen.prototype.showUnderSystemUI = function () { return core.cordova(this, "showUnderSystemUI", {}, arguments); };
    AndroidFullScreen.prototype.immersiveMode = function () { return core.cordova(this, "immersiveMode", {}, arguments); };
    AndroidFullScreen.prototype.setSystemUiVisibility = function (visibility) { return core.cordova(this, "setSystemUiVisibility", {}, arguments); };
    AndroidFullScreen.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AndroidFullScreen, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AndroidFullScreen.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AndroidFullScreen });
    AndroidFullScreen.pluginName = "AndroidFullScreen";
    AndroidFullScreen.plugin = "cordova-plugin-fullscreen";
    AndroidFullScreen.pluginRef = "AndroidFullScreen";
    AndroidFullScreen.repo = "https://github.com/mesmotronic/cordova-plugin-fullscreen";
    AndroidFullScreen.platforms = ["Android"];
    AndroidFullScreen = tslib.__decorate([], AndroidFullScreen);
    return AndroidFullScreen;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AndroidFullScreen, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isSupported: [], isImmersiveModeSupported: [], immersiveWidth: [], immersiveHeight: [], leanMode: [], showSystemUI: [], showUnderStatusBar: [], showUnderSystemUI: [], immersiveMode: [], setSystemUiVisibility: [] } });

exports.AndroidFullScreen = AndroidFullScreen;
