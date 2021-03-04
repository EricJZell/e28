(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3620d1aa"],{c7bd:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[r("label",{attrs:{for:"title"}},[t._v("Title")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.blog.title,expression:"blog.title"}],attrs:{type:"text","data-test":"blog-title-input"},domProps:{value:t.blog.title},on:{input:function(e){e.target.composing||t.$set(t.blog,"title",e.target.value)}}}),r("br"),t.errors&&"title"in t.errors?r("error-field",{attrs:{errors:t.errors.title}}):t._e(),r("br"),r("label",{attrs:{for:"content"}},[t._v("Content")]),r("br"),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.blog.content,expression:"blog.content"}],attrs:{"data-test":"blog-content-area"},domProps:{value:t.blog.content},on:{input:function(e){e.target.composing||t.$set(t.blog,"content",e.target.value)}}}),r("br"),t.errors&&"content"in t.errors?r("error-field",{attrs:{errors:t.errors.content}}):t._e(),r("br"),r("label",{attrs:{for:"video_url"}},[t._v("Video URL")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.blog.video_url,expression:"blog.video_url"}],attrs:{type:"text","data-test":"video-url-input"},domProps:{value:t.blog.video_url},on:{input:function(e){e.target.composing||t.$set(t.blog,"video_url",e.target.value)}}}),r("br"),t.errors&&"video_url"in t.errors?r("error-field",{attrs:{errors:t.errors.video_url}}):t._e(),r("br"),r("input",{attrs:{type:"submit","data-test":"submit-button",value:"Submit"}})],1)},n=[],l=r("0091"),a=r("1c4a"),i=r.n(a),s=r("ad5e"),u={name:"blog-form",components:{"error-field":s["a"]},data:function(){return{errors:null}},props:["blog","method","url"],methods:{submitForm:function(){var t=this;this.validate()&&Object(l["a"])({method:this.method,url:this.url,data:this.blog}).then((function(e){e.data.errors?console.log(e.data.errors):(t.$store.dispatch("fetchBlogs"),console.log(e.data),t.$router.push("/blogs/"+e.data.blog.id))}))},validate:function(){var t=new i.a(this.blog,{title:"required|between:3,255",content:"required|between:7,10000",video_url:"required|between:5,1000"});return this.errors=t.errors.all(),t.passes()}}},d=u,b=r("2877"),c=Object(b["a"])(d,o,n,!1,null,"0c76a4ee",null);e["a"]=c.exports},e2f0:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h6",[t._v("Edit this blog")]),r("blog-form",{attrs:{blog:t.blog,method:"put",url:"blog/"+t.blog.id}})],1)},n=[],l=r("c7bd"),a={name:"blog-edit-page",components:{"blog-form":l["a"]},props:["id"],data:function(){return{blog:{}}},mounted:function(){this.blog=this.$store.getters.getBlogById(this.id)}},i=a,s=r("2877"),u=Object(s["a"])(i,o,n,!1,null,"485bc496",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-3620d1aa.a6f8cdb2.js.map