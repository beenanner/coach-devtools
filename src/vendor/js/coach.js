function init() {
  var result = (function(){if("undefined"!=typeof window){"use strict";var e={getAbsoluteURL:function(e){var t=window.document.createElement("a");return t.href=e,t.href},getHostname:function(e){var t=window.document.createElement("a");return t.href=e,t.hostname},exists:function(e,t){return t.some(function(t){return t===e})},caseInsensitiveAttributeValueFilter:function(e,t){return function(n){var r=n.getAttribute(e)||"";return r.toLowerCase()===t.toLowerCase()?n:void 0}},isHTTP2:function(){var t=e.getConnectionType().toLowerCase();return"h2"===t||t.startsWith("spdy")},getConnectionType:function(){if(window.chrome&&window.chrome.loadTimes)return window.chrome.loadTimes().connectionInfo;if(window.performance&&window.performance.getEntriesByType&&window.performance.getEntriesByType("resource")){var t=window.performance.getEntriesByType("resource");if(t.length>1&&t[0].nextHopProtocol)for(var n=document.domain,r=0,i=t.length;i>r;r+=1)if(n===e.getHostname(t[r].name))return t[r].nextHopProtocol}return"unknown"},getSynchJSFiles:function(t){var n=Array.prototype.slice.call(t.getElementsByTagName("script"));return n.filter(function(e){return!e.async&&e.src}).map(function(t){return e.getAbsoluteURL(t.src)})},getAsynchJSFiles:function(t){var n=Array.prototype.slice.call(t.getElementsByTagName("script"));return n.filter(function(e){return e.async&&e.src}).map(function(t){return e.getAbsoluteURL(t.src)})},getResourceHintsHrefs:function(e){var t=Array.prototype.slice.call(window.document.head.getElementsByTagName("link"));return t.filter(function(t){return t.rel===e}).map(function(e){return e.href})},getCSSFiles:function(t){var n=Array.prototype.slice.call(t.getElementsByTagName("link"));return n.filter(function(e){return"stylesheet"===e.rel&&!e.href.startsWith("data:")}).map(function(t){return e.getAbsoluteURL(t.href)})},plural:function(e){return 1!==e?"s":""},getTransferSize:function(e){var t=window.performance.getEntriesByName(e,"resource");return 1===t.length&&t[0].nextHopProtocol?t[0].transferSize:0}};return function(e){var t={},n={},r={},i={};try{r.altImages=function(e){"use strict";var t=Array.prototype.slice.call(window.document.getElementsByTagName("img")),n=0,r=[],i=0,a=0,o="",s={};return t.forEach(function(e){e.alt&&""!==e.alt?e.alt&&e.alt.length>125&&(n+=5,r.push(e.src),a++):(n+=10,i++,e.src&&(r.push(e.src),s[e.src]=1))}),i>0&&(o="The page has "+i+" image"+e.plural(i)+" that lack alt attribute(s) and "+Object.keys(s).length+" of them are unique."),a>0&&(o+="The page has "+a+" image"+e.plural(a)+" where the alt text are too long (longer than 125 characters)."),{id:"altImages",title:"Always use an alt attribute on image tags",description:"All img tags require an alt attribute. This goes without exception. Everything else is an error. If you have an img tag in your HTML without an alt attribute, add it now. https://www.marcozehe.de/2015/12/14/the-web-accessibility-basics/",advice:o,score:Math.max(0,100-n),weight:5,offending:r,tags:["accessibility","images"]}}(e)}catch(a){i.altImages=a.message}try{r.headings=function(){"use strict";var e=["h6","h5","h4","h3","h2","h1"],t=0,n=0,r="";if(e.forEach(function(e){n+=Array.prototype.slice.call(window.document.getElementsByTagName(e)).length}),0===n)t=100,r="The page is missing headings. Use them to get a better structure of your content.";else{var i=!1,a=[];e.forEach(function(e){var n=Array.prototype.slice.call(window.document.getElementsByTagName(e));i&&0===n.length&&(t+=10,a.push("The page is missing a "+e+" and has heading(s) with lower priority.")),n.length>0&&(i=!0)}),r=a.join(" ")}return{id:"headings",title:"Use heading tags to structure your page",description:"Headings give your document a logical, easy to follow structure. Have you ever wondered how Wikipedia puts together its table of contents for each article? They use the logical heading structure for that, too! The H1 through H6 elements are unambiguous in telling screen readers, search engines and other technologies what the structure of your document is. https://www.marcozehe.de/2015/12/14/the-web-accessibility-basics/",advice:r,score:Math.max(0,100-t),weight:4,offending:[],tags:["accessibility","html"]}}()}catch(a){i.headings=a.message}try{r.labelOnInput=function(){"use strict";function e(e,t){return t.filter(function(t){return t["for"]&&t["for"]===e})}var t=Array.prototype.slice.call(window.document.getElementsByTagName("label")),n=0,r=[],i=Array.prototype.slice.call(window.document.getElementsByTagName("input"));return i.forEach(function(r){"text"!==r.type&&"password"!==r.type&&"radio"!==r.type&&"checkbox"!==r.type&&"search"!==r.type||"LABEL"!=r.parentElement.nodeName&&r.id&&0===e(r.id,t).length&&(n+=10)}),{id:"labelOnInput",title:"Always set labels on inputs in forms",description:"Most input elements, as well as the select and textarea elements, need an associated label element that states their purpose. The only exception is those that produce a button, like the reset and submit buttons do. Others, be it text, checkbox, password, radio (button), search etc. require a label element to be present. https://www.marcozehe.de/2015/12/14/the-web-accessibility-basics/",advice:n>0?"There are "+n/10+" input(s) that are missing labels on a form.":"",score:Math.max(0,100-n),weight:3,offending:r,tags:["accessibility","form"]}}()}catch(a){i.labelOnInput=a.message}try{r.landmarks=function(){"use strict";var e=["article","aside","footer","header","nav","main"],t=0;return e.forEach(function(e){t+=Array.prototype.slice.call(window.document.getElementsByTagName(e)).length}),{id:"landmarks",title:"Structure your content by using landmarks",description:"Landmarks can be article, aside, footer, header, nav or main tag. Adding such landmarks appropriately can help further provide sense to your document and help users more easily navigate it. https://www.marcozehe.de/2015/12/14/the-web-accessibility-basics/",advice:0===t?"The page doesn't use any landmarks.":"",score:t>0?100:0,weight:5,offending:[],tags:["accessibility","html"]}}()}catch(a){i.landmarks=a.message}try{r.neverSuppressZoom=function(e){"use strict";var t=Array.prototype.slice.call(document.querySelectorAll("meta[name][content]"));t=t.filter(e.caseInsensitiveAttributeValueFilter("name","viewport"));var n=100,r=[];return t.forEach(function(e){(e.content.indexOf("user-scalable=no")>-1||e.content.indexOf("initial-scale=1.0; maximum-scale=1.0")>-1)&&(n=0,r.push(e.content))}),{id:"neverSuppressZoom",title:"Don't suppress pinch zoom",description:"A key feature of mobile browsing is being able to zoom in to read content and out to locate content within a page. http://www.iheni.com/mobile-accessibility-tip-dont-suppress-pinch-zoom/",advice:0===n?"What! The page suppresses zooming, you really shouldn't do that.":"",score:n,weight:8,offending:r,tags:["accessibility"]}}(e)}catch(a){i.neverSuppressZoom=a.message}try{r.sections=function(){"use strict";var e=["h6","h5","h4","h3","h2","h1"],t=0,n="",r=Array.prototype.slice.call(window.document.getElementsByTagName("section")),i=r.length;return 0===i?(n="The page doesn't use sections. You could use them to get a better structure of your content.",t=100):(r.forEach(function(n){var r=!1;e.forEach(function(e){var t=Array.prototype.slice.call(n.getElementsByTagName(e));t.length>0&&(r=!0)}),r||(t+=10)}),t>0&&(n="The page is missing heading(s) within a section tag on the page. It happens "+t/10+" times.")),{id:"sections",title:"Use headings tags within section tags to better structure your page",description:"Section tags should have at least one heading element as a direct descendant.",advice:n,score:Math.max(0,100-t),weight:0,offending:[],tags:["accessibility","html"]}}()}catch(a){i.sections=a.message}try{r.table=function(){"use strict";var e=Array.prototype.slice.call(window.document.getElementsByTagName("table")),t=0,n=[];return e.forEach(function(e){0===e.getElementsByTagName("caption").length&&(t+=5,e.id&&n.push(e.id));var r=e.getElementsByTagName("tr");r[0]&&0===r[0].getElementsByTagName("th").length&&(t+=5,e.id&&n.push(e.id))}),{id:"table",title:"Use caption and th in tables",description:"Add a caption element to give the table a proper heading or summary. Use th elements to denote column and row headings. Make use of their scope and other attributes to clearly associate what belongs to which. https://www.marcozehe.de/2015/12/14/the-web-accessibility-basics/",advice:t>0?"The page has tables that are missing caption, please use them to give them a proper heading or summary.":"",score:Math.max(0,100-t),weight:5,offending:n,tags:["accessibility","html"]}}()}catch(a){i.table=a.message}t.accessibility={adviceList:r},Object.keys(i).length>0&&(n.accessibility=i);var o={},s={};try{o.charset=function(){"use strict";var e=100,t="",n=document.characterSet;return null===n?(t="The page is missing a character set. If you use Chrome/Firefox we know you are missing it, if you use another browser, it well could be an implementation problem.",e=0):"UTF-8"!==n&&(t="You are not using charset UTF-8?",e=50),{id:"charset",title:"Declare a charset in your document",description:"The Unicode Standard (UTF-8) covers (almost) all the characters, punctuations, and symbols in the world. Please use that.",advice:t,score:e,weight:2,offending:[],tags:["bestpractice"]}}()}catch(a){s.charset=a.message}try{o.doctype=function(){"use strict";var e=100,t="",n=document.doctype;return null===n?(t="The page is missing a doc type. Please use <!DOCTYPE html>",e=0):10!==document.firstChild.nodeType&&(t="The page should have the the doctype declaration first in the HTML file and it should be declared using HTML5 standard: <!DOCTYPE html>",e=50),{id:"doctype",title:"Declare a doctype in your document",description:"The <!DOCTYPE> declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.",advice:t,score:e,weight:2,offending:[],tags:["bestpractice"]}}()}catch(a){s.doctype=a.message}try{o.https=function(){"use strict";var e=document.URL,t=100,n="";return-1===e.indexOf("https://")&&(t=0,n="What!! The page is not using HTTPS. Every unencrypted HTTP request reveals information about user’s behavior, read more about it at https://https.cio.gov/everything/. You can get a totally free SSL/TLS certificate from https://letsencrypt.org/."),{id:"https",title:"Serve your content securely",description:"A page should always use HTTPS ( https://https.cio.gov/everything/). Plus you will need it for HTTP/2!",advice:n,score:t,weight:10,offending:[],tags:["bestpractice"]}}()}catch(a){s.https=a.message}try{o.httpsH2=function(){"use strict";var t=document.URL,n=e.getConnectionType(),r=100,i="";return t.indexOf("https://")>-1&&-1===n.indexOf("h2")&&(r=0,i="The page is using HTTPS but not HTTP/2. Change to HTTP/2 to follow new best practice and make the site faster."),{id:"httpsH2",title:"Serve your content using HTTP/2",description:"Using HTTP/2 together with HTTPS is the new best practice.",advice:i,score:r,weight:2,offending:[],tags:["bestpractice"]}}()}catch(a){s.httpsH2=a.message}try{o.language=function(){"use strict";var e=document.getElementsByTagName("html");if(e.length>0){var t=e[0].getAttribute("lang"),n=100,r="";null===t&&(n=0,r='The page is missing a language definition in the HTML tag. Define it <html lang="YOUR_LANGUAGE_CODE"> ')}else n=0,r="What! The page is missing the HTML tag!";return{id:"language",title:"Declare the language code for your document",description:"According to the W3C recommendation you should declare the primary language for each Web page with the lang attribute inside the <html> tag. https://www.w3.org/International/questions/qa-html-language-declarations#basics",advice:r,score:n,weight:3,offending:[],tags:["bestpractice"]}}()}catch(a){s.language=a.message}try{o.metaDescription=function(e){"use strict";var t=155,n=100,r="",i=Array.prototype.slice.call(document.querySelectorAll("meta[name][content]"));i=i.filter(e.caseInsensitiveAttributeValueFilter("name","description"));var a=i.length>0?i[0].getAttribute("content"):"";return 0===a.length?(r="The page is missing a meta description.",n=0):a.length>t&&(r="The meta description is too long. It has "+a.length+" characters, the recommended max is "+t,n=50),{id:"metaDescription",title:"Meta description",description:"Use a page description to make the page more relevant to search engines",advice:r,score:n,weight:5,offending:[],tags:["bestpractice"]}}(e)}catch(a){s.metaDescription=a.message}try{o.optimizely=function(e){"use strict";var t=100,n=e.getSynchJSFiles(document.head),r="",i=[];return n.forEach(function(n){"cdn.optimizely.com"===e.getHostname(n)&&(i.push(n),t=0,r="The page is using Optimizely. Use it with care because it hurts your performance. Only turn it on (= load the JavaScript) when you run your A/B tests. Then when you are finished make sure to turn it off.")}),{id:"optimizely",title:"Only use Optimizely when you need it",description:"Use Optimizely with care because it hurts your performance. Only turn it on (= load the javascript) when you run your A/B tests",advice:r,score:t,weight:2,offending:i,tags:["bestpractice"]}}(e)}catch(a){s.optimizely=a.message}try{o.pageTitle=function(){"use strict";var e=60,t=100,n="",r=document.title;return 0===r.length?(n="The page is missing a title.",t=0):r.length>e&&(n="The title is too long by "+(r.length-e)+" characters. The recommended max is "+e,t=50),{id:"pageTitle",title:"Page title",description:"Use a title to make the page more relevant to search engines.",advice:n,score:t,weight:5,offending:[],tags:["bestpractice"]}}()}catch(a){s.pageTitle=a.message}try{o.spdy=function(){"use strict";var t=e.getConnectionType(),n=100,r="";return-1!==t.indexOf("spdy")&&(n=0,r="The page is using SPDY. Chrome dropped support for SPDY in Chrome 51. Change to HTTP/2 asap."),{id:"spdy",title:"EOL for SPDY in Chrome",description:"Chrome dropped supports for SPDY in Chrome 51, upgrade to H2 as soon as possible.",advice:r,score:n,weight:1,offending:[],tags:["bestpractice"]}}()}catch(a){s.spdy=a.message}try{o.url=function(){"use strict";var e=100,t="",n=document.URL;n.indexOf("?")>-1&&n.indexOf("jsessionid")>n.indexOf("?")&&(e=0,t="The page has the session id for the user as a parameter, please change so the session handling is done only with cookies. ");var r=(n.match(/&/g)||[]).length;return r>1&&(e-=50,t+="The page is using more than two request parameters. You should really rethink and try to minimize the number of parameters. "),n.length>100&&(e-=10,t+="The URL is "+n.length+" characters long. Try to make it less than 100 characters. "),(n.indexOf(" ")>-1||n.indexOf("%20")>-1)&&(e-=10,t+="Could the developer or the CMS be on Windows? Avoid using spaces in the URLs, use hyphens or underscores. "),{id:"url",title:"Have a good URL format",description:"A clean URL is good for the user and for SEO. Make them human readable, avoid too long URLs, spaces in the URL, too many request parameters, and never ever have the session id in your URL.",advice:t,score:0>e?0:e,weight:2,offending:[],tags:["bestpractice"]}}()}catch(a){s.url=a.message}t.bestpractice={adviceList:o},Object.keys(s).length>0&&(n.bestpractice=s);var c={},u={};try{c.amp=function(){"use strict";var e=document.getElementsByTagName("html")[0];return e&&e.getAttribute("amp-version")?e.getAttribute("amp-version"):!1}()}catch(a){u.amp=a.message}try{c.browser=function(){"use strict";var e="unknown",t=window.navigator.userAgent.match(/(Chrome|Firefox)\/(\S+)/);return e=t?t[1]+" "+t[2]:e,e}()}catch(a){u.browser=a.message}try{c.connectionType=function(e){"use strict";return e.getConnectionType()}(e)}catch(a){u.connectionType=a.message}try{c.documentHeight=function(){"use strict";return Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)}()}catch(a){u.documentHeight=a.message}try{c.documentTitle=function(){"use strict";return document.title}()}catch(a){u.documentTitle=a.message}try{c.documentWidth=function(){"use strict";return Math.max(document.body.scrollWidth,document.body.offsetWidth,document.documentElement.clientWidth,document.documentElement.scrollWidth,document.documentElement.offsetWidth)}()}catch(a){u.documentWidth=a.message}try{c.domDepth=function(){"use strict";function e(e){for(var n=e.getElementsByTagName("*"),r=n.length,i=0,a=0;r--;){var o=t(n[r]);o>a&&(a=o),i+=o}var s=i/n.length;return{avg:s,max:a}}function t(e){var t=0;if(e.parentNode)for(;e=e.parentNode;)t++;return t}var n=e(document);return{avg:Math.round(n.avg),max:n.max}}()}catch(a){u.domDepth=a.message}try{c.domElements=function(){"use strict";return document.getElementsByTagName("*").length}()}catch(a){u.domElements=a.message}try{c.head=function(e){"use strict";return{jssync:e.getSynchJSFiles(document.head),jsasync:e.getAsynchJSFiles(document.head),css:e.getCSSFiles(document.head)}}(e)}catch(a){u.head=a.message}try{c.iframes=function(){"use strict";return document.getElementsByTagName("iframe").length}()}catch(a){u.iframes=a.message}try{c.localStorageSize=function(){"use strict";function e(e){if(e){for(var t=e.length||Object.keys(e).length,n=0,r=0;t>r;r++){var i=e.key(r),a=e.getItem(i);n+=i.length+a.length}return n}return 0}return e(window.localStorage)}()}catch(a){u.localStorageSize=a.message}try{c.resourceHints=function(e){"use strict";return{"dns-prefetch":e.getResourceHintsHrefs("dns-prefetch"),preconnect:e.getResourceHintsHrefs("preconnect"),prefetch:e.getResourceHintsHrefs("prefetch"),prerender:e.getResourceHintsHrefs("prerender")}}(e)}catch(a){u.resourceHints=a.message}try{c.responsive=function(){"use strict";var e=!0,t=document.body.scrollWidth,n=window.innerWidth;t>n&&(e=!1);var r=document.body.children;for(var i in r)r[i].scrollWidth>n&&(e=!1);return e}()}catch(a){u.responsive=a.message}try{c.sessionStorageSize=function(){"use strict";function e(e){for(var t=e.length||Object.keys(e).length,n=0,r=0;t>r;r++){var i=e.key(r),a=e.getItem(i);n+=i.length+a.length}return n}return e(window.sessionStorage)}()}catch(a){u.sessionStorageSize=a.message}try{c.windowSize=function(){"use strict";var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return e+"x"+t}()}catch(a){u.windowSize=a.message}t.info=c,Object.keys(u).length>0&&(n.info=u);var h={},d={};try{h.avoidScalingImages=function(e){"use strict";for(var t="",n=100,r=0,i=[],a=Array.prototype.slice.call(document.getElementsByTagName("img")),o=0;o<a.length;o++){var s=a[o];s.clientWidth+n<s.naturalWidth&&s.clientWidth>0&&(i.push(e.getAbsoluteURL(s.currentSrc)),r+=10)}return r>0&&(t="The page has "+r/10+" image(s) that are scaled more than "+n+" pixels. It would be better if those images are sent so the browser don't need to scale them."),{id:"avoidScalingImages",title:"Don't scale images in the browser",description:"Scaling images inside the browser takes extra CPU time and will hurt performance on mobile as well as make your users download extra kilobytes",advice:t,score:Math.max(0,100-r),weight:5,offending:i,tags:["performance","image"]}}(e)}catch(a){d.avoidScalingImages=a.message}try{h.cssPrint=function(e){"use strict";for(var t=[],n=document.getElementsByTagName("link"),r=0,i=n.length;i>r;r+=1)"print"===n[r].media&&t.push(e.getAbsoluteURL(n[r].href));var a=10*t.length;return{id:"cssPrint",title:"Do not load print stylesheets, use @media type print instead",description:"Loading a specific stylesheet for printing slows down the page, even though it is not used",advice:t.length>0?"The page has "+t.length+" print stylesheets. You should include that stylesheet using @media type print instead.":"",score:Math.max(0,100-a),weight:1,offending:t,tags:["performance","css"]}}(e)}catch(a){d.cssPrint=a.message}try{h.fastRender=function(e){"use strict";function t(t){var n=e.getHostname(t);n!==s?(i.push(t),e.exists(n,c)||(r+=e.exists(n,l)?5:10,c.push(n)),r+=5):(i.push(t),r+=5)}var n="",r=0,i=[],a=e.getCSSFiles(document.head),o=e.getSynchJSFiles(document.head),s=document.domain,c=[],u=0,h=0,d=e.getResourceHintsHrefs("preconnect"),l=d.map(function(t){return e.getHostname(t)});return e.isHTTP2()?(a.length>0&&(n="Make sure that the server pushes your CSS resources for faster rendering. ",a.forEach(function(t){e.getTransferSize(t)>14500&&(i.push(t),r+=5,u++,n+="The style "+t+" is larger than the magic number TCP window size 14.5 kB. Make the file smaller and the page will render faster. ")})),o.length>0&&(r+=10*o.length,o.forEach(function(e){i.push(e),h++}),n+="Avoid loading synchronously JavaScript inside of head, you shouldn't need JavaScript to render your page!")):(a.forEach(function(e){t(e)}),u=a.length,o.forEach(function(e){t(e)}),h=o.length),i.length>0&&(n+="The page has "+u+" render blocking CSS request(s) and "+h+" blocking JavaScript request(s) inside of head."),{id:"fastRender",title:"Avoid slowing down the rendering critical path",description:"Every file requested inside of head will postpone the rendering of the page. Try to avoid loading JavaScript synchronously, request files from the same domain as the main document, and inline CSS or server push for really fast rendering.",advice:n,score:Math.max(0,100-r),weight:10,offending:i,tags:["performance"]}}(e)}catch(a){d.fastRender=a.message}try{h.inlineCss=function(){"use strict";var t="",n=0,r=[],i=e.getCSSFiles(document.head),a=Array.prototype.slice.call(window.document.head.getElementsByTagName("style"));return e.isHTTP2()&&i.length>0&&a.length>0?(n+=5,t="The page has both inline CSS and CSS requests even though it uses a HTTP/2ish connection. Make sure you are using server push for your CSS files (when your server supports push). If you have many users on slow connections, it can be better to only inline the CSS. Run your own tests and check the waterfall graph to see what happens."):e.isHTTP2()&&a.length>0&&0===i.length?t+="The page has inline CSS and uses HTTP/2. Do you have a lot of users with slow connections on the site, it is good to inline CSS when using HTTP/2. If not and your server supports server push, use it to push the CSS files instead.":e.isHTTP2()&&i.length>0&&(t+="Make sure you push the CSS requests inside of HEAD (if your server supports push). Else it's better to inline the CSS."),e.isHTTP2()||(i.length>0&&0===a.length&&(n+=10*i.length,t="The page loads "+i.length+" CSS request(s) inside of head, try to inline the CSS for first render and lazy load the rest. ",r.push.apply(r,i)),a.length>0&&i.length>0&&(n+=10,t+="The page has both inline styles as well as it is requesting "+i.length+" CSS file(s) inside of head. Let's only inline CSS for really fast render.",r.push.apply(r,i))),{id:"inlineCss",title:"Inline CSS for faster first render on HTTP/1",description:"Always inline the CSS when you use HTTP/1. Using HTTP/2 it is complicated. Do your users have a slow connection? Then its better to inline.",advice:t,score:Math.max(0,100-n),weight:7,offending:r,tags:["performance","css"]}}()}catch(a){d.inlineCss=a.message}try{h.jquery=function(){"use strict";var e=[];if("function"==typeof window.jQuery){e.push(window.jQuery.fn.jquery);for(var t=window.jQuery;t.fn&&t.fn.jquery&&(t=window.jQuery.noConflict(!0),window.jQuery&&window.jQuery.fn)&&t.fn.jquery!==window.jQuery.fn.jquery;)e.push(window.jQuery.fn.jquery)}return{id:"jquery",title:"Avoid using more than one jQuery version per page",description:"You may not think this is true, but there are pages that use more than one jQuery version.",advice:e.length>1?"The page uses "+e.length+" versions of jQuery! You only need one version, please remove the unnecessary version(s).":"",score:e.length>1?0:100,weight:4,offending:e,tags:["jQuery","performance"]}}()}catch(a){d.jquery=a.message}try{h.spof=function(e){"use strict";var t=0,n=[],r=[],i=document.domain,a=e.getCSSFiles(document.head);a.forEach(function(a){var o=e.getHostname(a);o!==i&&(n.push(a),-1===r.indexOf(o)&&(r.push(o),t+=10))});var o=e.getSynchJSFiles(document.head);return o.forEach(function(a){var o=e.getHostname(a);o!==i&&(n.push(a),-1===r.indexOf(o)&&(r.push(o),t+=10))}),{id:"spof",title:"Avoid Frontend single point of failures",description:"A page should not have a single point of failure. For example; loading content from a provider that can cause the page to stop working.",advice:n.length>0?"The page has "+n.length+" requests inside of head that can cause a SPOF. Load them asynchronously or move them outside of document head.":"",score:Math.max(0,100-t),weight:7,offending:n,tags:["performance","css","js"]}}(e)}catch(a){d.spof=a.message}try{h.thirdPartyAsyncJs=function(e){"use strict";function t(t){for(var r,i=e.getHostname(t),a=0;a<n.length;a++)if(r=new RegExp(n[a]),r.test(i))return!0;return!1}for(var n=["ajax.googleapis.com","apis.google.com",".google-analytics.com","connect.facebook.net","platform.twitter.com","code.jquery.com","platform.linkedin.com",".disqus.com","assets.pinterest.com","widgets.digg.com",".addthis.com","code.jquery.com","ad.doubleclick.net",".lognormal.com","embed.spotify.com"],r=0,i=[],a=e.getSynchJSFiles(document),o=0,s=a.length;s>o;o++)t(a[o])&&(i.push(a[o]),r+=10);return{id:"thirdPartyAsyncJs",title:"Always load third-party JavaScript asynchronously",description:"Use JavaScript snippets that load the JS files asynchronously in order to speed up the user experience and avoid blocking the initial load.",advice:i.length>0?"The page has "+i.length+" synchronous 3rd party JavaScript request(s). Change it to be asynchronous instead.":"",score:Math.max(0,100-r),weight:5,offending:i,tags:["performance","js"]}}(e)}catch(a){d.thirdPartyAsyncJs=a.message}try{h.userTiming=function(){"use strict";var e=!1,t="Start using the User Timing API to measure specifics metrics for your page.";return window.performance&&window.performance.getEntriesByType?(window.performance.getEntriesByType("measure").length>0||window.performance.getEntriesByType("mark").length>0)&&(e=!0,t=""):t="NOTE: User timing is not supported in this browser.",{id:"userTiming",title:"Use the User Timing API to check your performance",description:"The User Timing API is a perfect way to start measuring specific and custom metrics for your site.",advice:t,score:e?100:0,weight:1,offending:[],tags:["performance"]}}()}catch(a){d.userTiming=a.message}t.performance={adviceList:h},Object.keys(d).length>0&&(n.performance=d);var l={},g={};try{l.firstPaint=function(){var e,t=window.performance.timing;if(window.chrome&&window.chrome.loadTimes){var n=window.chrome.loadTimes();if(e=1e3*(n.firstPaintTime-n.requestTime),e>0)return e}else if("number"==typeof t.msFirstPaint&&(e=t.msFirstPaint-t.navigationStart,e>0))return e}()}catch(a){g.firstPaint=a.message}try{l.fullyLoaded=function(){if(window.performance&&window.performance.getEntriesByType){for(var e=window.performance.getEntriesByType("resource"),t=0,n=1;n<e.length;n++)e[n].responseEnd>t&&(t=e[n].responseEnd);return t}return-1}()}catch(a){g.fullyLoaded=a.message}try{l.navigationTimings=function(){var e=window.performance.timing,t={navigationStart:0,unloadEventStart:e.unloadEventStart>0?e.unloadEventStart-e.navigationStart:void 0,unloadEventEnd:e.unloadEventEnd>0?e.unloadEventEnd-e.navigationStart:void 0,redirectStart:e.redirectStart>0?e.redirectStart-e.navigationStart:void 0,redirectEnd:e.redirectEnd>0?e.redirectEnd-e.navigationStart:void 0,fetchStart:e.fetchStart-e.navigationStart,domainLookupStart:e.domainLookupStart-e.navigationStart,domainLookupEnd:e.domainLookupEnd-e.navigationStart,connectStart:e.connectStart-e.navigationStart,connectEnd:e.connectEnd-e.navigationStart,secureConnectionStart:e.secureConnectionStart?e.secureConnectionStart-e.navigationStart:void 0,requestStart:e.requestStart-e.navigationStart,responseStart:e.responseStart-e.navigationStart,responseEnd:e.responseEnd-e.navigationStart,domLoading:e.domLoading-e.navigationStart,domInteractive:e.domInteractive-e.navigationStart,domContentLoadedEventStart:e.domContentLoadedEventStart-e.navigationStart,domContentLoadedEventEnd:e.domContentLoadedEventEnd-e.navigationStart,domComplete:e.domComplete-e.navigationStart,loadEventStart:e.loadEventStart-e.navigationStart,loadEventEnd:e.loadEventEnd-e.navigationStart};return Object.keys(t).forEach(function(e){void 0===t[e]&&delete t[e]}),t}()}catch(a){g.navigationTimings=a.message}try{l.rumSpeedIndex=function(){var e=function(t){t=t||window;var n,r,i=t.document,a=function(e){var n=!1;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();n={top:Math.max(r.top,0),left:Math.max(r.left,0),bottom:Math.min(r.bottom,t.innerHeight||i.documentElement.clientHeight),right:Math.min(r.right,t.innerWidth||i.documentElement.clientWidth)},n.bottom<=n.top||n.right<=n.left?n=!1:n.area=(n.bottom-n.top)*(n.right-n.left)}return n},o=function(e,t){if(t){var n=a(e);n&&l.push({url:t,area:n.area,rect:n})}},s=function(){for(var n=i.getElementsByTagName("*"),r=/url\((http.*)\)/gi,s=0;s<n.length;s++){var c=n[s],u=t.getComputedStyle(c);if("IMG"==c.tagName&&o(c,c.src),u["background-image"]){r.lastIndex=0;var h=r.exec(u["background-image"]);h&&h.length>1&&o(c,h[1])}if("IFRAME"==c.tagName)try{var d=a(c);if(d){var g=e(c.contentWindow);g&&l.push({tm:g,area:d.area,rect:d})}}catch(m){}}},c=function(){for(var e={},n=t.performance.getEntriesByType("resource"),r=0;r<n.length;r++)e[n[r].name]=n[r].responseEnd;for(var i=0;i<l.length;i++)"tm"in l[i]||(l[i].tm=void 0!==e[l[i].url]?e[l[i].url]:0)},u=function(){if("msFirstPaint"in t.performance.timing&&(n=t.performance.timing.msFirstPaint-p),"chrome"in t&&"loadTimes"in t.chrome){var e=t.chrome.loadTimes();if("firstPaintTime"in e&&e.firstPaintTime>0){var r=e.startLoadTime;"requestTime"in e&&(r=e.requestTime),e.firstPaintTime>=r&&(n=1e3*(e.firstPaintTime-r))}}if(void 0===n||0>n||n>12e4){n=t.performance.timing.responseStart-p;for(var a={},o=i.getElementsByTagName("head")[0].children,s=0;s<o.length;s++){var c=o[s];"SCRIPT"==c.tagName&&c.src&&!c.async&&(a[c.src]=!0),"LINK"==c.tagName&&"stylesheet"==c.rel&&c.href&&(a[c.href]=!0)}for(var u=t.performance.getEntriesByType("resource"),h=!1,d=0;d<u.length;d++)if(h||!a[u[d].name]||"script"!=u[d].initiatorType&&"link"!=u[d].initiatorType)h=!0;else{var l=u[d].responseEnd;(void 0===n||l>n)&&(n=l)}}n=Math.max(n,0)},h=function(){for(var e={0:0},r=0,a=0;a<l.length;a++){var o=n;"tm"in l[a]&&l[a].tm>n&&(o=l[a].tm),void 0===e[o]&&(e[o]=0),e[o]+=l[a].area,r+=l[a].area}var s=Math.max(i.documentElement.clientWidth,t.innerWidth||0)*Math.max(i.documentElement.clientHeight,t.innerHeight||0);if(s>0&&(s=Math.max(s-r,0)*m,void 0===e[n]&&(e[n]=0),e[n]+=s,r+=s),r){for(var c in e)e.hasOwnProperty(c)&&g.push({tm:c,area:e[c]});g.sort(function(e,t){return e.tm-t.tm});for(var u=0,h=0;h<g.length;h++)u+=g[h].area,g[h].progress=u/r}},d=function(){if(g.length){r=0;for(var e=0,t=0,i=0;i<g.length;i++){var a=g[i].tm-e;a>0&&1>t&&(r+=(1-t)*a),e=g[i].tm,t=g[i].progress}}else r=n},l=[],g=[],m=.1;try{var p=t.performance.timing.navigationStart;s(),c(),u(),h(),d()}catch(f){}return r};return e()||-1}()}catch(a){g.rumSpeedIndex=a.message}try{l.timings=function(){var e=window.performance.timing;return{domainLookupTime:e.domainLookupEnd-e.domainLookupStart,redirectionTime:e.fetchStart-e.navigationStart,serverConnectionTime:e.connectEnd-e.connectStart,serverResponseTime:e.responseEnd-e.requestStart,pageDownloadTime:e.responseEnd-e.responseStart,domInteractiveTime:e.domInteractive-e.navigationStart,domContentLoadedTime:e.domContentLoadedEventStart-e.navigationStart,pageLoadTime:e.loadEventStart-e.navigationStart,frontEndTime:e.loadEventStart-e.responseEnd,backEndTime:e.responseStart-e.navigationStart}}()}catch(a){g.timings=a.message}try{l.userTimings=function(){var e=[],t=[];if(window.performance&&window.performance.getEntriesByType){var n=Array.prototype.slice.call(window.performance.getEntriesByType("mark"));n.forEach(function(e){t.push({name:e.name,startTime:e.startTime})});var r=Array.prototype.slice.call(window.performance.getEntriesByType("measure"));
  r.forEach(function(t){e.push({name:t.name,duration:t.duration,startTime:t.startTime})})}return{marks:t,measures:e}}()}catch(a){g.userTimings=a.message}return t.timings=l,Object.keys(g).length>0&&(n.timings=g),"use strict",function(e){var t=0,n=0;Object.keys(e).forEach(function(r){var i=0,a=0,o=e[r].adviceList;o&&Object.keys(o).forEach(function(e){var r=o[e];t+=r.score*r.weight,i+=r.score*r.weight,n+=r.weight,a+=r.weight}),a>0&&(e[r].score=Math.round(i/a))}),e.score=Math.round(t/n)}(t),{advice:t,errors:n,url:document.URL,version:"0.23.0"}}(e)}console.error("Missing window or window document")})();

  return result
};

module.exports = init