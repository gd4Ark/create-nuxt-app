(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{418:function(e,t,r){},420:function(e,t,r){"use strict";var n=r(418);r.n(n).a},425:function(e,t,r){"use strict";r.r(t);r(42),r(24),r(13),r(8),r(30),r(25);var n=r(2),o=r(5),c=r(19);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={layout:"login",name:"Login",head:function(){return{title:"DEEPEXI ADMIN 登录"}},data:function(){return{loading:!1,content:[{type:"input",id:"enterpriseId",el:{placeholder:"租户Id"},rules:[{type:"string",trigger:"blur",required:!0,message:"请输入租户ID"}]},{type:"input",id:"username",el:{placeholder:"用户名 / 邮箱"},rules:[{type:"string",trigger:"blur",required:!0,message:"请输入账号"}]},{type:"input",id:"password",el:{placeholder:"密码",type:"password","show-password":!0},rules:[{type:"string",trigger:"blur",required:!0,message:"请输入密码"}]}]}},computed:{form:function(){return this.$refs.form},redirect:function(){return this.$route.query.redirect}},methods:d(d({},Object(c.b)(["login"])),{},{handleLogin:function(){var e=this;this.form.validate(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return data=e.form.getFormValue(),e.loading=!0,t.prev=4,t.next=7,e.login({body:d({channel:"pc"},data),redirect:e.redirect});case 7:return t.prev=7,e.loading=!1,t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[4,,7,10]])})));return function(e){return t.apply(this,arguments)}}())}})},h=(r(420),r(3)),component=Object(h.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login"},[t("div",{staticClass:"main"},[t("el-form-renderer",{ref:"form",attrs:{content:this.content,"status-icon":""}},[t("el-form-item",[t("el-button",{attrs:{loading:this.loading,type:"primary",round:"","native-type":"submit"},on:{click:this.handleLogin,submit:function(e){e.preventDefault()}}},[this._v("登录")])],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);