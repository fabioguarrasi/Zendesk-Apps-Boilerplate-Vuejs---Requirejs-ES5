define(function() {
  'use strict';

  return {
    client: null,

    init: function() {
      this.client = ZAFClient.init();
    },

    /**
     * It sets the frame height using on the passed value.
     * If no value has been passed, 80 will be set as default heigth.
     * @param {Int} newHeight
     */
    resizeFrame: function(appHeight) {
      var newHeight = !!appHeight ? appHeight : 80;
      this.client.invoke('resize', { width: '700px', height: newHeight +'px' });
    }
  };
});