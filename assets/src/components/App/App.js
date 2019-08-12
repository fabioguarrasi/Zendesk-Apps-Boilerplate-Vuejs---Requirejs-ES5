define([
  'text!./template.html',
  'libs/ZDClient',
  'components/Child/Child'
], function(
  template,
  zdClient,
  Child
) {
  'use strict';

  return {
    template: template,
    components: {
      Child: Child
    },
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