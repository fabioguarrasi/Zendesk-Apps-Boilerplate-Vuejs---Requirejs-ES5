define([
  'text!../templates/Welcome.html',
  '../../libs/ZAFClient',
  'Vue'
], function(
  _template,
  client,
  Vue
) {
  'use strict';

  return Vue.component('test-component', {
    template: _template,
    props: ['list'],
    data: function() {
      return {
        message: 'This is a first app built using Vuejs and Requirejs'
      };
    },
    beforeMount: function() {
      client.zd.invoke('resize', {width: '100%', height: '250px'});
    }
  });
});
