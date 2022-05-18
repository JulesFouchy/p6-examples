"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[4195],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||c;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7862:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(6742),a=n(2263),c=n(6698),o=n(6010),l=n(7294),i=n(2122),u=n(9756),s=n(3905),p=["components"],d={toc:[]};function m(e){var t=e.components,n=(0,u.Z)(e,p);return(0,s.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"p6")," is designed to be very easy to use. Here is all the code you need to create a window:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <p6/p6.h>\n\nint main()\n{\n    auto ctx = p6::Context{{1280, 720, "Hello p6"}}; // Create a context with a window\n    ctx.start();                                     // Start the p6 application\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"And with just a little more code you can draw a circle:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <p6/p6.h>\n\nint main()\n{\n    auto ctx   = p6::Context{{1280, 720, "Hello p6"}};\n    ctx.update = [&]() {                    // Define the function that will be called in a loop once you call ctx.start()\n        ctx.background({0.5f, 0.3f, 0.8f}); // Clear the background with some color (Try to comment out this line to see what happens)\n        ctx.circle(p6::Center{ctx.mouse()}, // Draw a circle centered on the mouse cursor\n                   p6::Radius{0.3f});       // with a radius of 0.3\n    };\n    ctx.start();\n}\n')))}m.isMDXComponent=!0;var f="heroBanner_1ZBZ",h="buttons_irzW",b="centered_1q-w";function y(){var e=(0,a.Z)().siteConfig;return l.createElement("header",{className:(0,o.Z)("hero hero--primary",f)},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement("div",{className:h},l.createElement(r.Z,{className:"button button--secondary button--lg",to:"/tutorials"},"Let's get started \ud83d\ude80"))))}function g(){(0,a.Z)().siteConfig;return l.createElement(c.Z,{description:"Description will go into a meta tag in <head />"},l.createElement(y,null),l.createElement("main",null),l.createElement("div",{className:b},l.createElement(m,null)))}},6979:function(e,t,n){var r=n(7294),a=n(4184),c=n.n(a),o=n(5977),l=n(2263),i=n(8084);t.Z=function(e){var t=(0,r.useRef)(!1),a=(0,r.useRef)(null),u=(0,r.useState)(!1),s=u[0],p=u[1],d=(0,o.k6)(),m=(0,l.Z)(),f=m.siteConfig,h=void 0===f?{}:f,b=m.isClient,y=void 0!==b&&b,g=h.baseUrl,v=(0,i.usePluginData)("docusaurus-lunr-search"),w=function(){t.current||(Promise.all([fetch(""+g+v.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+g+v.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([n.e(9878),n.e(4452)]).then(n.bind(n,7780)),Promise.all([n.e(532),n.e(3343)]).then(n.bind(n,3343))]).then((function(e){var t=e[0],n=e[1],r=e[2].default;0!==t.length&&(!function(e,t,n){new n({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,n){var r=g+n.url;document.createElement("a").href=r,d.push(r)}})}(t,n,r),p(!0))})),t.current=!0)},x=(0,r.useCallback)((function(t){a.current.contains(t.target)||a.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return y&&w(),r.createElement("div",{className:"navbar__search",key:"search-box"},r.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:x,onKeyDown:x,tabIndex:0}),r.createElement("input",{id:"search_input_react",type:"search",placeholder:s?"Search":"Loading...","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:w,onMouseOver:w,onFocus:x,onBlur:x,ref:a,disabled:!s}))}}}]);