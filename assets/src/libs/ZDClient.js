define([
  'ZAFClient'
],function(
  ZAFClient
) {
  'use strict';

  var CLIENT = null;
  var APP_SETTINGS = null;

  return {

    init() {
      CLIENT = ZAFClient.init();
    },

    events: {
      APP_REGISTERED(callback) {
        return CLIENT.on('app.registered', (data) => {
          APP_SETTINGS = data.metadata.settings;
          return callback(data);
        });
      }
    },

    /**
     * Set getters for privite objects
     */
    app: {
      get settings() { return APP_SETTINGS; }
    },

    /**
     * It returns true if the app is installed in the instance, false if
     * it's running locally
     */
    isProduction() {
      return !!APP_SETTINGS['IS_PRODUCTION'];
    },

    /**
     * It sets the frame height using on the passed value.
     * If no value has been passed, 80 will be set as default heigth.
     * @param {Int} newHeight
     */
    resizeFrame(appHeight) {
      CLIENT.invoke('resize', {width: '100%', height: appHeight +'px'});
    },
  };
});