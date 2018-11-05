define([
  'text!./template.html',
  'Vue',
  'libs/ZAFClient'
],function(
  template,
  Vue,
  zaf
) {
  'use strict';

  return Vue.component('zd-app', {
    template: template,
    computed: {
      helloWorld: function() {
        return this.$store.state['helloWorld'];
      }
    },
    mounted: function() {
      zaf.resizeFrame(this.$el.scrollHeight);
    },
    updated: function() {
      zaf.resizeFrame(this.$el.scrollHeight);
    }
  });
});