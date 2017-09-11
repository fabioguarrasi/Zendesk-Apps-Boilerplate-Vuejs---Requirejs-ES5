define([
  'text!./template.html',
  '../Welcome/Welcome',
  'vue'
], function(
  template,
  Welcome,
  Vue
) {
  'use strict';

  return Vue.component('zd-app', {
    template: template,
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
