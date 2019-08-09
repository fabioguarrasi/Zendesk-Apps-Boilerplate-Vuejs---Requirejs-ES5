define([
  'text!./template.html',
  'libs/ZDClient'
], function(
  template,
  zdClient,
) {
  'use strict';

  return {
    template: template,
    computed: {
      helloWorld: function() {
        return this.$store.state['helloWorld'];
      },
    },
    mounted: function() {
      zdClient.resizeFrame(this.$el.scrollHeight);
    },
  };
});