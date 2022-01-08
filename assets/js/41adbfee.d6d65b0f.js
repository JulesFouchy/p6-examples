"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[782],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=l(r),f=a,d=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return r?n.createElement(d,c(c({ref:t},m),{},{components:r})):n.createElement(d,c({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},504:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return s}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),c=["components"],i={title:"math.h"},p="math.h",l={unversionedId:"reference/Files/math_8h",id:"reference/Files/math_8h",isDocsHomePage:!1,title:"math.h",description:"Namespaces",source:"@site/docs/reference/Files/math_8h.md",sourceDirName:"reference/Files",slug:"/reference/Files/math_8h",permalink:"/p6-docs/reference/Files/math_8h",tags:[],version:"current",frontMatter:{title:"math.h"},sidebar:"reference",previous:{title:"C:/Dev/C++/p6-docs/examples",permalink:"/p6-docs/reference/Files/dir_d28a4824dc47e487b107a5db32ef43c4"},next:{title:"Drawing",permalink:"/p6-docs/reference/Modules/group__drawing"}},m=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Source code",id:"source-code",children:[]}],u={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mathh"},"math.h"),(0,o.kt)("h2",{id:"namespaces"},"Namespaces"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/reference/Namespaces/namespacep6"},"p6")))))),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#pragma once\n\nnamespace p6 {\n/* ------------------------------- */\n/* ------------------------------- */\n\ntemplate<typename T>\nT map(T x, T from_min, T from_max, T to_min, T to_max)\n{\n    return (x - from_min) * (to_max - to_min) / (from_max - from_min) + to_min;\n}\n} // namespace p6\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Updated on 2022 January 08"))}s.isMDXComponent=!0}}]);