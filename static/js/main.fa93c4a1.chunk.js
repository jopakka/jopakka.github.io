(this["webpackJsonpmy-homepage"]=this["webpackJsonpmy-homepage"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"a":{"img":{"alt":"Nice picture of me"},"texts":["I am second year student from Metropolia University of Applied Sciences with mobile solutions major. My interest of coding started few years ago, while my friend was studying game development and we made few games to game jams together. Then after a while I decided that I want to apply study programming and in our first year I liked mobile development most, so I chose that major.","In first year in Smart IoT-devices we had C-programming and our project was to program Arduino-bot to follow line track, battle on sumo-arena and solve simple maze. On Mobile health application we made Android app with Java. Our project there was food diary. On web techniques and digital media, we had html, CSS, and JavaScript. Our project there was poker and blackjack site, where you could play against simple \u201cai\u201d. On game development we made game with Unity and C#. We made third person shooter, where player fight against mafia.","In this second year we had Object-Oriented Programming and Data communication where we did Android app using Kotlin. There our project was word quiz app, where user guesses words from one language to another. Then we study basic concepts of web technology, which includes responsive design with html and CSS, and back-end REST api with Node.js."]},"c":[{"title":"MeFoodDiary","url":"https://github.com/jopakka/MeFoodDiary","desc":"Food diary. School project","img":"./res/mefooddiary.png"},{"title":"Zumo bot","url":"https://github.com/jopakka/Zumo-bot-project","desc":"Simple bot that can follow line, battle in sumo and solve simple maze. School project","img":"./res/zumo.png"},{"title":"GamerVibe website","url":"https://github.com/jopakka/GamerVibe-Website","desc":"Instagram for gamers, a place to share in game images and gamer persona. School project","img":"./res/gamervibe.png"},{"title":"Kenraali bot","url":"https://github.com/jopakka/Kenraali-bot","desc":"Discord bot. For fun","img":"./res/kenraalibot.png"},{"title":"Jack The Avenger","url":"https://github.com/jopakka/Jack-The-Avenger","desc":"You play as a Jack and you try to avenge for local mafia for what they did for your father. School project","img":"./res/jacktheavenger.png"},{"title":"Guess That Word","url":"https://github.com/jopakka/word-quiz-project","desc":"Android game where user choose his/her language and language which he/she wants to learn, then game choose random word and make answers that are close to that word. School project","img":"./res/guessThatWord.png"}],"b":{"facebook":"https://www.facebook.com/joonasn","github":"https://github.com/jopakka","email":"mailto:joonas.niemi9@gmail.com","linkedin":"https://www.linkedin.com/in/joonasniemi"}}')},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),o=n.n(i),r=n(6),c=n.n(r),s=(n(12),n(13),n(3)),l=(n(14),n(15),function(e){var t=e.link,n=e.clickEvt;return Object(a.jsx)("li",{className:"App-NavLinkItem",children:Object(a.jsx)("a",{href:t.url,onClick:n,children:t.title})})}),d=(n(16),function(e){var t=e.links,n=e.clickEvt,i=e.className;return Object(a.jsx)("div",{className:"App-NavLinks",children:Object(a.jsx)("ul",{className:i,children:t.map((function(e){return Object(a.jsx)(l,{clickEvt:n,link:e},t.indexOf(e))}))})})}),h=n(2),m=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},j=function(){var e=Object(i.useState)(m()),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){var e=function(){a(m())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},u=function(e){var t=e.pageInfo,n=e.links,o=e.navId,r=j().width,c=Object(i.useState)(!1),l=Object(s.a)(c,2),m=l[0],u=l[1];return r>=780&&m&&u(!1),Object(a.jsxs)("div",{id:o,className:"App-Header",children:[Object(a.jsx)("a",{href:t.url,onClick:function(){return u(!1)},children:t.title}),Object(a.jsx)(h.a,{className:"App-Bars",onClick:function(){return u(!m)}}),Object(a.jsx)(d,{links:n,clickEvt:function(){return u(!1)},className:m?"visible":null})]})},p=(n(17),n(18),function(e){var t=e.id,n=e.img,i=e.imgInfo,o=e.texts;return Object(a.jsxs)("div",{id:t,className:"App-About",children:[Object(a.jsx)("h1",{children:"About me"}),Object(a.jsx)("img",{className:"about-image",src:n,alt:i.alt,width:300,height:300}),Object(a.jsx)("div",{className:"about-text",children:o.map((function(e){return Object(a.jsx)("p",{children:e},o.indexOf(e))}))})]})});p.defaultProps={img:{url:"https://randomuser.me/api/portraits/thumb/men/1.jpg",alt:"Picture from randomuser.me"}};var b=p,g=(n(19),function(e){var t=e.title,n=e.desc,o=e.img,r=Object(i.useState)(!0),c=Object(s.a)(r,2),l=c[0],d=c[1];return Object(a.jsxs)("div",{className:"Project",onClick:function(){return d(!l)},onMouseEnter:function(){return d(!1)},onMouseLeave:function(){return d(!0)},children:[Object(a.jsx)("img",{src:o,alt:"Project background",width:280,height:280}),Object(a.jsxs)("div",{className:l?"Project-Content":"Project-Content Scroll",children:[Object(a.jsx)("h3",{children:t}),Object(a.jsx)("p",{className:l?"Project-Content-Para-Hidden":null,children:n})]})]})}),f=(n(20),function(e){var t=e.id,n=e.title,i=e.projects,o=j().width;return Object(a.jsxs)("div",{id:t,className:"App-Projects",children:[Object(a.jsx)("h1",{children:n}),Object(a.jsx)("p",{style:{textAlign:"center",display:o<780?"block":"none"},children:"(Click image to show more info)"}),Object(a.jsx)("div",{className:"project-container",children:i.map((function(e){return Object(a.jsx)(g,{title:e.title,desc:e.desc,img:e.img?e.img:"https://picsum.photos/300"},i.indexOf(e))}))})]})});f.defaultProps={title:"Projects"};var O=f,w=n.p+"static/media/300_300.285ea9d0.jpg",x=(n(21),function(e){var t=e.id,n=e.contacts;return Object(a.jsxs)("div",{id:t,className:"App-Contact",children:[Object(a.jsx)("h1",{children:"Contact"}),Object(a.jsxs)("div",{className:"Contact-Container",children:[Object(a.jsx)("a",{className:"Contact-Icon light",href:n.linkedin,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(h.e,{})}),Object(a.jsx)("a",{className:"Contact-Icon light",href:n.github,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(h.d,{})}),Object(a.jsx)("a",{className:"Contact-Icon light",href:n.facebook,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(h.c,{})}),Object(a.jsx)("a",{className:"Contact-Icon light",href:n.email,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(h.b,{})})]})]})}),k=n(4),v=function(){return Object(a.jsx)("div",{className:"App-Main light",children:Object(a.jsxs)("div",{className:"Main-Container",children:[Object(a.jsx)(b,{id:"about",imgInfo:k.a.img,img:w,texts:k.a.texts}),Object(a.jsx)(O,{id:"projects",projects:k.c}),Object(a.jsx)(x,{id:"contact",contacts:k.b})]})})},y=(n(22),function(e){var t=e.copyText;return Object(a.jsx)("div",{className:"App-Footer",children:Object(a.jsxs)("p",{children:["\xa9 ",t]})})}),N={pageInfo:{title:"Joonas Niemi",url:"#"},links:[{url:"#about",title:"About me"},{url:"#projects",title:"Projects"},{url:"#contact",title:"Contact"}]},C={crText:"Joonas Niemi 2020"},I=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{pageInfo:N.pageInfo,links:N.links}),Object(a.jsx)(v,{}),Object(a.jsx)(y,{copyText:C.crText})]})};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.fa93c4a1.chunk.js.map