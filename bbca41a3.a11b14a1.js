(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),a=(r(0),r(174)),c={id:"verify",title:"Adding your TryHackMe Level to Discord",sidebar_label:"Verifying your Level"},i={id:"discord/verify",title:"Adding your TryHackMe Level to Discord",description:"Your [level](https://docs.tryhackme.com/docs/general/tryhackme-levels) on TryHackMe can be copied across as a role on the discord service. Right now this process is not automatic, so you will need to repeat the following steps whenever you level up on the website.",source:"@site/docs/discord/verify.md",permalink:"/docs/discord/verify",editUrl:"https://github.com/tryhackmeltd/docs.tryhackme.com/edit/master/docs/discord/verify.md",lastUpdatedBy:"Ben Eriksson",lastUpdatedAt:1585326554,sidebar_label:"Verifying your Level",sidebar:"docs",previous:{title:"Getting Started with the TryHackMe Discord Server",permalink:"/docs/discord/discord-getting-started"},next:{title:"King of the Hill",permalink:"/docs/koth/king-of-the-hill"}},l=[],s={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Your ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.tryhackme.com/docs/general/tryhackme-levels"}),"level")," on TryHackMe can be copied across as a role on the discord service. Right now this process is not automatic, so you will need to repeat the following steps whenever you level up on the website."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'First, navigate to your profile on TryHackMe and click on the "Other" Tab:')),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/YwtTCyv.png",alt:"Profile-Demo"}))),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Copy your Discord token, then switch over to Discord.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click on the Bot and type ",Object(a.b)("inlineCode",{parentName:"p"},"!verify")," into the message box that appears. Press Space, then paste your token.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Press "Enter" and the bot will update your roles!'))))}p.isMDXComponent=!0},174:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,y=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return r?o.a.createElement(y,i({ref:t},s,{components:r})):o.a.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);