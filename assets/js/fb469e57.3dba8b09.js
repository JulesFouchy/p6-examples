"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[9966],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},f),{},{components:r})):n.createElement(d,i({ref:t},f))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9424:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return f},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],s={title:"The coordinate system"},l=void 0,c={unversionedId:"tutorials/the-coordinate-system",id:"tutorials/the-coordinate-system",isDocsHomePage:!1,title:"The coordinate system",description:"p6 uses a relative coordinate system. This means that if you double the size of your window, all of your drawings will be scaled too and they will appear to fit the same space in the window.",source:"@site/docs/tutorials/03-the-coordinate-system.md",sourceDirName:"tutorials",slug:"/tutorials/the-coordinate-system",permalink:"/p6-docs/tutorials/the-coordinate-system",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"The coordinate system"},sidebar:"tutorials",previous:{title:"The Context",permalink:"/p6-docs/tutorials/the-context"},next:{title:"Drawing",permalink:"/p6-docs/tutorials/drawing"}},f=[{value:"Framebuffer",id:"framebuffer",children:[]}],u={toc:f};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"p6")," uses a relative coordinate system. This means that if you double the size of your window, all of your drawings will be scaled too and they will appear to fit the same space in the window."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"(0, 0)")," is the center of the window. "),(0,o.kt)("li",{parentName:"ul"},"The y axis always goes from ",(0,o.kt)("inlineCode",{parentName:"li"},"-1")," at the bottom to ",(0,o.kt)("inlineCode",{parentName:"li"},"+1")," at the top (no matter the size of the window)."),(0,o.kt)("li",{parentName:"ul"},"The x axis goes from ",(0,o.kt)("inlineCode",{parentName:"li"},"-ctx.aspect_ratio()")," at the left to ",(0,o.kt)("inlineCode",{parentName:"li"},"+ctx.aspect_ratio()")," at the right. For example if your window is 2000 by 1000 pixels then its aspect ratio is 2 (2000 / 1000) and the x axis will go from -2 to 2. This is done so that both axes use the same units (A distance of 0.5 means the same for x as it does for y)."),(0,o.kt)("li",{parentName:"ul"},"You can access the aspect ratio of the window (a.k.a. ",(0,o.kt)("inlineCode",{parentName:"li"},"width / height"),") through the ",(0,o.kt)("a",{parentName:"li",href:"../reference/window#aspect_ratio"},(0,o.kt)("inlineCode",{parentName:"a"},"ctx.aspect_ratio()"))," function.")),(0,o.kt)("h3",{id:"framebuffer"},"Framebuffer"),(0,o.kt)("p",null,"If you need to you can access the size of the window's framebuffer through the ",(0,o.kt)("a",{parentName:"p",href:"../reference/window#framebuffer_size"},(0,o.kt)("inlineCode",{parentName:"a"},"ctx.framebuffer_size()")),", ",(0,o.kt)("a",{parentName:"p",href:"../reference/window#framebuffer_width"},(0,o.kt)("inlineCode",{parentName:"a"},"ctx.framebuffer_width()"))," and ",(0,o.kt)("a",{parentName:"p",href:"../reference/window#framebuffer_height"},(0,o.kt)("inlineCode",{parentName:"a"},"ctx.framebuffer_height()"))," functions. But I would not recommend to do so because in most cases you will be better off using relative coordinates. These functions are mainly here to allow you to create an ",(0,o.kt)("a",{parentName:"p",href:"../reference/Types/Image"},(0,o.kt)("inlineCode",{parentName:"a"},"Image"))," that has the same size as the window, but this is an advanced use case."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NB:")," the ",(0,o.kt)("em",{parentName:"p"},"framebuffer")," is the image that you see in your window. It does not necessarily have the same size as the window itself since retina displays exist (see ",(0,o.kt)("a",{parentName:"p",href:"https://www.glfw.org/faq.html#43---why-is-my-output-in-the-lower-left-corner-of-the-window"},"glfw's documentation"),"). This is why we always talk about the size of the ",(0,o.kt)("em",{parentName:"p"},"framebuffer")," instead of the size of the ",(0,o.kt)("em",{parentName:"p"},"window"),"."))}p.isMDXComponent=!0}}]);