require.config({
  paths: {
    'text': 'plugins/requireText.min',
    'json': 'plugins/requireJson.min',
    'Vue': 'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min',
    'Vuex': 'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min',
    'underscore': 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    'ZAFClient': 'https://assets.zendesk.com/apps/sdk/2.0/zaf_sdk',
    'ES6Promise': 'https://cdn.jsdelivr.net/npm/es6-promise@4.2.8/dist/es6-promise.auto.min'
  },
  shim: {
    'ZAFClient': {exports: 'ZAFClient'}
  },
  baseUrl: 'src'
});

require([
  'components/App/App',
  'ES6Promise',
  'store/store',
  'Vue',
  'libs/ZDClient',
  'underscore',
  'i18n/index',
], function(
  App,
  ES6Promise,
  store,
  Vue,
  zdClient,
  underscore,
  i18n,
) {
  'use strict';

  zdClient.init();
  zdClient.events['APP_REGISTERED'](initVueApp);

  window._ = underscore;
  window.ES6Promise = ES6Promise;

  function initVueApp(data) {
    console.log(zdClient.app.currentUser);
    Vue.use(i18n);
    new Vue({
      el: '#app',
      store: store,
      render: function(h) {
        return h(App);
      },
    });
  }
});