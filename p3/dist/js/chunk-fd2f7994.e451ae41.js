(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd2f7994"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?s(t):o(r(t))}},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),c=n("9112");for(var s in o){var a=r[s],u=a&&a.prototype;if(u&&u.forEach!==i)try{c(u,"forEach",i)}catch(f){u.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=n("ae40"),c=o("forEach"),s=i("forEach");t.exports=c&&s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),c=n("ae40"),s=i("filter"),a=c("filter");r({target:"Array",proto:!0,forced:!s||!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),c=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},8339:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("iframe",{attrs:{width:"100%",height:"400px",src:t.blog.video_url,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),n("blog-preview",{attrs:{blog:t.blog}}),n("p",[t._v(t._s(t.blog.content))]),n("comments-display",{attrs:{comments:t.comments,blogId:t.id}}),n("router-link",{attrs:{to:"/"}},[n("h2",{staticClass:"link"},[t._v(" Back Home ")])]),n("router-link",{attrs:{to:"/blogs/edit/"+t.blog.id}},[n("h2",{staticClass:"link"},[t._v("Edit this blog")])]),n("h2",{staticClass:"link",on:{click:t.deleteBlog}},[t._v("Delete this blog")])],1)},o=[],i=n("0091"),c=n("c03a"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"link",on:{click:function(e){t.displayComments=!t.displayComments}}},[t._v(" Comments ("+t._s(t.comments.length)+") ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.displayComments,expression:"displayComments"}]},[n("ul",{staticClass:"comments-list"},t._l(t.comments,(function(e){return n("li",{key:e.id,staticClass:"comment"},[n("strong",[t._v(t._s(e.user_name)+":")]),t._v(" "+t._s(e.content)+" ")])})),0),t.user?n("div",[n("h4",{attrs:{for:"user_name"}},[t._v("Comment as "+t._s(t.user.name)+":")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.content,expression:"comment.content"}],staticClass:"new-comment",attrs:{type:"text"},domProps:{value:t.comment.content},on:{blur:t.storeComment,input:function(e){e.target.composing||t.$set(t.comment,"content",e.target.value)}}}),n("br"),t.errors&&"content"in t.errors?n("error-field",{attrs:{errors:t.errors.content}}):t._e(),n("transition",{attrs:{name:"fade"}},[t.showConfirmation?n("div",{staticClass:"success",attrs:{"data-test":"comment-added-confirmation"}},[t._v(" Your comment has been added! ")]):t._e()]),n("button",{attrs:{type:"submit"}},[t._v("Submit")])],1)]):n("div",[n("h2",{staticClass:"link"},[n("router-link",{attrs:{to:"/account"}},[t._v("Login to comment")])],1)])])])},a=[];n("b0c0"),n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=n("1c4a"),d=n.n(m),b=n("ad5e"),p={name:"comments-display",components:{"error-field":b["a"]},data:function(){return{comments:[],displayComments:!1,comment:{content:"",blog_id:this.blogId},errors:null,showConfirmation:!1}},props:["blogId"],methods:{storeComment:function(){localStorage.setItem("comment"+this.blogId,this.comment.content)},addComment:function(){var t=this;this.validate()&&(this.comment.user_name=this.user.name,i["a"].post("/comment",this.comment).then((function(e){if(e.data.errors)console.log(e.data.errors);else{var n=l({},t.comment);t.comments.push(n),t.comment={content:"",blog_id:t.blogId},t.showConfirmation=!0,localStorage.removeItem("comment"+t.blogId),setTimeout((function(){t.showConfirmation=!1}),2500)}})))},validate:function(){var t=new d.a(this.comment,{content:"required|between:2,255"});return this.errors=t.errors.all(),t.passes()}},computed:{user:function(){return this.$store.state.user}},mounted:function(){var t=this;this.comment.content=localStorage.getItem("comment"+this.blogId),i["a"].get("comment/query?blog_id="+this.blogId).then((function(e){t.comments=e.data.results}))}},h=p,g=n("2877"),v=Object(g["a"])(h,s,a,!1,null,null,null),y=v.exports,w={name:"blog-page",props:["id","show-video"],components:{"blog-preview":c["a"],"comments-display":y},data:function(){return{comments:[]}},computed:{blog:function(){return this.$store.getters.getBlogById(this.id)}},methods:{deleteBlog:function(){var t=this;i["a"].delete("blog/"+this.id).then((function(){t.$store.dispatch("fetchBlogs"),t.$router.push("/blogs")}))}}},O=w,S=Object(g["a"])(O,r,o,!1,null,null,null);e["default"]=S.exports},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),c=n("c430"),s=n("83ab"),a=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),m=n("e8b5"),d=n("861d"),b=n("825a"),p=n("7b0b"),h=n("fc6a"),g=n("c04e"),v=n("5c6c"),y=n("7c73"),w=n("df75"),O=n("241c"),S=n("057f"),_=n("7418"),C=n("06cf"),j=n("9bf2"),L=n("d1e7"),P=n("9112"),k=n("6eeb"),E=n("5692"),x=n("f772"),D=n("d012"),T=n("90e3"),I=n("b622"),N=n("e538"),M=n("746f"),B=n("d44e"),$=n("69f3"),V=n("b727").forEach,G=x("hidden"),A="Symbol",F="prototype",H=I("toPrimitive"),J=$.set,R=$.getterFor(A),q=Object[F],Q=o.Symbol,W=i("JSON","stringify"),Y=C.f,z=j.f,K=S.f,U=L.f,X=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),nt=E("wks"),rt=o.QObject,ot=!rt||!rt[F]||!rt[F].findChild,it=s&&f((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Y(q,e);r&&delete q[e],z(t,e,n),r&&t!==q&&z(q,e,r)}:z,ct=function(t,e){var n=X[t]=y(Q[F]);return J(n,{type:A,tag:t,description:e}),s||(n.description=e),n},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},at=function(t,e,n){t===q&&at(Z,e,n),b(t);var r=g(e,!0);return b(n),l(X,r)?(n.enumerable?(l(t,G)&&t[G][r]&&(t[G][r]=!1),n=y(n,{enumerable:v(0,!1)})):(l(t,G)||z(t,G,v(1,{})),t[G][r]=!0),it(t,r,n)):z(t,r,n)},ut=function(t,e){b(t);var n=h(e),r=w(n).concat(bt(n));return V(r,(function(e){s&&!lt.call(n,e)||at(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=g(t,!0),n=U.call(this,e);return!(this===q&&l(X,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(X,e)||l(this,G)&&this[G][e])||n)},mt=function(t,e){var n=h(t),r=g(e,!0);if(n!==q||!l(X,r)||l(Z,r)){var o=Y(n,r);return!o||!l(X,r)||l(n,G)&&n[G][r]||(o.enumerable=!0),o}},dt=function(t){var e=K(h(t)),n=[];return V(e,(function(t){l(X,t)||l(D,t)||n.push(t)})),n},bt=function(t){var e=t===q,n=K(e?Z:h(t)),r=[];return V(n,(function(t){!l(X,t)||e&&!l(q,t)||r.push(X[t])})),r};if(a||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===q&&n.call(Z,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),it(this,e,v(1,t))};return s&&ot&&it(q,e,{configurable:!0,set:n}),ct(e,t)},k(Q[F],"toString",(function(){return R(this).tag})),k(Q,"withoutSetter",(function(t){return ct(T(t),t)})),L.f=lt,j.f=at,C.f=mt,O.f=S.f=dt,_.f=bt,N.f=function(t){return ct(I(t),t)},s&&(z(Q[F],"description",{configurable:!0,get:function(){return R(this).description}}),c||k(q,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:Q}),V(w(nt),(function(t){M(t)})),r({target:A,stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=Q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!s},{create:ft,defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:mt}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:dt,getOwnPropertySymbols:bt}),r({target:"Object",stat:!0,forced:f((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(p(t))}}),W){var pt=!a||f((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));r({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(d(e)||void 0!==t)&&!st(t))return m(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),o[1]=e,W.apply(null,o)}})}Q[F][H]||P(Q[F],H,Q[F].valueOf),B(Q,A),D[G]=!0},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,i=Function.prototype,c=i.toString,s=/^\s*function ([^ (]*)/,a="name";r&&!(a in i)&&o(i,a,{configurable:!0,get:function(){try{return c.call(this).match(s)[1]}catch(t){return""}}})},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),i=n("df75"),c=n("d039"),s=c((function(){i(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(t){return i(o(t))}})},c03a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"blog-title"},[t._v(t._s(t.blog.title))]),n("h6",[t._v(t._s(new Date(t.blog.created_at).toLocaleDateString()))])])},o=[],i={props:["blog"]},c=i,s=n("2877"),a=Object(s["a"])(c,r,o,!1,null,null,null);e["a"]=a.exports},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),c=n("fc6a"),s=n("06cf"),a=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=c(t),o=s.f,u=i(r),f={},l=0;while(u.length>l)n=o(r,e=u[l++]),void 0!==n&&a(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),c=n("06cf").f,s=n("83ab"),a=o((function(){c(1)})),u=!s||a;r({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-fd2f7994.e451ae41.js.map