require.config({
  paths: {
    'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
    'json': 'https://cdnjs.cloudflare.com/ajax/libs/requirejs-plugins/1.0.3/json.min',
    'Vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.min',
    'Vuex': 'https://cdnjs.cloudflare.com/ajax/libs/vuex/2.4.0/vuex.min',
    'ES6Promise': 'https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.min',
    'underscore': 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    'ZAFClient': 'https://assets.zendesk.com/apps/sdk/2.0/zaf_sdk'
  },
  shim: {
    'ZAFClient': {exports: 'ZAFClient'}
  },
  baseUrl: 'src'
});

require([
  'components/App/app',
  'store/store',
  'Vue',
  'libs/ZAFClient',
  'underscore',
  'ES6Promise'
], function(
  App,
  store,
  Vue,
  zaf,
  underscore,
  ES6Promise
) {
  'use strict';

  window._ = underscore;
  window.ES6Promise = ES6Promise;

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