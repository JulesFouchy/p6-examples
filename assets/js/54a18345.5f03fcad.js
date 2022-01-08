"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[421],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,m=d["".concat(u,".").concat(g)]||d[g]||s[g]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1980:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),o=["components"],i={title:"Drawing"},u="Drawing",p={unversionedId:"reference/Modules/group__drawing",id:"reference/Modules/group__drawing",isDocsHomePage:!1,title:"Drawing",description:"Functions",source:"@site/docs/reference/Modules/group__drawing.md",sourceDirName:"reference/Modules",slug:"/reference/Modules/group__drawing",permalink:"/p6-docs/reference/Modules/group__drawing",tags:[],version:"current",frontMatter:{title:"Drawing"},sidebar:"reference",previous:{title:"math.h",permalink:"/p6-docs/reference/Files/math_8h"},next:{title:"Math",permalink:"/p6-docs/reference/Modules/group__math"}},c=[{value:"Functions",id:"functions",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Functions Documentation",id:"functions-documentation",children:[{value:"background()",id:"background",children:[]},{value:"rectangle()",id:"rectangle",children:[]},{value:"ellipse()",id:"ellipse",children:[]},{value:"image()",id:"image",children:[]}]},{value:"Attributes Documentation",id:"attributes-documentation",children:[{value:"fill",id:"fill",children:[]},{value:"stroke",id:"stroke",children:[]},{value:"stroke_weight",id:"stroke_weight",children:[]}]}],s={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"drawing"},"Drawing"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"/reference/Modules/group__drawing#background"},"background")),"(Color color) const",(0,l.kt)("br",null),"Sets the color and alpha of each pixel of the canvas.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"/reference/Modules/group__drawing#rectangle"},"rectangle")),"(RectangleParams params) const",(0,l.kt)("br",null),"Draws a rectangle.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"/reference/Modules/group__drawing#ellipse"},"ellipse")),"(RectangleParams params) const",(0,l.kt)("br",null),"Draws an ellipse.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"/reference/Modules/group__drawing#image"},"image")),"(const Image & img, RectangleParams params) const",(0,l.kt)("br",null),"Draws an image.")))),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"/reference/Modules/group__drawing#fill"},"fill")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"/reference/Modules/group__drawing#stroke"},"stroke")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"/reference/Modules/group__drawing#stroke_weight"},"stroke_weight")))))),(0,l.kt)("h2",{id:"functions-documentation"},"Functions Documentation"),(0,l.kt)("h3",{id:"background"},"background()"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/reference/Modules/group__drawing#background"},"background")),"(Color color) const;")),(0,l.kt)("p",null,"Sets the color and alpha of each pixel of the canvas. "),(0,l.kt)("p",null,"NB: No blending is applied ; even if you specify an alpha of 0.5 the old canvas is completely erased. This means that setting an alpha here doesn't matter much. It is only meaningful if you export the canvas as a png, or if you try to blend the canvas on top of another image. "),(0,l.kt)("h3",{id:"rectangle"},"rectangle()"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/reference/Modules/group__drawing#rectangle"},"rectangle")),"(RectangleParams params) const;")),(0,l.kt)("p",null,"Draws a rectangle. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),": "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"params")," Shape of the rect")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"p6.fill = {0.f, 0.8f, 0.3f};\np6.rectangle({});\n")),(0,l.kt)("h3",{id:"ellipse"},"ellipse()"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/reference/Modules/group__drawing#ellipse"},"ellipse")),"(RectangleParams params) const;")),(0,l.kt)("p",null,"Draws an ellipse. "),(0,l.kt)("h3",{id:"image"},"image()"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/reference/Modules/group__drawing#image"},"image")),"(const Image & img, RectangleParams params) const;")),(0,l.kt)("p",null,"Draws an image. "),(0,l.kt)("h2",{id:"attributes-documentation"},"Attributes Documentation"),(0,l.kt)("h3",{id:"fill"},"fill"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Color fill {1.f, 1.f, 1.f, 0.5f};\n")),(0,l.kt)("h3",{id:"stroke"},"stroke"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Color stroke {0.f, 0.f, 0.f};\n")),(0,l.kt)("h3",{id:"stroke_weight"},"stroke_weight"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"float stroke_weight = 0.01f;\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Updated on 2022 January 08"))}d.isMDXComponent=!0}}]);