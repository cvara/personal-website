"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[266],{6372:function(e,t,a){a.r(t),a.d(t,{Head:function(){return N},default:function(){return k}});var n=a(6540),r=a(2532),o=a(9594),i=a(7528),l="experience-module--description--69a43",s=a(4164);var c=e=>{let{experience:t,className:a}=e;return n.createElement("div",{className:(0,s.A)(a,"[&:not(:last-child)]:pb-10 print:[&:not(:last-child)]:pb-8 relative pl-4 ml-2 print:pl-0 print:ml-0","flex flex-col")},n.createElement("div",{className:"w-[2px] absolute left-0 top-2 -bottom-2 bg-gradient-to-b from-purple to-teal print:hidden"},n.createElement("div",{className:"w-[12px] h-[12px] rounded-full bg-gradient-to-tr from-purple to-teal absolute top-[-5px] left-[-5px] flex items-center justify-center"},n.createElement("div",{className:"w-[8px] h-[8px] rounded-full bg-purple-light dark:bg-navy"})),n.createElement("div",{className:"w-[8px] h-[2px] bg-teal absolute bottom-[-2px] left-[-3px]"})),n.createElement("div",{className:"shrink-1 flex"},n.createElement("div",{className:"text-xs bg-gradient-to-tr from-purple to-teal bg-clip-text text-transparent font-semibold mb-2"},t.start," - ",t.end)),n.createElement("div",{className:"flex gap-1 mb-4 flex-col items-start"},n.createElement("div",{className:"text-md font-semibold dark:font-bold"},t.title),n.createElement("span",{className:"hidden"},"·"),n.createElement("div",{className:"flex gap-2 items-center max-md:mb-2 flex-wrap"},n.createElement("div",{className:"text-md"},t.companyUrl?n.createElement("a",{href:t.companyUrl,target:"_blank",rel:"noreferrer",className:"text-sm text-purple font-semibold border-b-[2px] border-dashed border-purple/60  hover:text-purple no-underline hover:border-purple print:text-purple"},t.company):n.createElement("div",{className:"text-sm text-purple font-semibold print:text-purple"},t.company)),t.occupation&&n.createElement(n.Fragment,null,"·",n.createElement("div",{className:"text-sm text-gray-dark"},t.occupation)))),n.createElement("div",{dangerouslySetInnerHTML:{__html:t.description},className:(0,s.A)(l,"font-light text-sm")}),t.technologies&&n.createElement("div",{className:"mt-2 text-xs font-normal leading-5 text-gray-dark"},n.createElement("strong",{className:"font-semibold text-navy dark:text-gray-light"},"Tech Stack:"," "),n.createElement("span",{className:"",dangerouslySetInnerHTML:{__html:t.technologies}})),t.diploma&&n.createElement("div",{className:"mt-2 text-xs font-medium dark:font-semibold leading-5",dangerouslySetInnerHTML:{__html:(r=t.diploma,r.replace(/Polytechnic Diploma/gi,(e=>`\n      <div class="${(0,s.A)(l,"relative inline-block group")}">\n        <a role="button" class="cursor-help">\n          ${e}\n        </a>\n        <div class="absolute bottom-full left-0 mb-2 hidden group-hover:inline-block bg-gradient-to-tr from-purple to-teal text-white text-xs rounded py-2 px-2 z-10 w-[50vw] max-w-[360px] shadow shadow-black/60 font-normal leading-4">\n          Degree equivalent to Bachelor and Master based on total number of ECTS credits that correspond to five (5) academic years\n        </div>\n      </div>`)))}}));var r},m=a(8281),d=a.n(m);var p=e=>{let{project:t,className:a}=e;return n.createElement("div",{className:"mb-6 last-of-type:mb-0"},n.createElement("div",{className:"text-base font-medium mb-1 flex gap-2 items-center"},t.title,n.createElement("a",{href:t.url,target:"_blank",rel:"noreferrer",title:"View on GitHub",className:"hover:scale-105"},n.createElement(d(),{height:16,width:16}))),n.createElement("div",{className:"text-sm font-light"},t.description))};var g=e=>{let{children:t,className:a}=e;return n.createElement("div",{className:(0,s.A)("font-bold text-lg mb-6",a)},n.createElement("h3",{className:"inline-block bg-gradient-to-tr from-purple to-teal text-transparent bg-clip-text print:text-purple uppercase"},t))};const h=e=>{let{idx:t,level:a}=e;return n.createElement("div",{className:(0,s.A)("basis-1/4 h-[5px] first-of-type:rounded-l last-of-type:rounded-r",{"bg-gradient-to-tr from-purple to-purple":a>=t,"bg-gray dark:bg-purple-light opacity-25 dark:opacity-10":a<t})})};var f=e=>{let{skills:t,className:a}=e;const r=t.filter((e=>"number"==typeof e.level));return n.createElement("div",{className:"flex justify-left"},n.createElement("div",{className:"grid grow grid-cols-[auto_minmax(0,_1fr)] max-w-[460px] gap-4 mb-8"},r.map((e=>n.createElement(n.Fragment,{key:e.title},n.createElement("div",{className:"font-medium text-right text-sm"},e.title),n.createElement("div",{className:"flex gap-[1px] items-center min-w-0 max-w-[400px]"},new Array(10).fill(null).map(((t,a)=>n.createElement(h,{idx:a+1,level:e.level,key:a})))))))))},u=a(6734),b=a.n(u);a(3825);const v={sm:`(min-width: ${640}px)`,md:`(min-width: ${768}px)`,lg:`(min-width: ${1024}px)`,xl:`(min-width: ${1280}px)`,"2xl":`(min-width: ${1536}px)`};var x=()=>{const e=()=>{if("undefined"!=typeof window)return window.matchMedia(v["2xl"]).matches?"2xl":window.matchMedia(v.xl).matches?"xl":window.matchMedia(v.lg).matches?"lg":window.matchMedia(v.md).matches?"md":window.matchMedia(v.sm).matches?"sm":"below-sm"},{0:t,1:a}=(0,n.useState)(e);return(0,n.useEffect)((()=>{if("undefined"==typeof window)return;const t=()=>a(e),n=Object.keys(v).map((e=>window.matchMedia(v[e])));return n.forEach((e=>e.addEventListener("change",t))),()=>n.forEach((e=>e.removeEventListener("change",t)))}),[]),t};const E=[{title:"Senior Front-end Engineer",occupation:"Full Time",company:"Frontiers",companyUrl:"https://www.frontiersin.org/",start:"Oct 2022",end:"Jan 2024",technologies:"JavaScript (ES2015+), Typescript, React, Next.js, Webpack, Node.js, HTML5, CSS3, et al",description:'Joined the <strong>Product Innovation & Excellence</strong> team to reimagine Research Topic pages, with a sample available on the <a href="https://www.frontiersin.org/research-topics/13377/coronavirus-disease-covid-19-pathophysiology-epidemiology-clinical-management-and-public-health-response/magazine" target="_blank">Covid-19 Research Topic</a> page.'},{title:"Senior Front-end Engineer",occupation:"Full Time",company:"Workable",companyUrl:"https://www.workable.com/",start:"Jan 2022",end:"Oct 2022",technologies:"JavaScript (ES2015+), Typescript, React, Redux, Webpack, Node.js, HTML5, CSS3, et al",description:"Contributed to the <strong>Applicant Tracking System</strong> team, briefly stepping away from the academic publishing industry."},{title:"Senior Front-end Engineer",occupation:"Full Time",company:"Atypon",companyUrl:"https://www.atypon.com/",start:"Jan 2017",end:"Jan 2022",technologies:"JavaScript (ES2015+), Typescript, React, Redux, RxDB, Socket.io, Webpack, Node.js, HTML5, CSS3, GraphQL, Docker, et al",description:"Led the front-end development for Atypon’s Thessaloniki branch, focusing on the creation of <strong>Scitrus</strong>, an AI-powered product for personalized scientific content."},{title:"Front-end Engineer",occupation:"Full Time",company:"Noowit Editions",start:"Jan 2015",end:"Dec 2016",technologies:"JavaScript, Backbone, Marionette, Webpack, Gulp, Node.js, HTML5, CSS3/LESS, et al",description:"Engineered the front-end of Noowit’s <strong>smart publication platform</strong> and developed its layout and theme engines. Built the UI for the publishing tool that enabled content creators to publish digital magazines."},{title:"Front-end Engineer",occupation:"Contractor",company:"IRETETH",project:"HOREA",companyUrl:"https://ireteth.certh.gr/",start:"Feb 2015",end:"Nov 2015",technologies:"JavaScript, Backbone, Marionette, Leaflet, Webpack, Gulp, HTML5, CSS3/LESS, et al",description:"Designed and implemented the UI/UX of HOREA, a <strong>Web GIS</strong> in collaboration with the <strong>University of Thessaly</strong>, including its decision-making platform and front-end for GIS functionalities."},{title:"Front-end Engineer",occupation:"Contractor",company:"Science POD",companyUrl:"https://sciencepod.net/",start:"Oct 2014",end:"Aug 2016",technologies:"JavaScript, Backbone, Marionette, Require.js, Grunt, Node.js, HTML5, CSS3/LESS, et al",description:"Designed and built the front-end and UI/UX for Science POD, including its <strong>web-based editing tool</strong>, diff checker, job flow control, and order placement interface."},{title:"Front-end Engineer",occupation:"Contractor",company:"Noowit",companyUrl:"https://x.com/noowitmags",start:"May 2013",end:"Jul 2013",technologies:"HTML5, CSS3, JavaScript",description:'Developed a <strong>rich WYSIWYG editor</strong> for content authors, allowing them to write and publish articles with advanced editing and media management features. The tool was open-sourced on <a href="https://github.com/cvara/typely" target="_blank">Github</a>.'},{title:"Full-stack Engineer",occupation:"Co-Founder",company:"Noodio",start:"Aug 2011",end:"Dec 2018",technologies:"JavaScript, Backbone, Marionette, Require.js, Grunt, Node.js, HTML5, CSS3/LESS, Java, Groovy, Grails, MySQL, MongoDB, et al",description:'Co-founded Noodio, an <strong>award-winning startup</strong> offering targeted local promotion for musicians. I led the design, development, and optimization of the front-end and UX, and authored the back-end for its initial release. Noodio’s innovative business model and core idea earned the <a href="https://acein.aueb.gr/en/ennovation-competition/" target="_blank">1st prize</a> in the <strong>Innovation & Entrepreneurship</strong> category at the 2015 <a href="https://acein.aueb.gr/en/ennovation-competition/" target="_blank">Ennovation</a> competition. The community-based filtering algorithm at the heart of Noodio was also part of my diploma thesis at the University of Thessaly.'},{title:"Student",company:"University of Thessaly",companyUrl:"https://www.e-ce.uth.gr/",start:"Sep 2004",end:"Sep 2010",diploma:"Polytechnic Diploma in Computer & Communications Engineering (degree: 7.9/10 &middot; Very Good)",description:"As part of my studies at the <strong>Department of Computer & Communications Engineering</strong>, I developed a web application for targeted content promotion using a custom-built <strong>community-based filtering algorithm</strong> for musical content. This project later evolved into <strong>Noodio</strong>, my startup."}],w=[{title:"rxdb-hooks",url:"https://github.com/cvara/rxdb-hooks",description:"React hooks for integrating with RxDB"},{title:"typely",url:"https://github.com/cvara/typely",description:"A rich text editor for the browser inspired by medium"},{title:"tesserae",url:"https://github.com/cvara/tesserae",description:"Animated mosaic backgrounds with HTML5 Canvas"}],y=[{title:"Javascript",level:10},{title:"HTML5 & CSS3",level:10},{title:"Typescript",level:9},{title:"React",level:9},{title:"Next.js",level:8},{title:"Node.js",level:7}],N=()=>n.createElement(i.A,{title:"CV",index:!0});var k=()=>{const e=x(),t="below-sm"===e?22:18;return n.createElement(o.A,null,n.createElement("div",{className:"max-w-[680px] m-auto p-4 pt-2"},n.createElement("div",{className:"flex gap-4 items-center mb-12 flex-col sm:flex-row"},n.createElement("div",{className:"bg-gradient-to-tr from-purple to-teal rounded-full p-[3px] w-[84px] sm:w-[96px] md:w-[96px] print:p-0"},n.createElement(r.S,{src:"../images/profile_pic.jpg",loading:"eager",layout:"fullWidth",quality:95,formats:["auto","webp","avif"],alt:"profile pic",className:"rounded-full overflow-clip print:border-[3px] print:border-purple",__imageData:a(7944)})),n.createElement("div",{className:"flex flex-col items-center sm:items-start"},n.createElement("div",{className:"text-xl sm:text-2xl md:text-3xl font-semibold md:font-medium mb-1"},"Christoforos Varakliotis"),n.createElement("div",{className:"text-lg sm:text-xl mb-1 flex flex-col sm:flex-row gap-3 items-center font-light"},"Web Engineer",n.createElement("div",{className:(0,s.A)("flex items-center",{"gap-2":"below-sm"!==e,"gap-4":"below-sm"===e})},n.createElement("a",{href:"https://github.com/cvara",target:"_blank",rel:"noreferrer",title:"GitHub",className:"hover:scale-105"},n.createElement(d(),{width:t,height:t})),n.createElement("a",{href:"https://www.linkedin.com/in/christoforosvarakliotis/",target:"_blank",rel:"noreferrer",title:"LinkedIn",className:"hover:scale-105"},n.createElement(b(),{width:t,height:t})))),n.createElement("div",{className:"hidden print:flex gap-2 text-purple"},n.createElement("a",{className:"text-sm font decoration-2 decoration-dashed decoration-purple/80 underline text-purple hover:decoration-purple hover:decoration-dashed hover:decoration-2 hover:underline hover:text-purple",href:"mailto:c.varakliotis@gmail.com"},"c.varakliotis@gmail.com"),"·",n.createElement("a",{className:"text-sm font decoration-2 decoration-dashed decoration-purple/80 underline text-purple hover:decoration-purple hover:decoration-dashed hover:decoration-2 hover:underline hover:text-purple",href:"https://christoforos.me"},"christoforos.me")))),n.createElement("div",{className:"mb-14 font-light"},n.createElement("p",{className:"mb-6 text-lg font-normal dark:font-medium leading-7"},"Full-stack web engineer with a strong focus on front-end technologies and co-founder of a web-based startup, I’ve been professionally immersed in the web ecosystem since 2011."),n.createElement("p",{className:"mb-3  leading-7"},"My expertise lies in building and testing responsive user interfaces while solving algorithmic challenges with a focus on efficiency and performance. With a passion for design, I’m deeply involved in improving user experiences across the projects I work on."),n.createElement("p",{className:"mb-3  leading-7"},"I am always eager to learn and apply software design patterns to write clean, idiomatic, and maintainable code. I have a particular passion for JavaScript, open web standards, and functional programming."),n.createElement("p",{className:"mb-3  leading-7"},"I hold a Polytechnic Diploma in Computer & Communications Engineering from the University of Thessaly, earned in 2010.")),n.createElement("div",{className:"mb-16"},n.createElement(g,null,"The Road So Far"),n.createElement("div",{className:"flex flex-col"},E.map(((e,t)=>n.createElement(c,{key:t,experience:e}))))),n.createElement("div",{className:"mb-12"},n.createElement(g,null,"Featured Hobby Projects"),n.createElement("div",{className:"flex flex-col"},w.map(((e,t)=>n.createElement(p,{key:t,project:e}))))),n.createElement("div",{className:"mb-12 print:hidden"},n.createElement(g,null,"Featured Tech Skills"),n.createElement(f,{skills:y})),n.createElement("div",{className:"mb-12"},n.createElement(g,null,"Tech Skills Overview"),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("div",null,n.createElement("div",{className:"text-base font-medium dark:font-semibold mb-2"},"Web Development"),n.createElement("div",{className:"flex flex-col gap-2 text-sm ml-0"},n.createElement("div",{className:"font-light"},n.createElement("strong",{className:"text-purple dark:text-purple font-light"},"Languages ·")," ","Javascript, Typescript, HTML5, CSS3, Java (Servlets/JSP), Groovy"),n.createElement("div",{className:"font-light"},n.createElement("strong",{className:"text-purple dark:text-purple font-light"},"Frameworks & Libraries ·")," ","React, Redux, Next.js, Express, RxJS, Backbone, Marionette, Grails"),n.createElement("div",{className:"font-light"},n.createElement("strong",{className:"text-purple dark:text-purple font-light"},"CSS Preprocessors & Tools ·")," ","Tailwind, Less, Sass, Webpack, Rollup, Gulp, Grunt"),n.createElement("div",{className:"font-light"},n.createElement("strong",{className:"text-purple dark:text-purple font-light"},"Technologies ·")," ","Node.js, REST, GraphQL, Socket.io, Web Workers, Service Workers, PWA"))),n.createElement("div",null,n.createElement("div",{className:"text-base font-medium dark:font-semibold mb-2"},"Testing & Automation"),n.createElement("div",{className:"text-sm ml-0 font-light"},"Jest, React Testing Library, Cypress, Karma, Mocha, Chai, Sinon, Istanbul")),n.createElement("div",null,n.createElement("div",{className:"text-base font-medium dark:font-semibold mb-2"},"Databases"),n.createElement("div",{className:"text-sm ml-0 font-light"},"RxDB, PouchDB, MySQL, PostgreSQL, MongoDB, Couchbase")),n.createElement("div",null,n.createElement("div",{className:"text-base font-medium dark:font-semibold mb-2"},"General Programming"),n.createElement("div",{className:"text-sm ml-0 font-light"},"C, Java, Javascript, Groovy, Perl, PHP, VBA, MIPS Assembly, VHDL")),n.createElement("div",null,n.createElement("div",{className:"text-base font-medium dark:font-semibold mb-2"},"DevOps & Version Control"),n.createElement("div",{className:"text-sm ml-0 font-light"},"Git, Docker")))),n.createElement("div",null,n.createElement(g,null,"Honors & Awards"),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("div",{className:"flex flex-col gap-1"},n.createElement("div",{className:"font-medium dark:font-semibold"},"Scholarship from the Greek National Foundation of Scholarships"),n.createElement("div",{className:"text-sm font-light"},"Awarded for ranking 1st among students in the Department of Computer & Communications Engineering at the University of Thessaly for two consecutive academic years (2004 & 2005).")),n.createElement("div",{className:"flex flex-col gap-1"},n.createElement("div",{className:"font-medium dark:font-semibold"},"1st Prize · Ennovation 2015"),n.createElement("div",{className:"text-sm font-light"},"Noodio received 1st place in the Innovation & Entrepreneurship category at the 2015 Ennovation competition, recognizing its innovative business model and core idea."))))))}},7944:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/5c1e0dcb180acefe33d852b7c4884e72/ed193/profile_pic.jpg","srcSet":"/static/5c1e0dcb180acefe33d852b7c4884e72/81353/profile_pic.jpg 750w,\\n/static/5c1e0dcb180acefe33d852b7c4884e72/ed193/profile_pic.jpg 821w","sizes":"100vw"},"sources":[{"srcSet":"/static/5c1e0dcb180acefe33d852b7c4884e72/985f4/profile_pic.avif 750w,\\n/static/5c1e0dcb180acefe33d852b7c4884e72/254d1/profile_pic.avif 821w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/5c1e0dcb180acefe33d852b7c4884e72/c6ce9/profile_pic.webp 750w,\\n/static/5c1e0dcb180acefe33d852b7c4884e72/ef5de/profile_pic.webp 821w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.046285018270402}')}}]);
//# sourceMappingURL=component---src-pages-cv-js-f647f8387edf8f67b805.js.map