define([
  'text!./templates/App.html',
  './components/Welcome',
  'Vue'
], function(
  _template,
  Welcome,
  Vue
) {
  'use strict';

  return Vue.component('zd-app', {
    template: _template,
    data: function() {
      return {
        list: [1,2,3,4,5,6,7,8]
      };
    },
    components: {
      zdWelcome: Welcome
    }
  });
});
