require.config({
  paths: {
    '_': 'https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min',
    'ES6Promise': 'https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.min',
    'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.min',
    'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'
  },
  shim: {
    _: { exports: '_' },
    ES6Promise: { exports: 'ES6Promise' },
    vue: { exports: 'vue' }
  }
});

require([
  './components/App/App',
  './libs/ZAFClient',
  'vue'
], function(
  App,
  client,
  Vue
) {
  'use strict';

  client.init();
  client.zd.on('app.registered', init);

  function init() {
    client.zd.invoke('resize', {width: '100%', height: '200px'});
    new Vue({
      el: '#app',
      render: function(h) {
        return h(App);
      },
      created: function() {
        console.log('app created');
      }
    });
  }
})
