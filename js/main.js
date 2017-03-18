'use strict';

var browserLanguage = function() {
  var ua = window.navigator.userAgent.toLowerCase();
  try {
    // chrome
    if( ua.indexOf( 'chrome' ) != -1 ) {
      return ( navigator.languages[0] || navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
    }
    // それ以外
    else{
      return ( navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
    }
  }
  catch( e ) {
    return undefined;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var ja = document.getElementsByClassName('ja');
  var en = document.getElementsByClassName('en');

  if ("ja" == browserLanguage()) {
    for (var i = 0; i < ja.length; i++) {
      var element = ja[i];
      element.style.display = 'inherit';
    }

    for (var i = 0; i < en.length; i++) {
      var element = en[i];
      element.style.display = 'none';
    }
  } else {
    for (var i = 0; i < ja.length; i++) {
      var element = ja[i];
      element.style.display = 'none';
    }

    for (var i = 0; i < en.length; i++) {
      var element = en[i];
      element.style.display = 'inherit';
    }
  }
}, false );
