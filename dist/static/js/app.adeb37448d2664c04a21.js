webpackJsonp([10],{145:function(t,e){},146:function(t,e){},147:function(t,e){},148:function(t,e){},149:function(t,e){},161:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("my-header"),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{key:t.$route.fullPath})],1),t._v(" "),n("my-footer")],1)},staticRenderFns:[]}},162:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"myFooter"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-3"},[n("h2",{staticClass:"logo"},[n("router-link",{staticClass:"navbar-brand bg-logo",attrs:{to:"/"}},[t._v("Nav bar")]),t._v("\n            \tCodeoverflow\n            ")],1)]),t._v(" "),n("div",{staticClass:"col-sm-2"},[n("h5",[t._v("Get started")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/signup"}},[t._v("Sign up")])],1)])]),t._v(" "),n("div",{staticClass:"col-sm-2"},[n("h5",[t._v("About us")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/about-us"}},[t._v("About us")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/contact-us"}},[t._v("Contact us")])],1)])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-2"},[n("h5",[t._v("Support")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#"}},[t._v("FAQ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("Forums")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-3"},[n("div",{staticClass:"social-networks"},[n("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/rohit_slrohit",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fa fa-twitter",attrs:{title:"twitter"}})]),t._v(" "),n("a",{staticClass:"facebook",attrs:{href:"https://www.facebook.com/codeover",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fa fa-facebook",attrs:{title:"facebook"}})]),t._v(" "),n("a",{staticClass:"google",attrs:{href:"https://plus.google.com/collection/YEJWHE",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fa fa-google-plus",attrs:{title:"google"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-copyright"},[n("p",[t._v("© 2016 Copyright Text ")])])}]}},163:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"pageHeader"}},[t.showMainLoader?n("my-loader"):t._e(),t._v(" "),n("nav",{staticClass:"navbar navbar-toggleable-md navbar-light bg-faded my-navbar"},[t._m(0),t._v(" "),n("router-link",{staticClass:"navbar-brand bg-logo",attrs:{to:"/"}},[t._v("Nav bar")]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav navbar-left"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1)]),t._v(" "),n("form",{staticClass:"form-inline my-2 my-lg-0 search-form",on:{submit:t.handleSubmit}},[n("div",{staticClass:"input-group stylish-input-group search-cont"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control my-search",attrs:{autocomplete:"off",type:"text",placeholder:"Search"},domProps:{value:t.query},on:{focus:function(e){t.focused=!0},blur:t.handleBlur,keyup:t.handleKeyUp,input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),n("ul",{staticClass:"dropdown-menu search-result list-group",class:{active:t.focused},staticStyle:{width:"100%"}},[n("li",{staticClass:"list-group-item"},[t._v("Search Result")]),t._v(" "),t._l(t.questionSuggest,function(e){return n("li",{staticClass:"list-group-item",on:{click:function(n){t.goToUrl(e.url)}}},[n("router-link",{attrs:{to:e.url}},[t._v(t._s(e.title))]),t._v(" "),n("i",{staticStyle:{"font-size":"13px","margin-left":"5px"}},[t._v(t._s(t.getDesc(e.desc)))])],1)})],2),t._v(" "),t._m(1)])]),t._v(" "),n("ul",{staticClass:"nav navbar-nav navbar-right ml-auto",staticStyle:{"margin-right":"2rem"}},[t.loggedInUser?n("li",{staticClass:"nav-item"},[n("div",{staticClass:"dropdown"},[n("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t    Hi "+t._s(t.loggedInUser)+"\n\t\t\t\t\t  ")]),t._v(" "),n("div",{staticClass:"dropdown-menu",staticStyle:{"min-width":"8rem"},attrs:{"aria-labelledby":"dropdownMenuButton"}},[n("a",{staticClass:"dropdown-item",staticStyle:{cursor:"pointer"},on:{click:t.logout}},[t._v("Logout")])])])]):n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/signin"}},[t._v("Login")])],1)])])],1),t._v(" "),n("div",{staticClass:"padd-1"}),t._v(" "),n("div",{staticClass:"padd"}),t._v(" "),"success"==t.$route.query.signup&&t.loggedInUser?n("div",{staticClass:"alert alert-success alert-dismissable in",staticStyle:{width:"80%",margin:"10px auto"}},[n("a",{staticClass:"close",attrs:{href:"#","data-dismiss":"alert","aria-label":"close"}},[t._v("×")]),t._v(" "),n("strong",[t._v("Hello "+t._s(t.loggedInUser))]),t._v(" Welcome to codeoverflow, Happy coding :)\n  ")]):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"input-group-addon"},[n("button",{attrs:{type:"submit"}},[n("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])}]}},23:function(t,e,n){"use strict";function o(t){O&&(t._devtoolHook=O,O.emit("vuex:init",t),O.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){O.emit("vuex:mutation",t,e)}))}function i(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function r(t){return null!==t&&"object"==typeof t}function a(t){return t&&"function"==typeof t.then}function s(t,e){if(!t)throw new Error("[vuex] "+e)}function u(t,e){if(t.update(e),e.modules)for(var n in e.modules){if(!t.getChild(n))return void console.warn("[vuex] trying to add a new module '"+n+"' on hot reloading, manual reload is needed");u(t.getChild(n),e.modules[n])}}function c(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;d(t,n,[],t._modules.root,!0),l(t,n,e)}function l(t,e,n){var o=t._vm;t.getters={};var r=t._wrappedGetters,a={};i(r,function(e,n){a[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=D.config.silent;D.config.silent=!0,t._vm=new D({data:{$$state:e},computed:a}),D.config.silent=s,t.strict&&v(t),o&&(n&&t._withCommit(function(){o._data.$$state=null}),D.nextTick(function(){return o.$destroy()}))}function d(t,e,n,o,i){var r=!n.length,a=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[a]=o),!r&&!i){var s=_(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){D.set(s,u,o.state)})}var c=o.context=f(t,a,n);o.forEachMutation(function(e,n){p(t,a+n,e,c)}),o.forEachAction(function(e,n){g(t,a+n,e,c)}),o.forEachGetter(function(e,n){m(t,a+n,e,c)}),o.forEachChild(function(o,r){d(t,e,n.concat(r),o,i)})}function f(t,e,n){var o=""===e,i={dispatch:o?t.dispatch:function(n,o,i){var r=y(n,o,i),a=r.payload,s=r.options,u=r.type;return s&&s.root||(u=e+u,t._actions[u])?t.dispatch(u,a):void console.error("[vuex] unknown local action type: "+r.type+", global type: "+u)},commit:o?t.commit:function(n,o,i){var r=y(n,o,i),a=r.payload,s=r.options,u=r.type;if(!(s&&s.root||(u=e+u,t._mutations[u])))return void console.error("[vuex] unknown local mutation type: "+r.type+", global type: "+u);t.commit(u,a,s)}};return Object.defineProperties(i,{getters:{get:o?function(){return t.getters}:function(){return h(t,e)}},state:{get:function(){return _(t.state,n)}}}),i}function h(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,o)===e){var r=i.slice(o);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),n}function p(t,e,n,o){(t._mutations[e]||(t._mutations[e]=[])).push(function(t){n(o.state,t)})}function g(t,e,n,o){(t._actions[e]||(t._actions[e]=[])).push(function(e,i){var r=n({dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e,i);return a(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):r})}function m(t,e,n,o){if(t._wrappedGetters[e])return void console.error("[vuex] duplicate getter key: "+e);t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)}}function v(t){t._vm.$watch(function(){return this._data.$$state},function(){s(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function _(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function y(t,e,n){return r(t)&&t.type&&(n=e,e=t,t=t.type),s("string"==typeof t,"Expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}function E(t){if(D)return void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.");D=t,w(D)}function C(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function b(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function S(t,e,n){var o=t._modulesNamespaceMap[n];return o||console.error("[vuex] module namespace not found in "+e+"(): "+n),o}n.d(e,"b",function(){return P}),n.d(e,"a",function(){return H});/**
 * vuex v2.3.0
 * (c) 2017 Evan You
 * @license MIT
 */
var w=function(t){function e(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}if(Number(t.version.split(".")[0])>=2){var n=t.config._lifecycleHooks.indexOf("init")>-1;t.mixin(n?{init:e}:{beforeCreate:e})}else{var o=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,o.call(this,t)}}},O="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,A=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},T={namespaced:{}};T.namespaced.get=function(){return!!this._rawModule.namespaced},A.prototype.addChild=function(t,e){this._children[t]=e},A.prototype.removeChild=function(t){delete this._children[t]},A.prototype.getChild=function(t){return this._children[t]},A.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},A.prototype.forEachChild=function(t){i(this._children,t)},A.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},A.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},A.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(A.prototype,T);var I=function(t){var e=this;this.root=new A(t,!1),t.modules&&i(t.modules,function(t,n){e.register([n],t,!1)})};I.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},I.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},I.prototype.update=function(t){u(this.root,t)},I.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var r=this.get(t.slice(0,-1)),a=new A(e,n);r.addChild(t[t.length-1],a),e.modules&&i(e.modules,function(e,i){o.register(t.concat(i),e,n)})},I.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var D,L=function(t){var e=this;void 0===t&&(t={}),s(D,"must call Vue.use(Vuex) before creating a store instance."),s("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser.");var n=t.state;void 0===n&&(n={});var i=t.plugins;void 0===i&&(i=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new I(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new D;var a=this,u=this,c=u.dispatch,f=u.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return f.call(a,t,e,n)},this.strict=r,d(this,n,[],this._modules.root),l(this,n),i.concat(o).forEach(function(t){return t(e)})},k={state:{}};k.state.get=function(){return this._vm._data.$$state},k.state.set=function(t){s(!1,"Use store.replaceState() to explicit replace store state.")},L.prototype.commit=function(t,e,n){var o=this,i=y(t,e,n),r=i.type,a=i.payload,s=i.options,u={type:r,payload:a},c=this._mutations[r];if(!c)return void console.error("[vuex] unknown mutation type: "+r);this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(u,o.state)}),s&&s.silent&&console.warn("[vuex] mutation type: "+r+". Silent option has been removed. Use the filter functionality in the vue-devtools")},L.prototype.dispatch=function(t,e){var n=y(t,e),o=n.type,i=n.payload,r=this._actions[o];return r?r.length>1?Promise.all(r.map(function(t){return t(i)})):r[0](i):void console.error("[vuex] unknown action type: "+o)},L.prototype.subscribe=function(t){var e=this._subscribers;return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}},L.prototype.watch=function(t,e,n){var o=this;return s("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},L.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},L.prototype.registerModule=function(t,e){"string"==typeof t&&(t=[t]),s(Array.isArray(t),"module path must be a string or an Array."),this._modules.register(t,e),d(this,this.state,t,this._modules.get(t)),l(this,this.state)},L.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),s(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var n=_(e.state,t.slice(0,-1));D.delete(n,t[t.length-1])}),c(this)},L.prototype.hotUpdate=function(t){this._modules.update(t),c(this,!0)},L.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(L.prototype,k),"undefined"!=typeof window&&window.Vue&&E(window.Vue);var N=b(function(t,e){var n={};return C(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=S(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof i?i.call(this,e,n):e[i]},n[o].vuex=!0}),n}),x=b(function(t,e){var n={};return C(e).forEach(function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||S(this.$store,"mapMutations",t))return this.$store.commit.apply(this.$store,[i].concat(e))}}),n}),P=b(function(t,e){var n={};return C(e).forEach(function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){if(!t||S(this.$store,"mapGetters",t))return i in this.$store.getters?this.$store.getters[i]:void console.error("[vuex] unknown getter: "+i)},n[o].vuex=!0}),n}),H=b(function(t,e){var n={};return C(e).forEach(function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||S(this.$store,"mapActions",t))return this.$store.dispatch.apply(this.$store,[i].concat(e))}}),n}),U={Store:L,install:E,version:"2.3.0",mapState:N,mapMutations:x,mapGetters:P,mapActions:H};e.c=U},27:function(t,e,n){"use strict";var o=function(t){function e(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(t){return(t[0]||t).nodeType}function o(){return{bindType:a.end,delegateType:a.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}}function i(){if(window.QUnit)return!1;var t=document.createElement("bootstrap");for(var e in s)if(void 0!==t.style[e])return{end:s[e]};return!1}function r(e){var n=this,o=!1;return t(this).one(u.TRANSITION_END,function(){o=!0}),setTimeout(function(){o||u.triggerTransitionEnd(n)},e),this}var a=!1,s={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},u={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");return e||(e=t.getAttribute("href")||"",e=/^#[a-z]/i.test(e)?e:null),e},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger(a.end)},supportsTransitionEnd:function(){return Boolean(a)},typeCheckConfig:function(t,o,i){for(var r in i)if(i.hasOwnProperty(r)){var a=i[r],s=o[r],u=s&&n(s)?"element":e(s);if(!new RegExp(a).test(u))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+u+'" but expected type "'+a+'".')}}};return function(){a=i(),t.fn.emulateTransitionEnd=r,u.supportsTransitionEnd()&&(t.event.special[u.TRANSITION_END]=o())}(),u}(jQuery);e.a=o},64:function(t,e,n){function o(t){n(148)}var i=n(24)(null,n(162),o,"data-v-78c0aa9e",null);t.exports=i.exports},65:function(t,e,n){function o(t){n(149)}var i=n(24)(n(93),n(163),o,null,null);t.exports=i.exports},66:function(t,e,n){"use strict";var o=n(22),i=n(164);o.a.use(i.a);var r=function(t){return n.e(8).then(function(){var e=[n(169)];t.apply(null,e)}.bind(this)).catch(n.oe)},a=function(t){return n.e(6).then(function(){var e=[n(170)];t.apply(null,e)}.bind(this)).catch(n.oe)},s=function(t){return n.e(7).then(function(){var e=[n(171)];t.apply(null,e)}.bind(this)).catch(n.oe)},u=function(t){return n.e(0).then(function(){var e=[n(168)];t.apply(null,e)}.bind(this)).catch(n.oe)},c=function(t){return n.e(5).then(function(){var e=[n(172)];t.apply(null,e)}.bind(this)).catch(n.oe)},l=function(t){return n.e(4).then(function(){var e=[n(173)];t.apply(null,e)}.bind(this)).catch(n.oe)},d=function(t){return n.e(3).then(function(){var e=[n(174)];t.apply(null,e)}.bind(this)).catch(n.oe)},f=function(t){return n.e(2).then(function(){var e=[n(175)];t.apply(null,e)}.bind(this)).catch(n.oe)};e.a=new i.a({mode:"history",scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:[{path:"/",name:"Home",component:l},{path:"/index.html",name:"Home2",component:l},{path:"/questions",name:"Questions",component:l},{path:"/questions/page/:pageNo",name:"QuestionsPage",component:l},{path:"/questions/:id/:title",name:"Question",component:c},{path:"/questions/all",name:"QuestionsAll",component:l},{path:"/signin",name:"SignIn",component:d},{path:"/signup",name:"SignUp",component:f},{path:"/contact(-|_)?us",name:"ContactUs",component:s},{path:"/about(-|_)?us",name:"AboutUs",component:r},{path:"/article-editor",name:"ArticleEditor",component:a},{path:"/code",name:"Editor",component:u}]})},67:function(t,e,n){"use strict";var o=n(100),i=n.n(o),r=n(22),a=n(23),s=n(71),u=n.n(s),c=n(73);r.a.use(a.c);var l=c.a.getBaseUrl(),d=c.a.getGithubRawBaseUrl();e.a=new a.c.Store({state:{codeOutput:null,questionList:[],totalQuestions:null,question:null,questionSuggestions:[],loggedInUser:"",showMainLoader:!1},actions:{RUN_CODE:function(t,e){var n=t.commit;return new i.a(function(t,o){u.a.post(l+c.a.resources.run,e).then(function(e){n("SET_CODE_OUTPUT",{data:e.data}),t()},function(t){console.log(t),o()}).catch(function(t){console.log(t),o()})})},LOAD_QUESTION_LIST:function(t,e){var n=t.commit;return new i.a(function(t,o){var i=l+c.a.resources.getQuestion+"?offset="+e.offset+"&limit="+e.limit;u.a.get(i).then(function(e){n("SET_QUESTION_LIST",{data:e.data}),t()},function(t){console.log(t),o()}).catch(function(t){console.log(t),o()})})},LOAD_QUESTION:function(t,e){var n=t.commit,o=t.state;if(isNaN(e))return void console.log("Error question id must be integer");if(e=parseInt(e),null==o.question||o.question.questionId!==e){var i=o.questionList.find(function(t){return t.questionId===e});if(i)n("SET_QUESTION",{question:i});else{var r=l+c.a.resources.getQuestion+"/"+e;u.a.get(r).then(function(t){n("SET_QUESTION",{question:t.data})},function(t){console.log("Error",t)})}}},SEARCH_QUESTION:function(t,e){var n=t.commit,o=(t.state,l+c.a.resources.questionSuggest+"/"+e);u.a.get(o).then(function(t){n("SET_QUESTION_SUGGESTION",{data:t.data})},function(t){console.log(t)})},SET_LOADER:function(t,e){(0,t.commit)("SET_LOADER",e)},SET_USER:function(t){(0,t.commit)("SET_LOGGED_IN_USER",sessionStorage.getItem("user")?sessionStorage.getItem("user"):"")},LOGOUT:function(t){(0,t.commit)("SET_LOGGED_IN_USER",""),sessionStorage.removeItem("user")},LOGIN:function(t,e){var n=t.commit,o=l+c.a.resources.login;return new i.a(function(t,i){u.a.post(o,e).then(function(o){t(o.data),sessionStorage.setItem("user",e.userName),n("SET_LOGGED_IN_USER",e.userName)},function(t){i(t.response.data)}).catch(function(t){console.log(t),i(t)})})},SIGN_UP:function(t,e){var n=t.commit,o=l+c.a.resources.signup;return new i.a(function(t,i){u.a.post(o,e).then(function(o){t(o.data),sessionStorage.setItem("user",e.userName),n("SET_LOGGED_IN_USER",e.userName)},function(t){i(t.response.data)}).catch(function(t){console.log(t),i(t)})})}},getters:{codeOutput:function(t){return t.codeOutput},questions:function(t){return t.questionList},totalQuestions:function(t){return t.totalQuestions},question:function(t){return t.question},questionSuggest:function(t){return t.questionSuggestions},loggedInUser:function(t){return t.loggedInUser},showMainLoader:function(t){return t.showMainLoader},getSolution:function(t){return function(t){var e=d+t;return new i.a(function(t,n){u.a.get(e).then(function(e){t(e.data)},function(t){console.log(t),n(t)})})}}},mutations:{SET_CODE_OUTPUT:function(t,e){var n=e.data;t.codeOutput=n,t.codeOutput&&t.codeOutput.run_status&&t.codeOutput.run_status.output_html&&t.codeOutput.run_status.output_html.length>0&&(t.codeOutput.run_status.output_html=t.codeOutput.run_status.output_html.split("<br><br>").map(function(t){return t.split("<br>").join(" ")}).join("<br>"))},SET_QUESTION_LIST:function(t,e){var n=e.data;t.questionList=n.rows,t.totalQuestions=n.count},SET_QUESTION:function(t,e){var n=e.question;t.question=n},SET_LOADER:function(t,e){t.showMainLoader=e},SET_QUESTION_SUGGESTION:function(t,e){var n=e.data;t.questionSuggestions=n.map(function(t){return{url:"/questions/"+t.questionId+"/"+t.title.split(" ").join("-"),title:t.title,desc:t.description}})},SET_LOGGED_IN_USER:function(t,e){t.loggedInUser=e}}})},69:function(t,e,n){function o(t){n(145),n(146),n(147)}var i=n(24)(n(92),n(161),o,null,null);t.exports=i.exports},73:function(t,e,n){"use strict";e.a={getBaseUrl:function(){return"https://ctyy.herokuapp.com"},getGithubRawBaseUrl:function(){return"https://raw.githubusercontent.com/slrohit/coding/master"},resources:{compile:"/code/compile",run:"/code/run",getQuestion:"/questions",questionSuggest:"/questions/suggest",login:"/users/auth",signup:"/users/create",checkUsername:"/users/username"}}},92:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(65),i=n.n(o),r=n(64),a=n.n(r);e.default={name:"app",components:{"my-header":i.a,"my-footer":a.a}}},93:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(70),i=n.n(o),r=(n(95),n(96),n(94),n(72)),a=n.n(r),s=n(23);e.default={name:"my-header",data:function(){return{query:"",focused:!1}},methods:i()({},n.i(s.a)({searchQuestion:"SEARCH_QUESTION",logout:"LOGOUT",setUser:"SET_USER"}),{handleSubmit:function(t){t.preventDefault();var e=this.$route.path+"?q="+this.query;this.$router.push(e)},handleKeyUp:a()(function(t){this.query.length>3&&this.searchQuestion(this.query)},500),handleBlur:function(t){var e=this;setTimeout(function(){e.focused=!1},300)},goToUrl:function(t){this.$router.push(t)},getDesc:function(t){t=t.trim();var e=t.substr(0,12)+"...",n=t.indexOf(this.query);return n>12?e+t.substr(n-5,5)+t.substr(n,8):e}}),computed:i()({},n.i(s.b)(["questionSuggest","loggedInUser","showMainLoader"])),created:function(){this.setUser(),this.query=this.$route.query.q?this.$route.query.q:"",this.query.length>3&&this.searchQuestion(this.query)},components:{"my-loader":function(){return n.e(1).then(n.bind(null,74))}}}},94:function(t,e,n){"use strict";var o=n(28),i=n.n(o),r=n(29),a=n.n(r),s=n(27);!function(t){var e="alert",n=t.fn[e],o={DISMISS:'[data-dismiss="alert"]'},r={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},u={ALERT:"alert",FADE:"fade",SHOW:"show"},c=function(){function e(t){i()(this,e),this._element=t}return a()(e,[{key:"close",value:function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)}},{key:"dispose",value:function(){t.removeData(this._element,"bs.alert"),this._element=null}},{key:"_getRootElement",value:function(e){var n=s.a.getSelectorFromElement(e),o=!1;return n&&(o=t(n)[0]),o||(o=t(e).closest("."+u.ALERT)[0]),o}},{key:"_triggerCloseEvent",value:function(e){var n=t.Event(r.CLOSE);return t(e).trigger(n),n}},{key:"_removeElement",value:function(e){var n=this;if(t(e).removeClass(u.SHOW),!s.a.supportsTransitionEnd()||!t(e).hasClass(u.FADE))return void this._destroyElement(e);t(e).one(s.a.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(150)}},{key:"_destroyElement",value:function(e){t(e).detach().trigger(r.CLOSED).remove()}}],[{key:"_jQueryInterface",value:function(n){return this.each(function(){var o=t(this),i=o.data("bs.alert");i||(i=new e(this),o.data("bs.alert",i)),"close"===n&&i[n](this)})}},{key:"_handleDismiss",value:function(t){return function(e){e&&e.preventDefault(),t.close(this)}}},{key:"VERSION",get:function(){return"4.0.0-alpha.6"}}]),e}();t(document).on(r.CLICK_DATA_API,o.DISMISS,c._handleDismiss(new c)),t.fn[e]=c._jQueryInterface,t.fn[e].Constructor=c,t.fn[e].noConflict=function(){return t.fn[e]=n,c._jQueryInterface}}(jQuery)},95:function(t,e,n){"use strict";var o=n(103),i=n.n(o),r=n(28),a=n.n(r),s=n(29),u=n.n(s),c=n(27);!function(t){var e="collapse",n="bs.collapse",o=t.fn[e],r={toggle:!0,parent:""},s={toggle:"boolean",parent:"string"},l={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},d={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},f={WIDTH:"width",HEIGHT:"height"},h={ACTIVES:".card > .show, .card > .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},p=function(){function o(e,n){a()(this,o),this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]')),this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return u()(o,[{key:"toggle",value:function(){t(this._element).hasClass(d.SHOW)?this.hide():this.show()}},{key:"show",value:function(){var e=this;if(this._isTransitioning)throw new Error("Collapse is transitioning");if(!t(this._element).hasClass(d.SHOW)){var i=void 0,r=void 0;if(this._parent&&(i=t.makeArray(t(this._parent).find(h.ACTIVES)),i.length||(i=null)),!(i&&(r=t(i).data(n))&&r._isTransitioning)){var a=t.Event(l.SHOW);if(t(this._element).trigger(a),!a.isDefaultPrevented()){i&&(o._jQueryInterface.call(t(i),"hide"),r||t(i).data(n,null));var s=this._getDimension();t(this._element).removeClass(d.COLLAPSE).addClass(d.COLLAPSING),this._element.style[s]=0,this._element.setAttribute("aria-expanded",!0),this._triggerArray.length&&t(this._triggerArray).removeClass(d.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var u=function(){t(e._element).removeClass(d.COLLAPSING).addClass(d.COLLAPSE).addClass(d.SHOW),e._element.style[s]="",e.setTransitioning(!1),t(e._element).trigger(l.SHOWN)};if(!c.a.supportsTransitionEnd())return void u();var f=s[0].toUpperCase()+s.slice(1),p="scroll"+f;t(this._element).one(c.a.TRANSITION_END,u).emulateTransitionEnd(600),this._element.style[s]=this._element[p]+"px"}}}}},{key:"hide",value:function(){var e=this;if(this._isTransitioning)throw new Error("Collapse is transitioning");if(t(this._element).hasClass(d.SHOW)){var n=t.Event(l.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var o=this._getDimension(),i=o===f.WIDTH?"offsetWidth":"offsetHeight";this._element.style[o]=this._element[i]+"px",c.a.reflow(this._element),t(this._element).addClass(d.COLLAPSING).removeClass(d.COLLAPSE).removeClass(d.SHOW),this._element.setAttribute("aria-expanded",!1),this._triggerArray.length&&t(this._triggerArray).addClass(d.COLLAPSED).attr("aria-expanded",!1),this.setTransitioning(!0);var r=function(){e.setTransitioning(!1),t(e._element).removeClass(d.COLLAPSING).addClass(d.COLLAPSE).trigger(l.HIDDEN)};if(this._element.style[o]="",!c.a.supportsTransitionEnd())return void r();t(this._element).one(c.a.TRANSITION_END,r).emulateTransitionEnd(600)}}}},{key:"setTransitioning",value:function(t){this._isTransitioning=t}},{key:"dispose",value:function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}},{key:"_getConfig",value:function(n){return n=t.extend({},r,n),n.toggle=Boolean(n.toggle),c.a.typeCheckConfig(e,n,s),n}},{key:"_getDimension",value:function(){return t(this._element).hasClass(f.WIDTH)?f.WIDTH:f.HEIGHT}},{key:"_getParent",value:function(){var e=this,n=t(this._config.parent)[0],i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(i).each(function(t,n){e._addAriaAndCollapsedClass(o._getTargetFromElement(n),[n])}),n}},{key:"_addAriaAndCollapsedClass",value:function(e,n){if(e){var o=t(e).hasClass(d.SHOW);e.setAttribute("aria-expanded",o),n.length&&t(n).toggleClass(d.COLLAPSED,!o).attr("aria-expanded",o)}}}],[{key:"_getTargetFromElement",value:function(e){var n=c.a.getSelectorFromElement(e);return n?t(n)[0]:null}},{key:"_jQueryInterface",value:function(e){return this.each(function(){var a=t(this),s=a.data(n),u=t.extend({},r,a.data(),"object"===(void 0===e?"undefined":i()(e))&&e);if(!s&&u.toggle&&/show|hide/.test(e)&&(u.toggle=!1),s||(s=new o(this,u),a.data(n,s)),"string"==typeof e){if(void 0===s[e])throw new Error('No method named "'+e+'"');s[e]()}})}},{key:"VERSION",get:function(){return"4.0.0-alpha.6"}},{key:"Default",get:function(){return r}}]),o}();t(document).on(l.CLICK_DATA_API,h.DATA_TOGGLE,function(e){e.preventDefault();var o=p._getTargetFromElement(this),i=t(o).data(n),r=i?"toggle":t(this).data();p._jQueryInterface.call(t(o),r)}),t.fn[e]=p._jQueryInterface,t.fn[e].Constructor=p,t.fn[e].noConflict=function(){return t.fn[e]=o,p._jQueryInterface}}(jQuery)},96:function(t,e,n){"use strict";var o=n(28),i=n.n(o),r=n(29),a=n.n(r),s=n(27);!function(t){var e="dropdown",n=".bs.dropdown",o=t.fn[e],r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK:"click"+n,CLICK_DATA_API:"click.bs.dropdown.data-api",FOCUSIN_DATA_API:"focusin.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api"},u={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",SHOW:"show"},c={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},l=function(){function e(t){i()(this,e),this._element=t,this._addEventListeners()}return a()(e,[{key:"toggle",value:function(){if(this.disabled||t(this).hasClass(u.DISABLED))return!1;var n=e._getParentFromElement(this),o=t(n).hasClass(u.SHOW);if(e._clearMenus(),o)return!1;if("ontouchstart"in document.documentElement&&!t(n).closest(c.NAVBAR_NAV).length){var i=document.createElement("div");i.className=u.BACKDROP,t(i).insertBefore(this),t(i).on("click",e._clearMenus)}var a={relatedTarget:this},s=t.Event(r.SHOW,a);return t(n).trigger(s),!s.isDefaultPrevented()&&(this.focus(),this.setAttribute("aria-expanded",!0),t(n).toggleClass(u.SHOW),t(n).trigger(t.Event(r.SHOWN,a)),!1)}},{key:"dispose",value:function(){t.removeData(this._element,"bs.dropdown"),t(this._element).off(n),this._element=null}},{key:"_addEventListeners",value:function(){t(this._element).on(r.CLICK,this.toggle)}}],[{key:"_jQueryInterface",value:function(n){return this.each(function(){var o=t(this).data("bs.dropdown");if(o||(o=new e(this),t(this).data("bs.dropdown",o)),"string"==typeof n){if(void 0===o[n])throw new Error('No method named "'+n+'"');o[n].call(this)}})}},{key:"_clearMenus",value:function(n){if(!n||3!==n.which){var o=t(c.BACKDROP)[0];o&&o.parentNode.removeChild(o);for(var i=t.makeArray(t(c.DATA_TOGGLE)),a=0;a<i.length;a++){var s=e._getParentFromElement(i[a]),l={relatedTarget:i[a]};if(t(s).hasClass(u.SHOW)&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"focusin"===n.type)&&t.contains(s,n.target))){var d=t.Event(r.HIDE,l);t(s).trigger(d),d.isDefaultPrevented()||(i[a].setAttribute("aria-expanded","false"),t(s).removeClass(u.SHOW).trigger(t.Event(r.HIDDEN,l)))}}}}},{key:"_getParentFromElement",value:function(e){var n=void 0,o=s.a.getSelectorFromElement(e);return o&&(n=t(o)[0]),n||e.parentNode}},{key:"_dataApiKeydownHandler",value:function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!t(this).hasClass(u.DISABLED))){var o=e._getParentFromElement(this),i=t(o).hasClass(u.SHOW);if(!i&&27!==n.which||i&&27===n.which){if(27===n.which){var r=t(o).find(c.DATA_TOGGLE)[0];t(r).trigger("focus")}return void t(this).trigger("click")}var a=t(o).find(c.VISIBLE_ITEMS).get();if(a.length){var s=a.indexOf(n.target);38===n.which&&s>0&&s--,40===n.which&&s<a.length-1&&s++,s<0&&(s=0),a[s].focus()}}}},{key:"VERSION",get:function(){return"4.0.0-alpha.6"}}]),e}();t(document).on(r.KEYDOWN_DATA_API,c.DATA_TOGGLE,l._dataApiKeydownHandler).on(r.KEYDOWN_DATA_API,c.ROLE_MENU,l._dataApiKeydownHandler).on(r.KEYDOWN_DATA_API,c.ROLE_LISTBOX,l._dataApiKeydownHandler).on(r.CLICK_DATA_API+" "+r.FOCUSIN_DATA_API,l._clearMenus).on(r.CLICK_DATA_API,c.DATA_TOGGLE,l.prototype.toggle).on(r.CLICK_DATA_API,c.FORM_CHILD,function(t){t.stopPropagation()}),t.fn[e]=l._jQueryInterface,t.fn[e].Constructor=l,t.fn[e].noConflict=function(){return t.fn[e]=o,l._jQueryInterface}}(jQuery)},97:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(22),i=n(69),r=n.n(i),a=n(66),s=n(67),u=n(68),c=n.n(u);o.a.use(c.a),o.a.config.productionTip=!0,new o.a({el:"#app",store:s.a,router:a.a,render:function(t){return t(r.a)}})}},[97]);
//# sourceMappingURL=app.adeb37448d2664c04a21.js.map