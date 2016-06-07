"use strict";function Console(){}function outputResults(e){Console.log(e);var t=document.getElementsByClassName("js-results")[0],n=document.getElementsByClassName("js-score")[0];t.innerHTML="",n.innerHTML="";var o=document.createDocumentFragment(),a=document.createDocumentFragment(),c=document.createDocumentFragment(),s=document.createTextNode("Overall: "+e.advice.score+"/100");c.appendChild(s),n.appendChild(c),colourScore(n,e.advice.score),delete e.advice.score;var d=Object.keys(e.advice).sort();d.forEach(function(t){var n,c,s;if(e.advice[t].adviceList)n=document.createElement("h2"),n.appendChild(document.createTextNode(t+" ("+e.advice[t].score+"/100)")),colourScore(n,e.advice[t].score),n.classList.add("js-toggle","toggle"),o.appendChild(n),s=document.createElement("div"),s.classList.add("advice-section"),s.style.display="none",c=Object.keys(e.advice[t].adviceList).sort(),c.forEach(function(n){var o=e.advice[t].adviceList[n],a=document.createElement("h3");a.appendChild(document.createTextNode(o.title+" ("+o.score+"/100)")),colourScore(a,o.score),a.classList.add("js-toggle","toggle"),s.appendChild(a);var c=document.createElement("div");c.classList.add("advice-section","advice-sub-section"),c.style.display="none";var d=document.createElement("p");d.appendChild(document.createTextNode(o.advice)),c.appendChild(d);var i=document.createElement("p");if(i.appendChild(document.createTextNode(o.description)),c.appendChild(i),o.offending.length>0){var r=document.createElement("h4");r.appendChild(document.createTextNode("Offending Areas")),c.appendChild(r);var l=document.createElement("pre"),u=o.offending.join("\n");l.appendChild(document.createTextNode(u)),c.appendChild(l)}s.appendChild(c)}),o.appendChild(s);else{if(n=document.createElement("h2"),n.appendChild(document.createTextNode(t.toString())),n.classList.add("js-toggle","toggle"),a.appendChild(n),s=document.createElement("div"),s.classList.add("advice-section"),s.style.display="none","object"===_typeof(e.advice[t])){var d=document.createElement("pre");c=Object.keys(e.advice[t]).sort();var i=[];c.forEach(function(n){var o=e.advice[t][n];"object"===_typeof(e.advice[t][n])?(c=Object.keys(e.advice[t][n]).sort(),c.forEach(function(o){var a=e.advice[t][n][o];i.push(n+": "+a+"\n")})):i.push(n+": "+o+"\n")});var r=i.join("\n");d.appendChild(document.createTextNode(r)),s.appendChild(d)}else{var l=e.advice[t],u=document.createElement("h3");u.appendChild(document.createTextNode(t+": "+l)),s.appendChild(u)}a.appendChild(s)}}),o.appendChild(a),t.appendChild(o),unicornify();for(var i=document.getElementsByClassName("js-toggle"),r=0;r<i.length;r++)i[r].addEventListener("click",function(e){var t=closest(e.target,"js-toggle");t.classList.toggle("is-visible"),t.classList.contains("is-visible")?t.nextElementSibling.style.display="":t.nextElementSibling.style.display="none"},!0)}function colourScore(e,t){100===t?e.classList.add("is-amazing","is-unicorn"):t>75?e.classList.add("is-good"):t>50?e.classList.add("is-ok"):e.classList.add("is-bad")}function unicornify(){function e(t){t.forEach(function(e){var t=+e.getAttribute("style").split(",")[0].split("(")[1]-o%360;e.setAttribute("style","color:hsla("+t+", 100%, 50%, 1)")}),n=window.requestAnimationFrame(function(){e(t)})}function t(){window.cancelAnimationFrame(n)}for(var n,o=4,a=document.getElementsByClassName("is-unicorn"),c=0;c<a.length;c++){for(var s=a[c],d=s.innerHTML,i=d.length,r=360/i,l="",u=0;i>u;u++)l+="<span style='color:hsla("+u*r+", 100%, 50%, 1)'>"+d.charAt(u)+"</span>";s.innerHTML=l,s.addEventListener("mouseover",function(t){var n=t.target.parentNode.querySelectorAll("span");e(n)},!1),s.addEventListener("mouseout",function(e){t()},!1)}}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};Console.Type={LOG:"log",DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error",GROUP:"group",GROUP_COLLAPSED:"groupCollapsed",GROUP_END:"groupEnd"},Console.addMessage=function(e,t,n){chrome.runtime.sendMessage({command:"sendToConsole",tabId:chrome.devtools.tabId,args:escape(JSON.stringify(Array.prototype.slice.call(arguments,0)))})},function(){for(var e=Object.getOwnPropertyNames(Console.Type),t=0;t<e.length;++t){var n=Console.Type[e[t]];Console[n]=Console.addMessage.bind(Console,n)}}(),document.getElementsByClassName("js-analyse")[0].addEventListener("click",function(e){chrome.runtime.sendMessage({command:"init",tabId:chrome.devtools.tabId},function(t){e.target.innerText="Re-Analyse",outputResults(t)})},!1);var closest=function(e,t){for(Console.log(e.className,t);!e.classList.contains(t);)if(e=e.parentNode,!e)return null;return e};