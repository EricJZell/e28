(function(t){function e(e){for(var r,a,c=e[0],i=e[1],s=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},u=[];function a(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-05559383":"f69bd5c3","chunk-1fe269d2":"fb3912a3","chunk-2aca00ab":"6344401a","chunk-2d0cf382":"4381fb07","chunk-360a8c7b":"0bc2cb91","chunk-3620d1aa":"65637678","chunk-fd2f7994":"7f87d5da","chunk-2d0aa9e3":"8e0a7bac"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=a(t);var s=new Error;u=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+u+")",s.name="ChunkLoadError",s.type=r,s.request=u,n[1](s)}o[t]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0091":function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return o}));var o=n("bc3a").create({baseURL:null!==(r="http://e28-api.ericjzell.com")&&void 0!==r?r:"http://e28-api.ericjzell.loc",responseType:"json",withCredentials:!0})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"page-title"},[t._v("Pickin' Tunes")]),n("h2",{staticClass:"link"},[t._v(" Some of my favorite finger picked guitar style songs ")])])],1),n("h2",{staticClass:"link",attrs:{id:"login-link"}},[n("router-link",{attrs:{to:"/account"}},[t._v(t._s(t.accountLinkText))])],1),n("div",{staticClass:"body"},[n("router-view")],1),n("div",{staticClass:"footer"},[n("router-link",{attrs:{to:"/blogs/new"}},[n("h2",{staticClass:"link"},[t._v(" New Blog ")])])],1)])},u=[],a={name:"App",computed:{accountLinkText:function(){return this.$store.state.user?"My Account":"Login"}},mounted:function(){this.$store.dispatch("fetchBlogs"),this.$store.dispatch("authUser")}},c=a,i=(n("5c0b"),n("2877")),s=Object(i["a"])(c,o,u,!1,null,null,null),l=s.exports,f=n("8c4f"),d=(n("45fc"),n("d3b7"),n("96cf"),n("1da1")),h=(n("7db0"),n("2f62")),p=n("0091");r["a"].use(h["a"]);var b=new h["a"].Store({state:{blogs:[],user:null},mutations:{setBlogs:function(t,e){t.blogs=e},setUser:function(t,e){t.user=e}},actions:{fetchBlogs:function(t){p["a"].get("blog").then((function(e){t.commit("setBlogs",e.data.blog)}))},authUser:function(t){return new Promise((function(e){p["a"].post("auth").then((function(n){n.data.authenticated?t.commit("setUser",n.data.user):t.commit("setUser",!1),e()}))}))}},getters:{getBlogById:function(t){return function(e){return t.blogs.find((function(t){return t.id==e}))||{}}}}}),m=[{path:"/",component:function(){return n.e("chunk-1fe269d2").then(n.bind(null,"8ab4"))}},{path:"/blogs",component:function(){return n.e("chunk-1fe269d2").then(n.bind(null,"8ab4"))}},{path:"/blogs/new",component:function(){return Promise.all([n.e("chunk-2aca00ab"),n.e("chunk-360a8c7b")]).then(n.bind(null,"4408"))},meta:{requiresAuth:!0}},{path:"/blogs/:id",component:function(){return Promise.all([n.e("chunk-2aca00ab"),n.e("chunk-fd2f7994")]).then(n.bind(null,"8339"))},props:!0},{path:"/blogs/edit/:id",component:function(){return Promise.all([n.e("chunk-2aca00ab"),n.e("chunk-3620d1aa")]).then(n.bind(null,"e2f0"))},props:!0,meta:{requiresAuth:!0}},{path:"/account",component:function(){return n.e("chunk-05559383").then(n.bind(null,"8fdc"))}},{path:"/register",component:function(){return Promise.all([n.e("chunk-2aca00ab"),n.e("chunk-2d0cf382")]).then(n.bind(null,"637f"))}},{path:"/denied",component:function(){return n.e("chunk-2d0aa9e3").then(n.bind(null,"127c"))}}],g=new f["a"]({routes:m,mode:"history"});g.beforeEach(function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e,n,r){var o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=e.matched.some((function(t){return t.meta.requiresAuth})),u=function(){o&&!b.state.user?r("/denied"):r()},null===b.state.user?b.dispatch("authUser").then((function(){u()})):u();case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}());var v=g;r["a"].config.productionTip=!1,r["a"].use(f["a"]),new r["a"]({store:b,router:v,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.b7b78d37.js.map