var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var n={};!function(t,o){n=o()}(n,(function(){var n="undefined"!=typeof window?window:"undefined"!=typeof t?t:"undefined"!=typeof self?self:{},o="Expected a function",i=NaN,a="[object Symbol]",r=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,d=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,j=l||f||Function("return this")(),E=Object.prototype.toString,N=Math.max,z=Math.min,b=function(){return j.Date.now()};function v(n,i,a){var r,s,c,u,d,l,f=0,j=!1,E=!1,C=!0;if("function"!=typeof n)throw new TypeError(o);function y(t){var o=r,i=s;return r=s=void 0,f=t,u=n.apply(i,o)}function h(t){var n=t-l;return void 0===l||n>=i||n<0||E&&t-f>=c}function k(){var t=b();if(h(t))return x(t);d=setTimeout(k,function(t){var n=i-(t-l);return E?z(n,c-(t-f)):n}(t))}function x(t){return d=void 0,C&&r?y(t):(r=s=void 0,u)}function O(){var n=b(),o=h(n);if(r=arguments,s=this||t,l=n,o){if(void 0===d)return function(t){return f=t,d=setTimeout(k,i),j?y(t):u}(l);if(E)return d=setTimeout(k,i),y(l)}return void 0===d&&(d=setTimeout(k,i)),u}return i=w(i)||0,g(a)&&(j=!!a.leading,c=(E="maxWait"in a)?N(w(a.maxWait)||0,i):c,C="trailing"in a?!!a.trailing:C),O.cancel=function(){void 0!==d&&clearTimeout(d),f=0,r=l=s=d=void 0},O.flush=function(){return void 0===d?u:x(b())},O}function g(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&E.call(t)==a}(t))return i;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=c.test(t);return o||u.test(t)?d(t.slice(2),o?2:8):s.test(t)?i:+t}var y=function(t,n,i){var a=!0,r=!0;if("function"!=typeof t)throw new TypeError(o);return g(i)&&(a="leading"in i?!!i.leading:a,r="trailing"in i?!!i.trailing:r),v(t,n,{leading:a,maxWait:n,trailing:r})},C="Expected a function",T=NaN,q="[object Symbol]",A=/^\s+|\s+$/g,L=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,_=/^0o[0-7]+$/i,F=parseInt,I="object"==typeof n&&n&&n.Object===Object&&n,K="object"==typeof self&&self&&self.Object===Object&&self,G=I||K||Function("return this")(),J=Object.prototype.toString,Q=Math.max,U=Math.min,S=function(){return G.Date.now()};function D(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function H(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&J.call(t)==q}(t))return T;if(D(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=D(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(A,"");var o=M.test(t);return o||_.test(t)?F(t.slice(2),o?2:8):L.test(t)?T:+t}var $=function(n,o,i){var a,r,s,c,u,d,l=0,f=!1,j=!1,E=!0;if("function"!=typeof n)throw new TypeError(C);function m(t){var o=a,i=r;return a=r=void 0,l=t,c=n.apply(i,o)}function p(t){var n=t-d;return void 0===d||n>=o||n<0||j&&t-l>=s}function b(){var t=S();if(p(t))return v(t);u=setTimeout(b,function(t){var n=o-(t-d);return j?U(n,s-(t-l)):n}(t))}function v(t){return u=void 0,E&&a?m(t):(a=r=void 0,c)}function g(){var n=S(),i=p(n);if(a=arguments,r=this||t,d=n,i){if(void 0===u)return function(t){return l=t,u=setTimeout(b,o),f?m(t):c}(d);if(j)return u=setTimeout(b,o),m(d)}return void 0===u&&(u=setTimeout(b,o)),c}return o=H(o)||0,D(i)&&(f=!!i.leading,s=(j="maxWait"in i)?Q(H(i.maxWait)||0,o):s,E="trailing"in i?!!i.trailing:E),g.cancel=function(){void 0!==u&&clearTimeout(u),l=0,a=d=r=u=void 0},g.flush=function(){return void 0===u?c:v(S())},g},W=function(){};function P(t){t&&t.forEach((function(t){var n=Array.prototype.slice.call(t.addedNodes),o=Array.prototype.slice.call(t.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(n.concat(o)))return W()}))}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var oe={isSupported:function(){return!!Y()},ready:function(t,n){var o=window.document,i=new(Y())(P);W=n,i.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},ie=function(){function e(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),ae=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},le=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,fe=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,me=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,pe=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var be=new(function(){function e(){B(this||t,e)}return ie(e,[{key:"phone",value:function(){var t=R();return!(!le.test(t)&&!fe.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=R();return!(!me.test(t)&&!pe.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(t,n){var o=void 0;return be.ie11()?(o=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,{detail:n}):o=new CustomEvent(t,{detail:n}),document.dispatchEvent(o)},X=function(t){return t.forEach((function(t,n){return function(t,n){var o=t.options,i=t.position,a=t.node,r=(t.data,function(){t.animated&&(function(t,n){n&&n.forEach((function(n){return t.classList.remove(n)}))}(a,o.animatedClassNames),V("aos:out",a),t.options.id&&V("aos:in:"+t.options.id,a),t.animated=!1)});o.mirror&&n>=i.out&&!o.once?r():n>=i.in?t.animated||(function(t,n){n&&n.forEach((function(n){return t.classList.add(n)}))}(a,o.animatedClassNames),V("aos:in",a),t.options.id&&V("aos:in:"+t.options.id,a),t.animated=!0):t.animated&&!o.once&&r()}(t,window.pageYOffset)}))},Z=function(t){for(var n=0,o=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)n+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),o+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:o,left:n}},ee=function(t,n,o){var i=t.getAttribute("data-aos-"+n);if(void 0!==i){if("true"===i)return!0;if("false"===i)return!1}return i||o},te=function(t,n){return t.forEach((function(t,o){var i=ee(t.node,"mirror",n.mirror),a=ee(t.node,"once",n.once),r=ee(t.node,"id"),s=n.useClassNames&&t.node.getAttribute("data-aos"),c=[n.animatedClassName].concat(s?s.split(" "):[]).filter((function(t){return"string"==typeof t}));n.initClassName&&t.node.classList.add(n.initClassName),t.position={in:function(t,n,o){var i=window.innerHeight,a=ee(t,"anchor"),r=ee(t,"anchor-placement"),s=Number(ee(t,"offset",r?0:n)),c=r||o,u=t;a&&document.querySelectorAll(a)&&(u=document.querySelectorAll(a)[0]);var d=Z(u).top-i;switch(c){case"top-bottom":break;case"center-bottom":d+=u.offsetHeight/2;break;case"bottom-bottom":d+=u.offsetHeight;break;case"top-center":d+=i/2;break;case"center-center":d+=i/2+u.offsetHeight/2;break;case"bottom-center":d+=i/2+u.offsetHeight;break;case"top-top":d+=i;break;case"bottom-top":d+=i+u.offsetHeight;break;case"center-top":d+=i+u.offsetHeight/2}return d+s}(t.node,n.offset,n.anchorPlacement),out:i&&function(t,n){window.innerHeight;var o=ee(t,"anchor"),i=ee(t,"offset",n),a=t;return o&&document.querySelectorAll(o)&&(a=document.querySelectorAll(o)[0]),Z(a).top+a.offsetHeight-i}(t.node,n.offset)},t.options={once:a,mirror:i,animatedClassNames:c,id:r}})),t},ne=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,(function(t){return{node:t}}))},ve=[],ge=!1,we={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ge=!0),ge&&(ve=te(ve,we),X(ve),window.addEventListener("scroll",y((function(){X(ve,we.once)}),we.throttleDelay)))},se=function(){if(ve=ne(),de(we.disable)||re())return ue();ce()},ue=function(){ve.forEach((function(t,n){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay"),we.initClassName&&t.node.classList.remove(we.initClassName),we.animatedClassName&&t.node.classList.remove(we.animatedClassName)}))},de=function(t){return!0===t||"mobile"===t&&be.mobile()||"phone"===t&&be.phone()||"tablet"===t&&be.tablet()||"function"==typeof t&&!0===t()};return{init:function(t){return we=ae(we,t),ve=ne(),we.disableMutationObserver||oe.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),we.disableMutationObserver=!0),we.disableMutationObserver||oe.ready("[data-aos]",se),de(we.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",we.easing),document.querySelector("body").setAttribute("data-aos-duration",we.duration),document.querySelector("body").setAttribute("data-aos-delay",we.delay),-1===["DOMContentLoaded","load"].indexOf(we.startEvent)?document.addEventListener(we.startEvent,(function(){ce(!0)})):window.addEventListener("load",(function(){ce(!0)})),"DOMContentLoaded"===we.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,we.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,we.debounceDelay,!0)),ve)},refresh:ce,refreshHard:se}}));var o=n;export default o;
