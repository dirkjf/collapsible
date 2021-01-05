function collapsible(){
  document.addEventListener('click', (event) => {

    const element = event.target;
    const targetSelector = element.getAttribute('data-collapsible-target');

    if (targetSelector !== null) {
      toggleCollapse(targetSelector);
    }
  }, false);

  const toggleCollapse = targetSelector => {
    const targets = document.querySelectorAll('.' + targetSelector);
    targets.forEach(target => {
      if (!target.classList.contains('collapsible-show')) {
        target.style.maxHeight = target.scrollHeight + 'px';
      } else {
        target.style.maxHeight = 0 + 'px';
      }
      target.classList.toggle('collapsible-show');
    });
  }

  const closeOnClickOutsideElements = document.querySelectorAll('[data-close-on-click-outside]');
  closeOnClickOutsideElements.forEach(element => hideOnClickOutside(element))

  function hideOnClickOutside(element) {
    const outsideClickListener = event => {
      // Third checks if the element clicked isn't the toggler, which would result in a double click event that conflict each other.
      if (!element.contains(event.target) && isVisible(element) && !element.classList.contains(event.target.getAttribute('data-collapsible-target'))) {
        element.classList.remove('collapsible-show')
        element.style.maxHeight = 0 + 'px';
      }
    }
    document.addEventListener('click', outsideClickListener)
    const isVisible = elem => !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length) // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js
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