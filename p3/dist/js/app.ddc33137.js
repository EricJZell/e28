(function(e){function t(t){for(var r,u,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-05559383":"4e8503ee","chunk-2aca00ab":"9a290e14","chunk-2d0cf382":"fee99bb7","chunk-360a8c7b":"6a972069","chunk-3620d1aa":"0a99938c","chunk-b6717734":"83fff8c2","chunk-2d0aa9e3":"8561212f","chunk-660fedfa":"4215151a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0091":function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return o}));var o=n("bc3a").create({baseURL:null!==(r="http://e28-api.ericjzell.com")&&void 0!==r?r:"http://e28-api.ericjzell.loc",responseType:"json",withCredentials:!0})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"page-title"},[e._v("Pickin' Tunes")]),n("h2",{staticClass:"link"},[e._v(" Some of my favorite finger picked guitar style songs ")])])],1),n("h2",{staticClass:"link",attrs:{id:"login-link"}},[n("router-link",{attrs:{to:"/account"}},[e._v(e._s(e.accountLinkText))])],1),n("div",{staticClass:"body"},[n("router-view")],1),n("div",{staticClass:"footer"},[e.isAdmin?n("router-link",{attrs:{to:"/blogs/new"}},[n("h2",{staticClass:"link"},[e._v(" New Blog ")])]):e._e()],1)])},a=[],u={name:"App",computed:{accountLinkText:function(){return this.$store.state.user?"My Account":"Login"},isAdmin:function(){return this.$store.getters.isAdmin}},mounted:function(){this.$store.dispatch("fetchBlogs"),this.$store.dispatch("authUser")}},i=u,c=(n("5c0b"),n("2877")),s=Object(c["a"])(i,o,a,!1,null,null,null),l=s.exports,f=n("8c4f"),d=(n("45fc"),n("d3b7"),n("96cf"),n("1da1")),p=(n("7db0"),n("caad"),n("2f62")),h=n("0091");r["a"].use(p["a"]);var m=["jill@harvard.edu"],b=new p["a"].Store({state:{blogs:[],user:null},mutations:{setBlogs:function(e,t){e.blogs=t},setUser:function(e,t){e.user=t}},actions:{fetchBlogs:function(e){h["a"].get("blog").then((function(t){e.commit("setBlogs",t.data.blog)}))},authUser:function(e){return new Promise((function(t){h["a"].post("auth").then((function(n){n.data.authenticated?e.commit("setUser",n.data.user):e.commit("setUser",!1),t()}))}))}},getters:{getBlogById:function(e){return function(t){return e.blogs.find((function(e){return e.id==t}))||{}}},isAdmin:function(e){return e.user&&m.includes(e.user.email.toLowerCase())}}}),g=[{path:"/",component:function(){return n.e("chunk-660fedfa").then(n.bind(null,"8ab4"))}},{path:"/blogs",component:function(){return n.e("chunk-660fedfa").then(n.bind(null,"8ab4"))}},{path:"/blogs/new",component:function(){return Promise.all([n.e("chunk-2aca00ab"),n.e("chunk-360a8c7b")]).then(n.bind(null,"4408"))},meta:{requiresAdmin:!0}},{path:"/blogs/:id",component:function(){return Promise.all([n.e("chunk-2aca00ab"),n.e("chunk-b6717734")]).then(n.bind(null,"8339"))},props:!0},{path:"/blogs/edit/:id",component:function(){return Promise.all([n.e("chunk-2aca00ab"),n.e("chunk-3620d1aa")]).then(n.bind(null,"e2f0"))},props:!0,meta:{requiresAdmin:!0}},{path:"/account",component:function(){return n.e("chunk-05559383").then(n.bind(null,"8fdc"))}},{path:"/register",component:function(){return Promise.all([n.e("chunk-2aca00ab"),n.e("chunk-2d0cf382")]).then(n.bind(null,"637f"))}},{path:"/denied",component:function(){return n.e("chunk-2d0aa9e3").then(n.bind(null,"127c"))}}],v=new f["a"]({routes:g,mode:"history"});v.beforeEach(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,r){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=t.matched.some((function(e){return e.meta.requiresAdmin})),a=function(){o&&!b.getters.isAdmin?r("/denied"):r()},null===b.state.user?b.dispatch("authUser").then((function(){a()})):a();case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var k=v;r["a"].config.productionTip=!1,r["a"].use(f["a"]),new r["a"]({store:b,router:k,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.ddc33137.js.map