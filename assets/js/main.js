requirejs.config({
  paths: {
    text: 'libs/text',
    Vue: 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.min'
  },
  shim: {
    Vue: { exports: 'Vue' }
  }
});

requirejs([
  './src/App',
  './libs/ZAFClient',
  'Vue'
], function(
  App,
  client,
  Vue
) {
  'use strict';
  client.init();
  client.zd.on('app.registered', _init);
  function _init() {
    client.zd.invoke('resize', {width: '100%', height: '200px'});
    new Vue({
      el: '#app',
      render: function(h) {
        return h(App);
      }
    });
  }
})
