// Plausible analytics
// Replicates the previous Vuepress plugin (@mint-system/plugin-plausible),
// which injected the Plausible script with data-domain = wiki.mint-system.ch.
;(function () {
  if (document.querySelector('script[data-domain="wiki.mint-system.ch"]')) {
    return
  }
  var script = document.createElement('script')
  script.defer = true
  script.dataset.domain = 'wiki.mint-system.ch'
  script.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(script)
})()
