require.config({
  paths: {
    'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
    'json': 'https://cdnjs.cloudflare.com/ajax/libs/requirejs-plugins/1.0.3/json.min',
    'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.min',
    'vuex': 'https://cdnjs.cloudflare.com/ajax/libs/vuex/2.4.0/vuex.min',
    'ES6Promise': 'https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.min',
    'underscore': 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min'
  },
  shim: {
    vue: { exports: 'Vue' },
    vuex: { exports: 'Vuex' },
    ES6Promise: { exports: 'ES6Promise' },
    underscore: { exports: 'underscore' }
  },
  baseUrl: 'src'
});

require([
  'components/App/App',
  'store/store',
  'vue',
  'libs/ZAFClient'
], function(
  App,
  store,
  Vue,
  zaf
) {
  'use strict';

  var vm = null;

  zaf.init();
  zaf.client.on('app.registered', init);

  function init(data) {
    vm = new Vue({
      el: '#app',
      store: store,
      render: function(h) {
        return h(App);
      }
    });
  }
});