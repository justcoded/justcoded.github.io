// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import vueFilter from './modules/vue_filter';
import detectChrome from './modules/detectChrome';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {

    detectChrome.init();
    
  });

})(jQuery);