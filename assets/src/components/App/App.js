define([
  'text!./template.html',
  '../Welcome/Welcome',
  '../../libs/utilities',
  'vue'
], function(
  template,
  Welcome,
  utilities,
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
    },
    updated: function() {
      utilities.autoFrameResize(this.$el);
    }
  });
});
