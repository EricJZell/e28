(function(t){function e(e){for(var r,u,a=e[0],i=e[1],s=e[2],d=0,f=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);h&&h(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},u={app:0},o={app:0},c=[];function a(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-0027ef80":"00b42e74","chunk-1cfe44e6":"9842ff17","chunk-2d0a4b45":"2638d497","chunk-2d0aa9e3":"465b045c","chunk-53491c1a":"b174c942","chunk-5fd00f59":"a6387c8f","chunk-6ddeb97a":"d9241055","chunk-af4a392a":"2da832fb"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-af4a392a":1};u[t]?e.push(u[t]):0!==u[t]&&n[t]&&e.push(u[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0027ef80":"31d6cfe0","chunk-1cfe44e6":"31d6cfe0","chunk-2d0a4b45":"31d6cfe0","chunk-2d0aa9e3":"31d6cfe0","chunk-53491c1a":"31d6cfe0","chunk-5fd00f59":"31d6cfe0","chunk-6ddeb97a":"31d6cfe0","chunk-af4a392a":"f705d645"}[t]+".css",o=i.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var s=c[a],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return e()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){s=f[a],d=s.getAttribute("data-href");if(d===r||d===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete u[t],h.parentNode.removeChild(h),n(c)},h.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(h)})).then((function(){u[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=a(t);var f=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+u+")",f.name="ChunkLoadError",f.type=r,f.request=u,n[1](f)}o[t]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var h=d;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0091":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));n("7db0"),n("c975"),n("a434"),n("b64b");var r,u=n("d4ec"),o=n("bee2"),c=function(){function t(){Object(u["a"])(this,t);var e=localStorage.getItem("cart");this.items=e?JSON.parse(e):[]}return Object(o["a"])(t,[{key:"getItems",value:function(){return this.items}},{key:"count",value:function(){for(var t=0,e=0,n=Object.keys(this.items);e<n.length;e++){var r=n[e];t+=this.items[r].quantity}return t}},{key:"update",value:function(){localStorage.setItem("cart",JSON.stringify(this.items))}},{key:"add",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this.getItem(t);n?n.quantity+=e:this.items.push({id:t,quantity:e}),this.update()}},{key:"remove",value:function(t){var e=this.getItem(t),n=this.items.indexOf(e);e&&(this.items.splice(n,1),this.update())}},{key:"getItem",value:function(t){return this.items.find((function(e){var n=e.id;return n===t}))||null}}]),t}(),a=n("bc3a").create({baseURL:null!==(r="https://e28-api.hesweb.xyz")&&void 0!==r?r:"http://e28-api.ericjzell.loc",responseType:"json",withCredentials:!0}),i=new c},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"ZipFoods logo",id:"logo",src:n("58dd")}}),r("nav",[r("ul",[r("li",t._l(t.links,(function(e){return r("router-link",{key:e,attrs:{to:t.paths[e],exact:"","data-test":e+"-link"}},["cart"==e?r("span",{attrs:{"data-test":"cart-count"}},[t._v("("+t._s(t.cartCount)+")")]):t._e(),t._v(" "+t._s(e)+" ")])})),1)])]),r("router-view")],1)},o=[],c=n("0091"),a={name:"App",data:function(){return{links:["home","products","categories","add a product","account","cart"],paths:{home:"/",products:"/products",categories:"/categories","add a product":"/products/new",account:"/account",cart:"/cart"}}},mounted:function(){this.$store.dispatch("fetchProducts"),this.$store.commit("setCartCount",c["b"].count()),this.$store.dispatch("authUser")},computed:{cartCount:function(){return this.$store.state.cartCount},products:function(){return this.$store.state.products}}},i=a,s=(n("5c0b"),n("2877")),d=Object(s["a"])(i,u,o,!1,null,null,null),f=d.exports,h=n("8c4f"),l=(n("45fc"),n("d3b7"),n("96cf"),n("1da1")),p=(n("4de4"),n("2f62"));r["a"].use(p["a"]);var m=new p["a"].Store({state:{cartCount:0,products:[],user:null},mutations:{setCartCount:function(t,e){t.cartCount=e},setProducts:function(t,e){t.products=e},setUser:function(t,e){t.user=e}},actions:{fetchProducts:function(t){c["a"].get("product").then((function(e){t.commit("setProducts",e.data.product)}))},authUser:function(t){c["a"].post("auth").then((function(e){e.data.authenticated&&t.commit("setUser",e.data.user)}))}},getters:{getProductById:function(t){return function(e){return t.products.filter((function(t){return t.id==e}),this.id)[0]}}}}),v=[{path:"/",component:function(){return n.e("chunk-53491c1a").then(n.bind(null,"391e"))}},{path:"/products",component:function(){return n.e("chunk-5fd00f59").then(n.bind(null,"4ba7"))}},{path:"/categories",component:function(){return n.e("chunk-0027ef80").then(n.bind(null,"ecd5"))}},{path:"/products/new",component:function(){return n.e("chunk-af4a392a").then(n.bind(null,"0e0c"))},meta:{requiresAuth:!0}},{path:"/products/:id",component:function(){return n.e("chunk-1cfe44e6").then(n.bind(null,"c048"))},props:!0},{path:"/account",component:function(){return n.e("chunk-6ddeb97a").then(n.bind(null,"8fdc"))}},{path:"/cart",component:function(){return n.e("chunk-2d0a4b45").then(n.bind(null,"0829"))}},{path:"/denied",component:function(){return n.e("chunk-2d0aa9e3").then(n.bind(null,"127c"))}}],b=new h["a"]({routes:v,mode:"history"});b.beforeEach(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,n,r){var u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:u=e.matched.some((function(t){return t.meta.requiresAuth})),u&&!m.state.user?r("/denied"):r();case 2:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}());var g=b;r["a"].config.productionTip=!1,r["a"].use(h["a"]),new r["a"]({router:g,store:m,render:function(t){return t(f)}}).$mount("#app")},"58dd":function(t,e,n){t.exports=n.p+"img/zipfoods-logo.a23a3a29.png"},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),u=n.n(r);u.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.c3e05061.js.map