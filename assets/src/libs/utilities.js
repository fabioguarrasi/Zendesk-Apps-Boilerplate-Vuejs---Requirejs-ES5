define([
  './ZAFClient'
], function(
  zaf
) {
  'use strict';

  return {
    /**
     * Sets the iframe height based on the lists content
     */
    autoFrameResize: function (app) {
      var newHeight = app.scrollHeight + 20;
      zaf.client.invoke('resize', { width: '100%', height: newHeight+'px' });
    }
  };
});
