(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf382"],{"637f":function(e,r,a){"use strict";a.r(r);var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{attrs:{id:"register"}},[a("h2",[e._v("Register")]),a("div",[a("label",[e._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.name,expression:"data.name"}],attrs:{type:"text","data-test":"name-input"},domProps:{value:e.data.name},on:{input:function(r){r.target.composing||e.$set(e.data,"name",r.target.value)}}}),e.errors&&"name"in e.errors?a("error-field",{attrs:{errors:e.errors.name}}):e._e(),a("br"),a("label",[e._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.email,expression:"data.email"}],attrs:{type:"text","data-test":"email-input"},domProps:{value:e.data.email},on:{input:function(r){r.target.composing||e.$set(e.data,"email",r.target.value)}}}),e.errors&&"email"in e.errors?a("error-field",{attrs:{errors:e.errors.email}}):e._e(),a("br"),a("label",[e._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.password,expression:"data.password"}],attrs:{type:"password","data-test":"password-input"},domProps:{value:e.data.password},on:{input:function(r){r.target.composing||e.$set(e.data,"password",r.target.value)}}}),e.errors&&"password"in e.errors?a("error-field",{attrs:{errors:e.errors.password}}):e._e(),a("br"),a("button",{attrs:{"data-test":"register-button"},on:{click:e.register}},[e._v("Register")]),e.serverErrors?a("error-field",{attrs:{errors:e.serverErrors}}):e._e()],1)])},s=[],o=a("1c4a"),n=a.n(o),i=a("ad5e"),d=a("0091"),l={name:"register-page",components:{"error-field":i["a"]},data:function(){return{data:{name:"",email:"",password:""},errors:null,serverErrors:null}},methods:{register:function(){var e=this;this.validate()&&d["a"].post("register",this.data).then((function(r){r.data.success?(e.$store.commit("setUser",e.data),e.$router.push("account")):e.serverErrors=r.data.errors}))},validate:function(){var e=new n.a(this.data,{name:"required|between:2,50",email:"required|email",password:"required|between:8,20"});return this.errors=e.errors.all(),e.passes()}}},u=l,m=a("2877"),p=Object(m["a"])(u,t,s,!1,null,null,null);r["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0cf382.a1c5f8fd.js.map