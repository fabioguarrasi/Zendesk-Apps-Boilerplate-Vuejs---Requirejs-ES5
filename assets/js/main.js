requirejs.config({
  paths: {
    text: 'libs/text'
  }
});

requirejs([
  './src/App'
], function(App) {
  'use strict';

  var client = ZAFClient.init();
  client.on('app.registered', _init);

  function _init() {
    client.invoke('resize', {width: '100%', height: '200px'});
    new Vue({
      el: '#app',
      render: function(h) {
        return h(App);
      }
    });
  }
})
