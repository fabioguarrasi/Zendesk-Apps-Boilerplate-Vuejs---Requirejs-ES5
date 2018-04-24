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
    mounted: function() {
      zaf.resizeFrame(this.$el.scrollHeight);
    },
    updated: function() {
      zaf.resizeFrame(this.$el.scrollHeight);
    }
  });
});