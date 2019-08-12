define([
  'text!./template.html',
  'libs/ZDClient',
], function(
  template,
  zdClient
) {

  return {
    template: template,
    created: function() {
      zdClient.resizeFrame(this.$root.$el.scrollHeight);
    },
  };
})