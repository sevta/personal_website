(function(t){function e(e){for(var o,s,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0c8dd410"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,n[1](c)}a[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"149f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Menu"),n("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper fixed top-0 left-0 w-full h-screen"},[n("router-view"),n("Footer")],1),n("ScrollIndicator")],1)},r=[],s=n("5530"),i=new o["a"],l=n("2f62"),c=n("5744"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar fixed top-0 left-0 w-full py-5 z-30 md:py-10 bg-white md:bg-transparent"},[n("div",{staticClass:"container mx-auto flex justify-between items-center"},[n("div",{staticClass:"logo capitalize font-sans text-sm md:text-xl"},[t._v("S.A saputra")]),n("div",{staticClass:"navbar_menu_container text-sm md:text-md flex capitalize font-sans"},[n("div",{staticClass:"navlist cursor-pointer",on:{click:t.toggleMenu}},[t._v("menu")])])])])},f=[],d={methods:{toggleMenu:function(){this.$store.commit("toggleMenu")}}},p=d,m=n("2877"),h=Object(m["a"])(p,u,f,!1,null,null,null),g=h.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer py-10 text-white w-full bg-gray-900"},[n("div",{staticClass:"container mx-auto h-full"},[n("div",{staticClass:"row h-full flex justify-end items-end"},[n("div",{staticClass:"footer-text font-sans"},[t._v(" Footer "),n("span",[t._v(".")])])])])])}],y=(n("f2db"),{}),x=Object(m["a"])(y,v,b,!1,null,"87ecb230",null),w=x.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroll-indicator flex items-center"},[n("div",{staticClass:"bullet"}),n("div",{staticClass:"scroll-text text-xs font-mono capitalize"},[t._v("scroll")])])}],S=n("a5cf"),j={data:function(){return{animateBulletToTop:!1}},mounted:function(){this.attachEventBus()},methods:{attachEventBus:function(){var t=this;i.$on("ON_SCROLL",(function(e){var n=e.offset.y,o=document.querySelector(".scroll-content").offsetHeight-window.innerHeight;console.log("y",n,n/o*100),t.animateBullet(n/o*100)}))},animateBullet:function(t){var e=document.querySelector(".bullet");document.querySelector(".scroll-indicator");console.log(t>250,t),0!=t?S["b"].to(e,.3,{x:0,width:12,left:"".concat(t,"%")}):S["b"].to(e,.4,{x:"-13vh"})}}},O=j,M=(n("b5d9"),Object(m["a"])(O,C,_,!1,null,"d3940496",null)),k=M.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},[t.toggleMenu?n("div",{staticClass:"menu fixed w-full bg-gray-900 text-white p-10 h-screen fixed top-0 left-0 z-50"},[n("div",{staticClass:"close-container w-full fixed top-0 left-0 px-20 pt-10 flex justify-end"},[n("div",{staticClass:"text-sm font-bold capitalize cursor-pointer text-white",on:{click:t.closeMenu}},[t._v("close")])])]):t._e()])},E=[],I={computed:Object(s["a"])({},Object(l["b"])(["toggleMenu"])),methods:{closeMenu:function(){this.$store.commit("toggleMenu")},beforeEnter:function(t){S["b"].set(t,{scale:.5,rotate:20,autoAlpha:0})},enter:function(t,e){S["b"].to(t,.2,{scale:1,rotate:0,autoAlpha:1,onComplete:function(){e()}})},leave:function(t,e){var n=new S["a"]({onComplete:function(){e()}});n.to(t,.3,{width:"40vw",height:"40vw",borderRadius:"50%"}).to(t,.4,{x:"150%",Y:"-20%",scale:.5,autoAlpha:0})}}},$=I,B=Object(m["a"])($,A,E,!1,null,null,null),q=B.exports,z={data:function(){return{smoothScrollbarInstance:null}},components:{Navbar:g,Footer:w,ScrollIndicator:k,Menu:q},computed:Object(s["a"])({},Object(l["b"])(["toggleMenu","scrollBarInstance"])),mounted:function(){this.initScrollbar()},methods:{initScrollbar:function(){this.$store.commit("setSmoothScrollbar",this.$refs.scrollWrapper)}}},P=z,R=(n("5c0b"),Object(m["a"])(P,a,r,!1,null,null,null)),L=R.exports,N=(n("d3b7"),n("8c4f")),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"header w-full"},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"heading-text"},[t._v("Believes in perfection by design and performance by default.")]),n("div",{staticClass:"heading-img-container"},[n("div",{staticClass:"heading-img heading-img-1"},[n("img",{attrs:{src:t.headingImg[0]}})]),n("div",{staticClass:"heading-img heading-img-2"},[n("img",{attrs:{src:t.headingImg[1]}})])])])]),n("div",{staticClass:"section-2"},[n("div",{staticClass:"container flex justify-center mx-auto"},[n("div",{staticClass:"row w-full flex flex-col md:flex-row justify-center"},[n("div",{staticClass:"col w-full md:w-1/5 p-3"},[n("div",{staticClass:"font-mono mb-6"},[t._v("Skills")]),t._l(t.skills,(function(e,o){return n("div",{key:o,staticClass:"font-sans text-2xl capitalize"},[t._v(t._s(e))])}))],2),t._m(0)])])])])},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col w-full md:w-1/3 p-3"},[n("div",{staticClass:"font-mono mb-6"},[t._v("About Me")]),n("div",[t._v(" Rezo Zero is a graphic and digital studio that designs and develops unique brand identities and tailor-made digital solutions. At the heart of its approach is the constant search for the juncture between aesthetic beauty and technical performance. Rezo Zero envisions each of its creations as a singular piece at the service of each client’s communication strategy while introducing elements of the avant-garde. ")])])}],J={name:"Home",data:function(){return{headingImg:["https://images.pexels.com/photos/2315712/pexels-photo-2315712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"],skills:["javascript","SCSS","Sleep","React Js","Vue Js","Node Js"]}},mounted:function(){this.attachEventBus(),this.runMountAnimation()},methods:{runParallax:function(t,e,n){t.style.transform="translate3d(0, ".concat(e*n,"px, 0)")},attachEventBus:function(){var t=this;i.$on("ON_SCROLL",(function(e){var n=e.offset.y,o=(document.querySelector(".heading-img-1"),document.querySelector(".heading-img-1 img")),a=(document.querySelector(".heading-img-2"),document.querySelector(".heading-img-2 img"));t.runParallax(o,n,.2),t.runParallax(a,n,.2)}))},runMountAnimation:function(){var t=new S["a"],e=new S["a"],n=document.querySelectorAll(".navlist"),o=document.querySelector(".logo"),a=document.querySelectorAll(".heading-img");S["b"].set(n,{y:30,autoAlpha:0}),S["b"].set(a,{autoAlpha:1}),S["b"].set(o,{autoAlpha:0,y:30}),e.staggerFrom(a,1.1,{height:0,autoAlpha:0},.3),S["b"].to(o,.7,{autoAlpha:1,y:0}),t.staggerTo(n,.7,{y:0,autoAlpha:1},.1)}}},H=J,W=(n("b75ac"),Object(m["a"])(H,T,F,!1,null,"6a672678",null)),Z=W.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-wrapper"},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"text-2xl uppercase font-bold"},[t._v("components")]),n("div",{staticClass:"gallery-container w-full"},[n("div",{staticClass:"row"},t._l(12,(function(e,o){return n("div",{key:o,staticClass:"gallery-item",on:{click:function(e){return t.onItemClick(e)}}},[t._v(" item "+t._s(o)+" "),n("div",{staticClass:"cursor-pointer",on:{click:function(e){return e.stopPropagation(),t.onItemClose(e)}}},[t._v("Close")])])})),0)])])])},Y=[],D=(n("99af"),{data:function(){return{target:null}},computed:Object(s["a"])({},Object(l["b"])(["scrollBarInstance"])),mounted:function(){},methods:{onItemClose:function(){document.querySelector(".scroll-wrapper").style.zIndex="auto",document.body.style.overflow="",this.target.style.transform="translate(0, 0)",this.target.style.borderRadius="30px",this.target.style.position="",this.target.style.top="0px",this.target.style.left="0px",this.target.style.margin="0px 0px 30px 30px",this.target.style.width="",this.target.style.height="",this.target.style.zIndex=""},onItemClick:function(t){var e=t.target;this.target=e;var n={y:e.getBoundingClientRect().y,x:e.getBoundingClientRect().x};document.querySelector(".scroll-wrapper").style.zIndex=200,document.body.style.overflow="hidden",this.target.style.transform="translate(".concat(-1*n.x,"px, ").concat(-1*n.y,"px)"),this.target.style.position="fixed",this.target.style.borderRadius="0px",this.target.style.top=n.y+"px",this.target.style.left=n.x+"px",this.target.style.margin="0px",this.target.style.width="100vw",this.target.style.height="100vh",this.target.style.zIndex="200",this.scrollBarInstance.scrollTo(0,0,300)}}}),G=D,K=(n("cabd"),Object(m["a"])(G,V,Y,!1,null,"fc56efd0",null)),Q=K.exports;o["a"].use(N["a"]);var U=[{path:"/",name:"Home",component:Z},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/components",name:"Components",component:Q}],X=new N["a"]({routes:U}),tt=X;o["a"].use(l["a"]);var et=new l["a"].Store({state:{toggleMenu:!1,scrollBarInstance:null},mutations:{toggleMenu:function(t){t.toggleMenu=!t.toggleMenu},setSmoothScrollbar:function(t,e){t.scrollBarInstance=c["a"].init(e),t.scrollBarInstance.addListener((function(t){i.$emit("ON_SCROLL",t)}))}},actions:{},modules:{}}),nt=n("9483");Object(nt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("ba8c");o["a"].config.productionTip=!1,new o["a"]({router:tt,store:et,render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"98b6":function(t,e,n){},"9c0c":function(t,e,n){},b5d9:function(t,e,n){"use strict";var o=n("f68e"),a=n.n(o);a.a},b75ac:function(t,e,n){"use strict";var o=n("eaf1"),a=n.n(o);a.a},ba8c:function(t,e,n){},cabd:function(t,e,n){"use strict";var o=n("98b6"),a=n.n(o);a.a},eaf1:function(t,e,n){},f2db:function(t,e,n){"use strict";var o=n("149f"),a=n.n(o);a.a},f68e:function(t,e,n){}});
//# sourceMappingURL=app.41568314.js.map