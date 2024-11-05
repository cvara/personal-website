(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[125],{9594:function(e,t,a){"use strict";a.d(t,{A:function(){return h}});var r=a(6540),n=a(4194),l=a(6462);var c=()=>{const{0:e,1:t}=(0,r.useState)((()=>"undefined"!=typeof window?localStorage.theme||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):"light"));(0,r.useEffect)((()=>{localStorage.theme=e,document.body.classList.toggle("dark","dark"===e)}),[e]);return[e,()=>{t((e=>"dark"===e?"light":"dark"))}]},i=a(858),o=a.n(i),m=a(3344),s=a.n(m),d=a(4745),u=a.n(d);var p=e=>{let{siteTitle:t}=e;const[a,i]=c(),m="/"!==(0,l.useLocation)().pathname;return r.createElement("header",{className:"flex justify-between items-center h-12 px-4 m-auto w-full print:hidden"},r.createElement("div",null,m&&r.createElement(n.Link,{to:"/",className:"text-sm inline-flex items-center gap-1 no-underline opacity-80 hover:opacity-100 pr-2 dark:opacity-90"},r.createElement(o(),{width:12,height:"auto",className:"text-purple fill-purple"})," ","back")),r.createElement("button",{onClick:i,className:"p-2 rounded-full bg-gray-200 dark:bg-gray-700","aria-label":"Toggle theme"},"dark"===a?r.createElement(u(),{width:18,className:"fill-white/20 hover:fill-white/80"}):r.createElement(s(),{width:18,className:"fill-navy/20 hover:fill-navy/80"})))};var h=e=>{let{children:t}=e;(0,n.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement("div",{className:"background-gradient fixed inset-0 z-[-1] bg-gradient-to-tr from-purple-light to-teal-light dark:hidden"}),r.createElement("main",{className:"min-h-svh flex flex-col",id:"layout"},r.createElement(p,null),r.createElement("div",{className:"flex flex-col grow shrink basis-1/2 h-0 p-2 md:p-4"},t),r.createElement("footer",{className:"grow-0 shrink-0 flex-col flex items-center print:hidden"},r.createElement("div",{className:"inline-flex gap-1 text-purple font-medium opacity-100 text-[12px] px-2 py-3"},r.createElement("div",null,"© ",(new Date).getFullYear()," "),"·"," ",r.createElement("span",{className:"bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent"},"Christoforos Varakliotis")),r.createElement("div",{className:"text-center h-[4px] bg-gradient-to-r from-purple to-teal w-full"}))))}},7528:function(e,t,a){"use strict";var r=a(6540),n=a(4194);t.A=function(e){var t,a;let{description:l,title:c,children:i,index:o}=e;const{site:m}=(0,n.useStaticQuery)("63159454"),s=l||m.siteMetadata.description,d=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,d?`${c} | ${d}`:c),r.createElement("meta",{name:"description",content:s}),r.createElement("meta",{property:"og:title",content:c}),r.createElement("meta",{property:"og:description",content:s}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=m.siteMetadata)||void 0===a?void 0:a.author)||""}),r.createElement("meta",{name:"twitter:title",content:c}),r.createElement("meta",{name:"twitter:description",content:s}),!o&&r.createElement("meta",{name:"robots",content:"noindex"}),i)}},3331:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return c}});var r=a(6540),n=a(9594),l=a(7528);const c=()=>r.createElement(l.A,{title:"404: Not Found"});t.default=()=>r.createElement(n.A,null,r.createElement("div",{className:"flex flex-col items-center justify-center gap-4 grow shrink"},r.createElement("h1",{className:"text-6xl sm:text-8xl font-bold mb-0 bg-gradient-to-tr from-purple to-teal bg-clip-text text-transparent"},"404"),r.createElement("div",{className:"text-4xl font-extralight"},"Not Found"),r.createElement("div",{className:"text-lg font-extralight text-gray-dark text-center"},"You just hit a route that doesn't exist... the sadness.")))},858:function(e,t,a){var r=a(6540);function n(e){return r.createElement("svg",e,r.createElement("path",{d:"M38.251,48L69.192,17.06c2.073-2.073,2.073-5.433,0-7.505c-2.072-2.072-5.432-2.072-7.505,0L28.158,43.085  c-0.49,0.248-0.957,0.552-1.366,0.961c-1.088,1.088-1.59,2.529-1.536,3.955c-0.054,1.424,0.447,2.866,1.536,3.955  c0.409,0.408,0.876,0.713,1.366,0.96l33.529,33.531c2.073,2.071,5.433,2.071,7.505,0c2.073-2.073,2.073-5.432,0-7.506L38.251,48z"}))}n.defaultProps={version:"1.1",x:"0px",y:"0px",viewBox:"0 0 96 96",enableBackground:"new 0 0 96 96",xmlSpace:"preserve"},e.exports=n,n.default=n},3344:function(e,t,a){var r=a(6540);function n(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Dark Theme"),r.createElement("path",{d:"M28.75,25.75a1,1,0,0,0-1-.56A13.06,13.06,0,0,1,13.6,7.9,12.91,12.91,0,0,1,17,2.73,1,1,0,0,0,16.16,1a15.07,15.07,0,1,0,12.37,25.9A1,1,0,0,0,28.75,25.75Z",key:1})])}n.defaultProps={"data-name":"Layer 1",viewBox:"0 0 32 32",x:"0px",y:"0px"},e.exports=n,n.default=n},4745:function(e,t,a){var r=a(6540);function n(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Light Theme"),r.createElement("circle",{cx:"16",cy:"16",r:"7",key:1}),r.createElement("path",{d:"M16,8a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V7A1,1,0,0,0,16,8Z",key:2}),r.createElement("path",{d:"M8.93,10.34a1,1,0,1,0,1.41-1.41L6.81,5.39A1,1,0,0,0,5.39,6.81Z",key:3}),r.createElement("path",{d:"M8,16a1,1,0,0,0-1-1H2a1,1,0,0,0,0,2H7A1,1,0,0,0,8,16Z",key:4}),r.createElement("path",{d:"M8.93,21.66,5.39,25.19a1,1,0,1,0,1.41,1.41l3.54-3.54a1,1,0,0,0-1.41-1.41Z",key:5}),r.createElement("path",{d:"M16,24a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V25A1,1,0,0,0,16,24Z",key:6}),r.createElement("path",{d:"M23.07,21.66a1,1,0,0,0-1.41,1.41l3.54,3.54a1,1,0,0,0,1.41-1.41Z",key:7}),r.createElement("path",{d:"M30,15H25a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Z",key:8}),r.createElement("path",{d:"M22.36,10.64a1,1,0,0,0,.71-.29l3.54-3.54a1,1,0,0,0-1.41-1.41L21.66,8.93a1,1,0,0,0,.71,1.71Z",key:9})])}n.defaultProps={"data-name":"Layer 1",viewBox:"0 0 32 32",x:"0px",y:"0px"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-pages-404-js-aef9d1d37d4e5d913697.js.map