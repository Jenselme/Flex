function privacyCnil(_paq) {
    // From https://www.cnil.fr/sites/default/files/typo/document/Configuration_piwik.pdf
    _paq.push([
        function() {
            var self = this;

            function getOriginalVisitorCookieTimeout() {
                var now = new Date(),
                    nowTs = Math.round(now.getTime() / 1000),
                    visitorInfo = self.getVisitorInfo();
                var createTs = parseInt(visitorInfo[2]);
                var cookieTimeout = 33696000; // 13 mois en secondes
                var originalTimeout = createTs + cookieTimeout - nowTs;
                return originalTimeout;
            }

            this.setVisitorCookieTimeout(getOriginalVisitorCookieTimeout());
        },
    ]);
}

var _paq = _paq || [];

privacyCnil(_paq);

_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
var u=(("https:" == document.location.protocol) ? "https" : "http") +
"://piwik.jujens.eu/";
_paq.push(['setTrackerUrl', u+'piwik.php']);
_paq.push(['setSiteId', 1]);
var d=document, g=d.createElement('script'),
s=d.getElementsByTagName('script')[0]; g.type='text/javascript';
g.defer=true; g.async=true; g.src=u+'piwik.js';
s.parentNode.insertBefore(g,s);
})();
