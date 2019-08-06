define([
  'Vue',
  'Vuex',
  'i18n/index',
], function(
  Vue,
  Vuex,
  i18n,
) {
  'use strict';

  Vue.use(Vuex);
  Vue.use(i18n);

  window.nls = new Vue();

  return new Vuex.Store({
    state: {
      helloWorld: nls.$t('helloWorld'),
    },
  });
});