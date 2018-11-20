require.config({
  paths: {
    'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
    'Vue': 'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min',
    'Vuex': 'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min',
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
], function(
  App,
  store,
  Vue,
  zaf,
  underscore
) {
  'use strict';

  window._ = underscore;

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