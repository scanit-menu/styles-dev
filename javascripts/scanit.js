(function() {
  window.scanit = {
    previousURL: '',
    instgrmObserver: new MutationObserver(() => {
      const global = window.scanit;

      if (location.href === global.previousURL) {
        console.debug('The URL is not changed, skip to load instagram embeds.')
        return;
      }

      global.previousURL = location.href;

      // Load embeds when the page is changed.
      if (window.instgrm) {
        console.info('The URL is changed, Load instagram embeds.')
        window.instgrm.Embeds.process();
      }
    })
  };

  console.debug('Start to observe the document.')
  window.scanit.instgrmObserver.observe(document, {subtree: true, childList: true})
}).call({})