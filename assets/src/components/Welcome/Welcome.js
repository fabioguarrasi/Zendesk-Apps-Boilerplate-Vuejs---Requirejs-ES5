define([
  'text!./template.html',
  '../../libs/ZAFClient',
  'vue'
], function(
  template,
  zaf,
  Vue
) {
  'use strict';

  return Vue.component('test-component', {
    template: template,
    props: ['list'],
    data: function() {
      return {
        testing: '',
        message: 'This is a first app built using Vuejs and Requirejs'
      };
    },
    methods: {
      addItem: function() {
        this.list.push(this.testing);
        this.testing = '';
      }
    }
  });
});
