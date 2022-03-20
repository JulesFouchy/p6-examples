"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[8088],{3905:function(A,e,t){t.d(e,{Zo:function(){return E},kt:function(){return c}});var n=t(7294);function i(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function g(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function I(A,e){if(null==A)return{};var t,n,i=function(A,e){if(null==A)return{};var t,n,i={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(i[t]=A[t]);return i}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(i[t]=A[t])}return i}var r=n.createContext({}),o=function(A){var e=n.useContext(r),t=e;return A&&(t="function"==typeof A?A(e):g(g({},e),A)),t},E=function(A){var e=o(A.components);return n.createElement(r.Provider,{value:e},A.children)},p={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(A,e){var t=A.components,i=A.mdxType,a=A.originalType,r=A.parentName,E=I(A,["components","mdxType","originalType","parentName"]),u=o(t),c=i,B=u["".concat(r,".").concat(c)]||u[c]||p[c]||a;return t?n.createElement(B,g(g({ref:e},E),{},{components:t})):n.createElement(B,g({ref:e},E))}));function c(A,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof A||i){var a=t.length,g=new Array(a);g[0]=u;var I={};for(var r in e)hasOwnProperty.call(e,r)&&(I[r]=e[r]);I.originalType=A,I.mdxType="string"==typeof A?A:i,g[1]=I;for(var o=2;o<a;o++)g[o]=t[o];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4068:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return I},contentTitle:function(){return r},metadata:function(){return o},toc:function(){return E},default:function(){return u}});var n=t(2122),i=t(9756),a=(t(7294),t(3905)),g=["components"],I={title:"Dear ImGui"},r=void 0,o={unversionedId:"tutorials/dear-imgui",id:"tutorials/dear-imgui",isDocsHomePage:!1,title:"Dear ImGui",description:"Dear ImGui is a very popular and easy-to-use GUI library.",source:"@site/docs/tutorials/05-dear-imgui.md",sourceDirName:"tutorials",slug:"/tutorials/dear-imgui",permalink:"/p6-docs/tutorials/dear-imgui",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Dear ImGui"},sidebar:"tutorials",previous:{title:"Drawing",permalink:"/p6-docs/tutorials/drawing"},next:{title:"Text",permalink:"/p6-docs/tutorials/text"}},E=[{value:"ctx.imgui",id:"ctximgui",children:[]},{value:"Learning <em>Dear ImGui</em>",id:"learning-dear-imgui",children:[]}],p={toc:E};function u(A){var e=A.components,I=(0,i.Z)(A,g);return(0,a.kt)("wrapper",(0,n.Z)({},p,I,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ocornut/imgui"},(0,a.kt)("em",{parentName:"a"},"Dear ImGui"))," is a very popular and easy-to-use GUI library.",(0,a.kt)("br",null),"\nIt is integrated into ",(0,a.kt)("em",{parentName:"p"},"p6")," and you can use it without any additional setup."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dear ImGui",src:t(1809).Z})),(0,a.kt)("h2",{id:"ctximgui"},"ctx.imgui"),(0,a.kt)("p",null,"You simply have to render all your ImGui windows inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.imgui")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <p6/p6.h>\n\nint main()\n{\n    auto        ctx           = p6::Context{{1280, 720, "Dear ImGui"}};\n    auto        square_radius = 0.5f;\n    std::string text          = "Hello";\n    ctx.imgui                 = [&]() {\n        // Show a simple window\n        ImGui::Begin("Test");\n        ImGui::SliderFloat("Square size", &square_radius, 0.f, 1.f);\n        ImGui::InputText("Text", &text);\n        ImGui::End();\n        // Show the official ImGui demo window\n        // It is very useful to discover all the widgets available in ImGui\n        ImGui::ShowDemoWindow();\n    };\n    ctx.update = [&]() {\n        ctx.background({1, 1, 0, 1});\n        ctx.square(p6::Center{}, p6::Radius{square_radius});\n    };\n    ctx.start();\n}\n')),(0,a.kt)("h2",{id:"learning-dear-imgui"},"Learning ",(0,a.kt)("em",{parentName:"h2"},"Dear ImGui")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ocornut/imgui"},"Here is ",(0,a.kt)("em",{parentName:"a"},"Dear ImGui"),"'s GitHub")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("em",{parentName:"p"},"Dear ImGui")," doesn't have an official documentation, but you can look at their demo window to see all the available widgets. To open it simply call ",(0,a.kt)("inlineCode",{parentName:"p"},"ImGui::ShowDemoWindow();")," inside ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.imgui"),".",(0,a.kt)("br",null),"\nAnd if you want to see the associated code, open ",(0,a.kt)("em",{parentName:"p"},"Tools->Metrics/Debugger")," and then choose the ",(0,a.kt)("em",{parentName:"p"},"Item Picker"),": it will allow you to click on any widget and have your IDE take you to the code that created it. (NB: you might have to go up in the callstack a little bit)."),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("img",{src:t(9211).Z}),"\n",(0,a.kt)("img",{src:t(4560).Z}),"\n",(0,a.kt)("img",{src:t(5110).Z})))))}u.isMDXComponent=!0},5110:function(A,e,t){e.Z=t.p+"assets/images/imgui-callstack-2f3ac6477c8e85abd59387b62eb8c6c2.png"},9211:function(A,e){e.Z="data:image/png;base64,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"},4560:function(A,e){e.Z="data:image/png;base64,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"},1809:function(A,e){e.Z="data:image/png;base64,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"}}]);