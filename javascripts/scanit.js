(function() {
  window.scanit = {
    previousURL: '',
    instgrmObserver: new MutationObserver(() => {
      const global = window.scanit;

      if (location.href === global.previousURL) {
        return;
      }

      global.previousURL = location.href;

      if (window.instgrm) {
        // Load embeds when the URL is changed.
        // It calls process method after loading the page.
        setTimeout(() => {
          console.info('The URL is changed, Load instagram embeds.')
          window.instgrm.Embeds.process();
        }, 500)
      }
    })
  };

  console.debug('Start to observe the document.')
  window.scanit.instgrmObserver.observe(document, {subtree: true, childList: true})
}).call({})