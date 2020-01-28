import React from 'react'

function trackingCode(options) {
  const {
    owaUrl,
    siteId
  } = options

  const html = `
    var owa_baseUrl = '${owaUrl}';
    var owa_cmds = owa_cmds || [];
    owa_cmds.push(["setSiteId", "${siteId}"]);
    owa_cmds.push(["trackPageView"]);
    
    (function() {
      var _owa = document.createElement('script');
      _owa.type = 'text/javascript';
      _owa.async = true;
      _owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
      var _owa_s = document.getElementsByTagName('script')[0];
      _owa_s.parentNode.insertBefore(_owa, _owa_s);
    }());
  `
  
  return(
    <script
      key={`gatsby-plugin-owa`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}   

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([ trackingCode(pluginOptions) ])
}