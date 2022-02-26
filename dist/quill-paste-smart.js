!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("quill")):"function"==typeof define&&define.amd?define(["quill"],t):"object"==typeof exports?exports.QuillPasteSmart=t(require("quill")):e.QuillPasteSmart=t(e.Quill)}(window,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.2.2/LICENSE */
e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,o=Object.getPrototypeOf,r=Object.getOwnPropertyDescriptor,i=Object.freeze,a=Object.seal,u=Object.create,l="undefined"!=typeof Reflect&&Reflect,s=l.apply,c=l.construct;s||(s=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),c||(c=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var f,d=F(Array.prototype.forEach),p=F(Array.prototype.pop),m=F(Array.prototype.push),h=F(String.prototype.toLowerCase),y=F(String.prototype.match),g=F(String.prototype.replace),b=F(String.prototype.indexOf),v=F(String.prototype.trim),A=F(RegExp.prototype.test),D=(f=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c(f,t)});function F(e){return function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return s(e,t,o)}}function T(e,o){t&&t(e,null);for(var r=o.length;r--;){var i=o[r];if("string"==typeof i){var a=h(i);a!==i&&(n(o)||(o[r]=a),i=a)}e[i]=!0}return e}function S(t){var n=u(null),o=void 0;for(o in t)s(e,t,[o])&&(n[o]=t[o]);return n}function L(e,t){for(;null!==e;){var n=r(e,t);if(n){if(n.get)return F(n.get);if("function"==typeof n.value)return F(n.value)}e=o(e)}return function(e){return console.warn("fallback value for",e),null}}var E=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),O=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),k=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),w=i(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),_=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),x=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),R=i(["#text"]),M=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),N=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),z=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),C=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),W=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),H=a(/<%[\s\S]*|[\s\S]*%>/gm),j=a(/^data-[\-\w.\u00B7-\uFFFF]/),P=a(/^aria-[\-\w]+$/),G=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),B=a(/^(?:\w+script|data):/i),I=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function q(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var K=function(){return"undefined"==typeof window?null:window},V=function(e,t){if("object"!==(void 0===e?"undefined":U(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K(),n=function(t){return e(t)};if(n.version="2.2.9",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var o=t.document,r=t.document,a=t.DocumentFragment,u=t.HTMLTemplateElement,l=t.Node,s=t.Element,c=t.NodeFilter,f=t.NamedNodeMap,F=void 0===f?t.NamedNodeMap||t.MozNamedAttrMap:f,Q=t.Text,Y=t.Comment,$=t.DOMParser,X=t.trustedTypes,Z=s.prototype,J=L(Z,"cloneNode"),ee=L(Z,"nextSibling"),te=L(Z,"childNodes"),ne=L(Z,"parentNode");if("function"==typeof u){var oe=r.createElement("template");oe.content&&oe.content.ownerDocument&&(r=oe.content.ownerDocument)}var re=V(X,o),ie=re&&Ce?re.createHTML(""):"",ae=r,ue=ae.implementation,le=ae.createNodeIterator,se=ae.createDocumentFragment,ce=o.importNode,fe={};try{fe=S(r).documentMode?r.documentMode:{}}catch(e){}var de={};n.isSupported="function"==typeof ne&&ue&&void 0!==ue.createHTMLDocument&&9!==fe;var pe=W,me=H,he=j,ye=P,ge=B,be=I,ve=G,Ae=null,De=T({},[].concat(q(E),q(O),q(k),q(_),q(R))),Fe=null,Te=T({},[].concat(q(M),q(N),q(z),q(C))),Se=null,Le=null,Ee=!0,Oe=!0,ke=!1,we=!1,_e=!1,xe=!1,Re=!1,Me=!1,Ne=!1,ze=!0,Ce=!1,We=!0,He=!0,je=!1,Pe={},Ge=T({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Be=null,Ie=T({},["audio","video","img","source","image","track"]),Ue=null,qe=T({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Ke="http://www.w3.org/1998/Math/MathML",Ve="http://www.w3.org/2000/svg",Qe="http://www.w3.org/1999/xhtml",Ye=Qe,$e=!1,Xe=null,Ze=r.createElement("form"),Je=function(e){Xe&&Xe===e||(e&&"object"===(void 0===e?"undefined":U(e))||(e={}),e=S(e),Ae="ALLOWED_TAGS"in e?T({},e.ALLOWED_TAGS):De,Fe="ALLOWED_ATTR"in e?T({},e.ALLOWED_ATTR):Te,Ue="ADD_URI_SAFE_ATTR"in e?T(S(qe),e.ADD_URI_SAFE_ATTR):qe,Be="ADD_DATA_URI_TAGS"in e?T(S(Ie),e.ADD_DATA_URI_TAGS):Ie,Se="FORBID_TAGS"in e?T({},e.FORBID_TAGS):{},Le="FORBID_ATTR"in e?T({},e.FORBID_ATTR):{},Pe="USE_PROFILES"in e&&e.USE_PROFILES,Ee=!1!==e.ALLOW_ARIA_ATTR,Oe=!1!==e.ALLOW_DATA_ATTR,ke=e.ALLOW_UNKNOWN_PROTOCOLS||!1,we=e.SAFE_FOR_TEMPLATES||!1,_e=e.WHOLE_DOCUMENT||!1,Me=e.RETURN_DOM||!1,Ne=e.RETURN_DOM_FRAGMENT||!1,ze=!1!==e.RETURN_DOM_IMPORT,Ce=e.RETURN_TRUSTED_TYPE||!1,Re=e.FORCE_BODY||!1,We=!1!==e.SANITIZE_DOM,He=!1!==e.KEEP_CONTENT,je=e.IN_PLACE||!1,ve=e.ALLOWED_URI_REGEXP||ve,Ye=e.NAMESPACE||Qe,we&&(Oe=!1),Ne&&(Me=!0),Pe&&(Ae=T({},[].concat(q(R))),Fe=[],!0===Pe.html&&(T(Ae,E),T(Fe,M)),!0===Pe.svg&&(T(Ae,O),T(Fe,N),T(Fe,C)),!0===Pe.svgFilters&&(T(Ae,k),T(Fe,N),T(Fe,C)),!0===Pe.mathMl&&(T(Ae,_),T(Fe,z),T(Fe,C))),e.ADD_TAGS&&(Ae===De&&(Ae=S(Ae)),T(Ae,e.ADD_TAGS)),e.ADD_ATTR&&(Fe===Te&&(Fe=S(Fe)),T(Fe,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&T(Ue,e.ADD_URI_SAFE_ATTR),He&&(Ae["#text"]=!0),_e&&T(Ae,["html","head","body"]),Ae.table&&(T(Ae,["tbody"]),delete Se.tbody),i&&i(e),Xe=e)},et=T({},["mi","mo","mn","ms","mtext"]),tt=T({},["foreignobject","desc","title","annotation-xml"]),nt=T({},O);T(nt,k),T(nt,w);var ot=T({},_);T(ot,x);var rt=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:Qe,tagName:"template"});var n=h(e.tagName),o=h(t.tagName);if(e.namespaceURI===Ve)return t.namespaceURI===Qe?"svg"===n:t.namespaceURI===Ke?"svg"===n&&("annotation-xml"===o||et[o]):Boolean(nt[n]);if(e.namespaceURI===Ke)return t.namespaceURI===Qe?"math"===n:t.namespaceURI===Ve?"math"===n&&tt[o]:Boolean(ot[n]);if(e.namespaceURI===Qe){if(t.namespaceURI===Ve&&!tt[o])return!1;if(t.namespaceURI===Ke&&!et[o])return!1;var r=T({},["title","style","font","a","script"]);return!ot[n]&&(r[n]||!nt[n])}return!1},it=function(e){m(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},at=function(e,t){try{m(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){m(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Fe[e])if(Me||Ne)try{it(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},ut=function(e){var t=void 0,n=void 0;if(Re)e="<remove></remove>"+e;else{var o=y(e,/^[\r\n\t ]+/);n=o&&o[0]}var i=re?re.createHTML(e):e;if(Ye===Qe)try{t=(new $).parseFromString(i,"text/html")}catch(e){}if(!t||!t.documentElement){t=ue.createDocument(Ye,"template",null);try{t.documentElement.innerHTML=$e?"":i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(r.createTextNode(n),a.childNodes[0]||null),_e?t.documentElement:a},lt=function(e){return le.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null,!1)},st=function(e){return!(e instanceof Q||e instanceof Y||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof F&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},ct=function(e){return"object"===(void 0===l?"undefined":U(l))?e instanceof l:e&&"object"===(void 0===e?"undefined":U(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ft=function(e,t,o){de[e]&&d(de[e],(function(e){e.call(n,t,o,Xe)}))},dt=function(e){var t=void 0;if(ft("beforeSanitizeElements",e,null),st(e))return it(e),!0;if(y(e.nodeName,/[\u0080-\uFFFF]/))return it(e),!0;var o=h(e.nodeName);if(ft("uponSanitizeElement",e,{tagName:o,allowedTags:Ae}),!ct(e.firstElementChild)&&(!ct(e.content)||!ct(e.content.firstElementChild))&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent))return it(e),!0;if(!Ae[o]||Se[o]){if(He&&!Ge[o]){var r=ne(e)||e.parentNode,i=te(e)||e.childNodes;if(i&&r)for(var a=i.length-1;a>=0;--a)r.insertBefore(J(i[a],!0),ee(e))}return it(e),!0}return e instanceof s&&!rt(e)?(it(e),!0):"noscript"!==o&&"noembed"!==o||!A(/<\/no(script|embed)/i,e.innerHTML)?(we&&3===e.nodeType&&(t=e.textContent,t=g(t,pe," "),t=g(t,me," "),e.textContent!==t&&(m(n.removed,{element:e.cloneNode()}),e.textContent=t)),ft("afterSanitizeElements",e,null),!1):(it(e),!0)},pt=function(e,t,n){if(We&&("id"===t||"name"===t)&&(n in r||n in Ze))return!1;if(Oe&&A(he,t));else if(Ee&&A(ye,t));else{if(!Fe[t]||Le[t])return!1;if(Ue[t]);else if(A(ve,g(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==b(n,"data:")||!Be[e])if(ke&&!A(ge,g(n,be,"")));else if(n)return!1}return!0},mt=function(e){var t=void 0,o=void 0,r=void 0,i=void 0;ft("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Fe};for(i=a.length;i--;){var l=t=a[i],s=l.name,c=l.namespaceURI;if(o=v(t.value),r=h(s),u.attrName=r,u.attrValue=o,u.keepAttr=!0,u.forceKeepAttr=void 0,ft("uponSanitizeAttribute",e,u),o=u.attrValue,!u.forceKeepAttr&&(at(s,e),u.keepAttr))if(A(/\/>/i,o))at(s,e);else{we&&(o=g(o,pe," "),o=g(o,me," "));var f=e.nodeName.toLowerCase();if(pt(f,r,o))try{c?e.setAttributeNS(c,s,o):e.setAttribute(s,o),p(n.removed)}catch(e){}}}ft("afterSanitizeAttributes",e,null)}},ht=function e(t){var n=void 0,o=lt(t);for(ft("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)ft("uponSanitizeShadowNode",n,null),dt(n)||(n.content instanceof a&&e(n.content),mt(n));ft("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,r){var i=void 0,u=void 0,s=void 0,c=void 0,f=void 0;if(($e=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ct(e)){if("function"!=typeof e.toString)throw D("toString is not a function");if("string"!=typeof(e=e.toString()))throw D("dirty is not a string, aborting")}if(!n.isSupported){if("object"===U(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(ct(e))return t.toStaticHTML(e.outerHTML)}return e}if(xe||Je(r),n.removed=[],"string"==typeof e&&(je=!1),je);else if(e instanceof l)1===(u=(i=ut("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===u.nodeName||"HTML"===u.nodeName?i=u:i.appendChild(u);else{if(!Me&&!we&&!_e&&-1===e.indexOf("<"))return re&&Ce?re.createHTML(e):e;if(!(i=ut(e)))return Me?null:ie}i&&Re&&it(i.firstChild);for(var d=lt(je?e:i);s=d.nextNode();)3===s.nodeType&&s===c||dt(s)||(s.content instanceof a&&ht(s.content),mt(s),c=s);if(c=null,je)return e;if(Me){if(Ne)for(f=se.call(i.ownerDocument);i.firstChild;)f.appendChild(i.firstChild);else f=i;return ze&&(f=ce.call(o,f,!0)),f}var p=_e?i.outerHTML:i.innerHTML;return we&&(p=g(p,pe," "),p=g(p,me," ")),re&&Ce?re.createHTML(p):p},n.setConfig=function(e){Je(e),xe=!0},n.clearConfig=function(){Xe=null,xe=!1},n.isValidAttribute=function(e,t,n){Xe||Je({});var o=h(e),r=h(t);return pt(o,r,n)},n.addHook=function(e,t){"function"==typeof t&&(de[e]=de[e]||[],m(de[e],t))},n.removeHook=function(e){de[e]&&p(de[e])},n.removeHooks=function(e){de[e]&&(de[e]=[])},n.removeAllHooks=function(){de={}},n}()}()},function(t,n){t.exports=e},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(0),a=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=r.a.import("modules/clipboard"),g=r.a.import("delta"),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,n,o,i=p(u);function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e,t)).allowed=t.allowed,n.keepSelection=t.keepSelection,n.substituteBlockElements=t.substituteBlockElements,n.magicPasteLinks=t.magicPasteLinks,n.hooks=t.hooks,n}return t=u,(n=[{key:"onPaste",value:function(e){var t=this;e.preventDefault();var n,o,i,u,l,s=this.quill.getSelection();e.clipboardData&&e.clipboardData.getData||!window.clipboardData||!window.clipboardData.getData?(n=e.clipboardData.getData("text/plain"),o=e.clipboardData.getData("text/html"),i=null===(u=e.clipboardData)||void 0===u||null===(l=u.items)||void 0===l?void 0:l[0]):n=window.clipboardData.getData("Text");var c,f,d,p,m,h,y,b,v,A=(new g).retain(s.index).delete(s.length),D=this.getDOMPurifyOptions(),F=n;if(o)"function"==typeof(null===(c=this.hooks)||void 0===c?void 0:c.beforeSanitizeElements)&&a.a.addHook("beforeSanitizeElements",this.hooks.beforeSanitizeElements),"function"==typeof(null===(f=this.hooks)||void 0===f?void 0:f.uponSanitizeElement)&&a.a.addHook("uponSanitizeElement",this.hooks.uponSanitizeElement),"function"==typeof(null===(d=this.hooks)||void 0===d?void 0:d.afterSanitizeElements)&&a.a.addHook("afterSanitizeElements",this.hooks.afterSanitizeElements),"function"==typeof(null===(p=this.hooks)||void 0===p?void 0:p.beforeSanitizeAttributes)&&a.a.addHook("beforeSanitizeAttributes",this.hooks.beforeSanitizeAttributes),"function"==typeof(null===(m=this.hooks)||void 0===m?void 0:m.uponSanitizeAttribute)&&a.a.addHook("uponSanitizeAttribute",this.hooks.uponSanitizeAttribute),"function"==typeof(null===(h=this.hooks)||void 0===h?void 0:h.afterSanitizeAttributes)&&a.a.addHook("afterSanitizeAttributes",this.hooks.afterSanitizeAttributes),"function"==typeof(null===(y=this.hooks)||void 0===y?void 0:y.beforeSanitizeShadowDOM)&&a.a.addHook("beforeSanitizeShadowDOM",this.hooks.beforeSanitizeShadowDOM),"function"==typeof(null===(b=this.hooks)||void 0===b?void 0:b.uponSanitizeShadowNode)&&a.a.addHook("uponSanitizeShadowNode",this.hooks.uponSanitizeShadowNode),"function"==typeof(null===(v=this.hooks)||void 0===v?void 0:v.afterSanitizeShadowDOM)&&a.a.addHook("afterSanitizeShadowDOM",this.hooks.afterSanitizeShadowDOM),F=!1!==this.substituteBlockElements?(o=this.substitute(o,D)).innerHTML:a.a.sanitize(o,D),A=A.concat(this.convert(F));else if(D.ALLOWED_TAGS.includes("a")&&this.isURL(n)&&s.length>0&&this.magicPasteLinks)F=this.quill.getText(s.index,s.length),A=A.insert(F,{link:n});else if(D.ALLOWED_TAGS.includes("img")&&i&&"file"===i.kind&&i.type.match(/^image\//i)){var T=i.getAsFile(),S=new FileReader;S.onload=function(e){t.quill.insertEmbed(s.index,"image",e.target.result),t.keepSelection||t.quill.setSelection(s.index+1)},S.readAsDataURL(T)}else A=A.insert(F);this.quill.updateContents(A,r.a.sources.USER),A=this.convert(F),this.keepSelection?this.quill.setSelection(s.index,A.length(),r.a.sources.SILENT):this.quill.setSelection(s.index+A.length(),r.a.sources.SILENT),this.quill.scrollIntoView(),a.a.removeAllHooks()}},{key:"getDOMPurifyOptions",value:function(){var e,t,n={};if(null!==(e=this.allowed)&&void 0!==e&&e.tags&&(n.ALLOWED_TAGS=this.allowed.tags),null!==(t=this.allowed)&&void 0!==t&&t.attributes&&(n.ALLOWED_ATTR=this.allowed.attributes),void 0===n.ALLOWED_TAGS||void 0===n.ALLOWED_ATTR){var o,r=!1;void 0===n.ALLOWED_TAGS&&(r=!0,n.ALLOWED_TAGS=["p","br","span"]);var i=!1;void 0===n.ALLOWED_ATTR&&(i=!0,n.ALLOWED_ATTR=["class"]);var a=this.quill.getModule("toolbar");null==a||null===(o=a.controls)||void 0===o||o.forEach((function(e){switch(e[0]){case"bold":r&&(n.ALLOWED_TAGS.push("b"),n.ALLOWED_TAGS.push("strong"));break;case"italic":r&&(n.ALLOWED_TAGS.push("i"),n.ALLOWED_TAGS.push("em"));break;case"underline":r&&n.ALLOWED_TAGS.push("u");break;case"strike":r&&n.ALLOWED_TAGS.push("s");break;case"color":case"background":i&&n.ALLOWED_ATTR.push("style");break;case"script":r&&("super"===e[1].value?n.ALLOWED_TAGS.push("sup"):"sub"===e[1].value&&n.ALLOWED_TAGS.push("sub"));break;case"header":if(r){var t=function(e){"1"===e?n.ALLOWED_TAGS.push("h1"):"2"===e?n.ALLOWED_TAGS.push("h2"):"3"===e?n.ALLOWED_TAGS.push("h3"):"4"===e?n.ALLOWED_TAGS.push("h4"):"5"===e?n.ALLOWED_TAGS.push("h5"):"6"===e&&n.ALLOWED_TAGS.push("h6")};e[1].value?t(e[1].value):e[1].options&&e[1].options.length&&[].forEach.call(e[1].options,(function(e){e.value&&t(e.value)}))}break;case"code-block":r&&n.ALLOWED_TAGS.push("pre"),i&&n.ALLOWED_ATTR.push("spellcheck");break;case"list":r&&("ordered"===e[1].value?n.ALLOWED_TAGS.push("ol"):"bullet"===e[1].value&&n.ALLOWED_TAGS.push("ul"),n.ALLOWED_TAGS.push("li"));break;case"link":r&&n.ALLOWED_TAGS.push("a"),i&&(n.ALLOWED_ATTR.push("href"),n.ALLOWED_ATTR.push("target"),n.ALLOWED_ATTR.push("rel"));break;case"image":r&&n.ALLOWED_TAGS.push("img"),i&&(n.ALLOWED_ATTR.push("src"),n.ALLOWED_ATTR.push("title"),n.ALLOWED_ATTR.push("alt"));break;case"video":r&&n.ALLOWED_TAGS.push("iframe"),i&&(n.ALLOWED_ATTR.push("frameborder"),n.ALLOWED_ATTR.push("allowfullscreen"),n.ALLOWED_ATTR.push("src"));break;case"blockquote":r&&n.ALLOWED_TAGS.push(e[0])}}))}return n}},{key:"substitute",value:function(e,t){var n,o=["h1","h2","h3","h4","h5","h6"],r=["p","div","section","article","fieldset","address","aside","blockquote","canvas","dl","figcaption","figure","footer","form","header","main","nav","noscript","ol","pre","table","tfoot","ul","video"],i=["li","dt","dd","hr"];a.a.addHook("uponSanitizeElement",(function(e,a,u){for(var l=0;!n&&l<3;)t.ALLOWED_TAGS.includes(r[l])&&(n=r[l]),++l;if(n&&e.tagName&&!t.ALLOWED_TAGS.includes(e.tagName.toLowerCase())){var s=e.tagName.toLowerCase();o.includes(s)?e.innerHTML="<".concat(n,"><b>").concat(e.innerHTML,"</b></").concat(n,">"):r.includes(s)?e.innerHTML="<".concat(n,">").concat(e.innerHTML,"</").concat(n,">"):i.includes(s)&&(e.innerHTML="".concat(e.innerHTML,"<br>"))}})),e=a.a.sanitize(e,s(s({},t),{RETURN_DOM:!0,WHOLE_DOCUMENT:!1})),a.a.removeAllHooks();var u,l=0,c=document.createElement("body");return function e(t,n){for(n(t,l),t=l<=1?t.firstChild:void 0;t;)++l,e(t,n),t=t.nextSibling;--l}(e,(function(e,t){if(1===t)if(e.tagName&&r.includes(e.tagName.toLowerCase())){u&&(u=void 0);var o=document.createElement(e.tagName.toLowerCase());o.innerHTML=e.innerHTML,c.appendChild(o)}else if(void 0===u&&(u=document.createElement(n),c.appendChild(u)),e.tagName){var i=document.createElement(e.tagName.toLowerCase()),a=e.attributes;a.length&&Array.from(a).forEach((function(e){return i.setAttribute(e.nodeName,e.value)})),e.innerHTML&&(i.innerHTML=e.innerHTML),u.appendChild(i)}else{var l=document.createTextNode(e.textContent);u.appendChild(l)}})),c}},{key:"isURL",value:function(e){return!!/^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:(?![\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])*)?$/i.test(e)}}])&&f(t.prototype,n),o&&f(t,o),u}(y);r.a.register("modules/clipboard",b,!0),t.default=b}])}));