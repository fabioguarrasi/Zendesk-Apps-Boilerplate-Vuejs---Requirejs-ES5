define([
  'text!./App.html',
  './components/Welcome/index'
], function(
  _template,
  Welcome
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
