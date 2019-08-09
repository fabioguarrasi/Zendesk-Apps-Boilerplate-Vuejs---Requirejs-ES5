define([
  'json!i18n/dictionary.json',
], function(
  dictionary,
) {
  'use strict';

  return {
    install(Vue, options) {
      const t =
        options && options.locale
          ? dictionary[options.locale] || dictionary['en']
          : dictionary['en'];
      const RTL_LOCALES = ['ar', 'he'];
      Vue.prototype.$t = key => {
        return t[key] || '';
      };
      Vue.prototype.$rtl = function() {
        return RTL_LOCALES.indexOf(options.locale.toLowerCase()) > -1
          ? 'rtl'
          : 'ltr';
      };
    },
  };
});

