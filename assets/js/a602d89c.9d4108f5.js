"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[545],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1233:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={title:"p6::Image",summary:"An image can be drawn onto, and can be displayed.",sidebar_position:1},p="p6::Image",s={unversionedId:"reference/Types/image",id:"reference/Types/image",isDocsHomePage:!1,title:"p6::Image",description:"Section: Image",source:"@site/docs/reference/Types/image.md",sourceDirName:"reference/Types",slug:"/reference/Types/image",permalink:"/p6-docs/reference/Types/image",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"p6::Image",summary:"An image can be drawn onto, and can be displayed.",sidebar_position:1},sidebar:"reference",previous:{title:"p6::Context",permalink:"/p6-docs/reference/Types/context"},next:{title:"p6::Key",permalink:"/p6-docs/reference/Types/key"}},u=[{value:"Summary",id:"summary",children:[]},{value:"Detailed Description",id:"detailed-description",children:[]},{value:"Details",id:"details",children:[{value:"Image()",id:"image",children:[]},{value:"size()",id:"size",children:[]},{value:"texture()",id:"texture",children:[]},{value:"destructive_resize()",id:"destructive_resize",children:[]},{value:"resize()",id:"resize",children:[]}]}],m={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"p6image"},"p6::Image"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Section:")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/image"},"Image"))),(0,i.kt)("p",null,"An image can be drawn onto, and can be displayed.  ",(0,i.kt)("a",{parentName:"p",href:"#detailed-description"},"More...")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/Types/image#image"},"Image")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"ImageSize")," size, ",(0,i.kt)("inlineCode",{parentName:"td"},"const uint8_t *")," data = nullptr)",(0,i.kt)("br",null),"data must be nullptr, or an array of size ",(0,i.kt)("inlineCode",{parentName:"td"},"size.width() * size.height() * 4"),", with R, G, B and A channels, starting with the bottom left pixel, and going row by row.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ImageSize"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/Types/image#size"},"size")),"() const",(0,i.kt)("br",null),"Returns the size in pixels of the image.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"const Texture &"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/Types/image#texture"},"texture")),"() const",(0,i.kt)("br",null),"Returns the internal texture, that you can use to do advanced stuff with custom shaders.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"void"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/Types/image#destructive_resize"},"destructive_resize")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"ImageSize")," size)",(0,i.kt)("br",null),"Resizes the image.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"void"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/reference/Types/image#resize"},"resize")),"(",(0,i.kt)("inlineCode",{parentName:"td"},"ImageSize")," size)",(0,i.kt)("br",null),"Resizes the image.")))),(0,i.kt)("h2",{id:"detailed-description"},"Detailed Description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class p6::Image;\n")),(0,i.kt)("p",null,"An image can be drawn onto, and can be displayed. "),(0,i.kt)("p",null,"If you plan on drawing on the image, you can create it without data (it will create a black and transparent image). If you want to load an image, you can use ",(0,i.kt)("a",{parentName:"p",href:"/reference/image#load_image"},"load_image()")," instead of the constructor. "),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("h3",{id:"image"},"Image()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/Types/image#image"},"Image")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ImageSize")," size, ",(0,i.kt)("inlineCode",{parentName:"p"},"const uint8_t *")," data =nullptr);")),(0,i.kt)("p",null,"data must be nullptr, or an array of size ",(0,i.kt)("inlineCode",{parentName:"p"},"size.width() * size.height() * 4"),", with R, G, B and A channels, starting with the bottom left pixel, and going row by row. "),(0,i.kt)("h3",{id:"size"},"size()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"ImageSize")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/Types/image#size"},"size")),"() const;")),(0,i.kt)("p",null,"Returns the size in pixels of the image. "),(0,i.kt)("h3",{id:"texture"},"texture()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"const Texture &")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/Types/image#texture"},"texture")),"() const;")),(0,i.kt)("p",null,"Returns the internal texture, that you can use to do advanced stuff with custom shaders. "),(0,i.kt)("h3",{id:"destructive_resize"},"destructive_resize()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"void")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/Types/image#destructive_resize"},"destructive_resize")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ImageSize")," size);")),(0,i.kt)("p",null,"Resizes the image. "),(0,i.kt)("p",null,"\u26a0\ufe0f All of its content is lost. If you don't want that you can use ",(0,i.kt)("a",{parentName:"p",href:"/reference/Types/image#resize"},"resize()")," instead. "),(0,i.kt)("h3",{id:"resize"},"resize()"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"void")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/reference/Types/image#resize"},"resize")),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ImageSize")," size);")),(0,i.kt)("p",null,"Resizes the image. "),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Updated on 2022 February 02"))}c.isMDXComponent=!0}}]);