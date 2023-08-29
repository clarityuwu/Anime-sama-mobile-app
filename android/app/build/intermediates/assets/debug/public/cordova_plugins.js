
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-fullscreen.AndroidFullScreen",
          "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
          "pluginId": "cordova-plugin-fullscreen",
        "clobbers": [
          "AndroidFullScreen"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-fullscreen": "1.3.0"
    };
    // BOTTOM OF METADATA
    });
    