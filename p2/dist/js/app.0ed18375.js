(function(t){function e(e){for(var n,a,i=e[0],s=e[1],u=e[2],p=0,b=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);c&&c(e);while(b.length)b.shift()();return l.push.apply(l,u||[]),o()}function o(){for(var t,e=0;e<l.length;e++){for(var o=l[e],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(l.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},l=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=s;l.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n,r=o("2b0e"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"header"},[o("router-link",{attrs:{to:"/"}},[o("h1",{staticClass:"page-title"},[t._v("Pickin' a Tune")]),o("h2",{staticClass:"link"},[t._v(" Some of my favorite finger picked guitar style songs ")])])],1),o("router-view",{attrs:{blogs:t.blogs},on:{"update-blogs":t.updateBlogs}}),o("div",{staticClass:"footer"},[o("router-link",{attrs:{to:"blogs/new"}},[o("h2",{staticClass:"link"},[t._v(" New Blog ")])])],1)],1)},a=[],i=o("bc3a").create({baseURL:null!==(n="http://e28-api.ericjzell.com")&&void 0!==n?n:"http://e28-api.loc",responseType:"json"}),s={name:"App",data:function(){return{blogs:[]}},methods:{updateBlogs:function(){var t=this;i.get("blog").then((function(e){t.blogs=e.data.blog}))}},mounted:function(){this.updateBlogs()}},u=s,c=(o("5c0b"),o("2877")),p=Object(c["a"])(u,l,a,!1,null,null,null),b=p.exports,g=o("8c4f"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.blogs,(function(t){return o("div",{key:t.id},[o("router-link",{attrs:{to:"blogs/"+t.id,exact:""}},[o("blog-preview",{attrs:{blog:t}})],1)],1)})),0)},f=[],m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",{staticClass:"blog-title"},[t._v(t._s(t.blog.title))]),o("h6",[t._v(t._s(new Date(t.blog.created_at).toLocaleDateString()))])])},v=[],h={name:"blog-preview",props:["blog"]},_=h,w=Object(c["a"])(_,m,v,!1,null,null,null),y=w.exports,x={name:"blogs-page",components:{"blog-preview":y},props:["blogs"],data:function(){return{}}},O=x,j=Object(c["a"])(O,d,f,!1,null,"c8359106",null),k=j.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h6",[t._v("Create a new blog")]),o("blog-form",{attrs:{blog:t.blog,method:"post",url:"blog"},on:{"update-blogs":function(e){return t.$emit("update-blogs")}}})],1)},C=[],P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[o("label",{attrs:{for:"title"}},[t._v("Title")]),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.blog.title,expression:"blog.title"}],attrs:{type:"text"},domProps:{value:t.blog.title},on:{input:function(e){e.target.composing||t.$set(t.blog,"title",e.target.value)}}}),o("br"),o("label",{attrs:{for:"content"}},[t._v("Content")]),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.blog.content,expression:"blog.content"}],domProps:{value:t.blog.content},on:{input:function(e){e.target.composing||t.$set(t.blog,"content",e.target.value)}}}),o("br"),o("label",{attrs:{for:"video_url"}},[t._v("Video URL")]),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.blog.video_url,expression:"blog.video_url"}],attrs:{type:"text"},domProps:{value:t.blog.video_url},on:{input:function(e){e.target.composing||t.$set(t.blog,"video_url",e.target.value)}}}),o("br"),o("input",{attrs:{type:"submit",value:"Submit"}})])},E=[],S={name:"blog-form",props:["blog","method","url"],methods:{submitForm:function(){var t=this;i({method:this.method,url:this.url,data:this.blog}).then((function(e){e.data.errors?console.log(e.data.errors):(t.$emit("update-blogs"),console.log(e.data),t.$router.push("/blogs/"+e.data.blog.id))}))}}},B=S,T=Object(c["a"])(B,P,E,!1,null,"7e812f9a",null),D=T.exports,M={name:"blog-create-page",components:{"blog-form":D},data:function(){return{blog:{title:"",content:"",video_url:"https://www.youtube.com/embed/woMh7DvOt_Q"}}}},N=M,L=Object(c["a"])(N,$,C,!1,null,"3982da36",null),F=L.exports,J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h6",[t._v("Edit this blog")]),o("blog-form",{attrs:{blog:t.blog,method:"put",url:"blog/"+t.blog.id},on:{"update-blogs":function(e){return t.$emit("update-blogs")}}})],1)},R=[],U={name:"blog-edit-page",components:{"blog-form":D},props:["id"],data:function(){return{blog:{}}},mounted:function(){var t=this;i.get("blog/"+this.id).then((function(e){t.blog=e.data.blog}))}},z=U,A=Object(c["a"])(z,J,R,!1,null,"73d48dba",null),H=A.exports,Q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("iframe",{attrs:{width:"100%",height:"400px",src:t.blog.video_url,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),o("blog-preview",{attrs:{blog:t.blog}}),o("p",[t._v(t._s(t.blog.content))]),o("router-link",{attrs:{to:"/"}},[o("h2",{staticClass:"link"},[t._v(" Back Home ")])]),o("router-link",{attrs:{to:"/blogs/edit/"+t.blog.id}},[o("h2",{staticClass:"link"},[t._v("Edit this blog")])]),o("h2",{staticClass:"link",on:{click:t.deleteBlog}},[t._v("Delete this blog")])],1)},V=[],q={name:"blog-page",props:["id","show-video"],components:{"blog-preview":y},data:function(){return{blog:{}}},methods:{deleteBlog:function(){var t=this;i.delete("blog/"+this.id).then((function(){t.$emit("update-blogs"),t.$router.push("/blogs")}))}},mounted:function(){var t=this;i.get("blog/"+this.id).then((function(e){t.blog=e.data.blog}))}},G=q,I=Object(c["a"])(G,Q,V,!1,null,null,null),K=I.exports;r["a"].config.productionTip=!1,r["a"].use(g["a"]);var W=new g["a"]({mode:"history",routes:[{path:"/",component:k},{path:"/blogs",component:k},{path:"/blogs/new",component:F},{path:"/blogs/:id",component:K,props:!0},{path:"/blogs/edit/:id",component:H,props:!0}]});new r["a"]({router:W,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},"9c0c":function(t,e,o){}});
//# sourceMappingURL=app.0ed18375.js.map