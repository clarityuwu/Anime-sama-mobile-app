
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-open-native-settings.Settings",
          "file": "plugins/cordova-open-native-settings/www/settings.js",
          "pluginId": "cordova-open-native-settings",
        "clobbers": [
          "cordova.plugins.settings"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-open-native-settings": "1.5.5"
    };
    // BOTTOM OF METADATA
    });
    