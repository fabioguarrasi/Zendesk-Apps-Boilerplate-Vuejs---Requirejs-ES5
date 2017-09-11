define(function() {
  return {
    client: null,

    init: function() {
      this.client = ZAFClient.init();
    }
  };
})
