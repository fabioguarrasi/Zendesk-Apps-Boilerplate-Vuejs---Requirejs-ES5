define(function() {
  'use strict';

  return {
    client: null,

    init: function() {
      this.client = ZAFClient.init();
    }
  };
});