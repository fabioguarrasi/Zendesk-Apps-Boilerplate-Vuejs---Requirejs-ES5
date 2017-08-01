define([
  'text!./template.html'
], function(_template) {
  'use strict';

  return Vue.component('test-component', {
    template: _template,
    props: ['list'],
    data: function() {
      return {
        message: 'This is a first app built using Vuejs and Requirejs'
      };
    }
  });
});
