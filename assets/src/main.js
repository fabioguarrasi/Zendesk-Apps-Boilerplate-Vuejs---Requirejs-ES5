require.config({
  paths: {
    'ES6Promise': 'https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.min',
    'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
    'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.min',
    'vuex': 'https://cdnjs.cloudflare.com/ajax/libs/vuex/2.4.0/vuex.min',
    'underscore': 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min'
  },
  shim: {
    ES6Promise: { exports: 'ES6Promise' },
    vue: { exports: 'Vue' },
    vuex: { exports: 'Vuex' },
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

  var VUE_INSTANCE = null;

  zaf.init();
  zaf.client.on('app.registered', init);

  function init(data) {
    VUE_INSTANCE = new Vue({
      el: '#app',
      store: store,
      render: function(h) {
        return h(App);
      }
    });
  }
});