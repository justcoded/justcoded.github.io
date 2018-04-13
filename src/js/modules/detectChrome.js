let detectChrome = {
  init: function() {
    if ( this.detectChrome() ) {
      document.body.classList.add('chrome');
    }
  },
  detectChrome: function() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  },
};

export default detectChrome;