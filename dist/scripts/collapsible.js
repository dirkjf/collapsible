/******/ (function() { // webpackBootstrap
!function() {
function collapsible() {
  document.addEventListener('click', function (event) {
    var element = event.target;
    var targetSelector = element.getAttribute('data-collapsible-target');

    if (targetSelector !== null) {
      toggleCollapse(targetSelector);
    }
  }, false);

  var toggleCollapse = function toggleCollapse(targetSelector) {
    var targets = document.querySelectorAll('.' + targetSelector);
    targets.forEach(function (target) {
      if (!target.classList.contains('collapsible-show')) {
        target.style.maxHeight = target.scrollHeight + 'px';
      } else {
        target.style.maxHeight = 0 + 'px';
      }

      target.classList.toggle('collapsible-show');
    });
  };

  var closeOnClickOutsideElements = document.querySelectorAll('[data-close-on-click-outside]');
  closeOnClickOutsideElements.forEach(function (element) {
    return hideOnClickOutside(element);
  });

  function hideOnClickOutside(element) {
    var outsideClickListener = function outsideClickListener(event) {
      // Third checks if the element clicked isn't the toggler, which would result in a double click event that conflict each other.
      if (!element.contains(event.target) && isVisible(element) && !element.classList.contains(event.target.getAttribute('data-collapsible-target'))) {
        element.classList.remove('collapsible-show');
        element.style.maxHeight = 0 + 'px';
      }
    };

    document.addEventListener('click', outsideClickListener);

    var isVisible = function isVisible(elem) {
      return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    }; // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js

  }
}

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(collapsible);
}();
!function() {
"use strict";
// extracted by mini-css-extract-plugin

}();
/******/ })()
;
//# sourceMappingURL=collapsible.js.map