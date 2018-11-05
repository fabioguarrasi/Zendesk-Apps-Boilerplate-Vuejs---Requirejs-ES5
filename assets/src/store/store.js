define([
  'Vue',
  'Vuex'
], function(
  Vue,
  Vuex
) {
  'use strict';

  Vue.use(Vuex);

  return new Vuex.Store({
    state: {
      helloWorld: 'Hello World!'
    }
  });
})