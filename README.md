# gatsby-plugin-owa

Plugin to add the [Open Web Analytics](https://www.openwebanalytics.com) tracking script to a Gatsby site.

## Usage

1. Install the plugin

   ```bash
   npm -i gatsby-plugin-owa
   ```

2. Load the plugin in `gatsby-config.js`, with options:
   ```js
   plugins: [
     {
       resolve: `gatsby-plugin-owa`,
       options: {
       	  siteId: 'OWA_SITE_ID',
          owaUrl: 'OWA_URL'
       }
     }
   ]
   ```

   The `owaUrl` should be a full url to an owa installation, with an ending slash, like `https://my-owa-server.domain/owa/`.
   
## Options

In addition to the required options `siteId` and `owaUrl`, the plugin understands the following options:

`trackClicks` (boolean, default: `false`)
: Enables OWA's built-in click tracking.

## License

The MIT License

Copyright (c) 2018 Sigve Indregard

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
