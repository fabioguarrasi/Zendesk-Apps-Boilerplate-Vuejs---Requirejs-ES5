define([
  'text!./template.html',
  'vue',
  'libs/ZAFClient'
],function(
  template,
  Vue,
  zaf
) {
  'use strict';

  return Vue.component('zd-app', {
    template: template
  });
});