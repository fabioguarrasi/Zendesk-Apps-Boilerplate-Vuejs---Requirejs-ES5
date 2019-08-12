define([
  'ZAFClient'
],function(
  ZAFClient
) {
  'use strict';

  var CLIENT = null;
  var APP_SETTINGS = null;
  var CURRENT_USER = null;

  return {

    init: function() {
      CLIENT = ZAFClient.init();
    },

    events: {
      APP_REGISTERED: function(callback) {
        return CLIENT.on('app.registered', function(data) {
          APP_SETTINGS = data.metadata.settings;
          return CLIENT.get('currentUser').then(function(response) {
            CURRENT_USER = response.currentUser;
            return callback(data);
          });
        })
      }
    },

    /**
     * Set getters for privite objects
     */
    app: {
      get settings() { return APP_SETTINGS; },
      get currentUser() {
        return CURRENT_USER;
      }
    },

    /**
     * It returns true if the app is installed in the instance, false if
     * it's running locally
     */
    isProduction: function() {
      return !!APP_SETTINGS['IS_PRODUCTION'];
    },

    /**
     * It sets the frame height using on the passed value.
     * If no value has been passed, 80 will be set as default heigth.
     * @param {Int} newHeight
     */
    resizeFrame: function(appHeight) {
      CLIENT.invoke('resize', {width: '100%', height: appHeight +'px'});
    },
  };
});