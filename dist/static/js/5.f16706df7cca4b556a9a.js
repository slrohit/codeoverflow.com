webpackJsonp([5],{172:function(e,t,n){function a(e){n(207)}var o=n(24)(n(179),n(213),a,"data-v-b2e076ae",null);e.exports=o.exports},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(70),o=n.n(a),s=n(23);t.default={name:"question",data:function(){return{msg:"Question page",enableEditor:!1}},methods:o()({},n.i(s.a)({loadQuestion:"LOAD_QUESTION"})),computed:o()({},n.i(s.b)(["question"]),{title:function(){return this.$route.params.title&&-1!==this.$route.params.title.indexOf("-")?this.$route.params.title.split("-").join(" "):this.$route.params.title},questionId:function(){return this.$route.params.id}}),created:function(){document.title=this.title,this.loadQuestion(this.$route.params.id)},components:{"my-editor":function(){return n.e(0).then(n.bind(null,168))}}}},201:function(e,t,n){t=e.exports=n(166)(!0),t.push([e.i,".ques-desc[data-v-b2e076ae]{margin-bottom:10px}h1[data-v-b2e076ae]{font-size:1.7rem}h2[data-v-b2e076ae]{font-size:1.5rem}h3[data-v-b2e076ae]{font-size:1.3rem}blockquote[data-v-b2e076ae]{background-color:hsla(0,0%,50%,.05)}button.btn[data-v-b2e076ae]{cursor:pointer}.solve[data-v-b2e076ae]{text-align:center}","",{version:3,sources:["/home/rohit/nodeworkspace/codeoverflow-web/src/components/Question.vue"],names:[],mappings:"AACA,4BACE,kBAAoB,CACrB,AACD,oBACE,gBAAkB,CACnB,AACD,oBACE,gBAAkB,CACnB,AACD,oBACE,gBAAkB,CACnB,AACD,4BACE,mCAAyC,CAC1C,AACD,4BACE,cAAgB,CACjB,AACD,wBACE,iBAAmB,CACpB",file:"Question.vue",sourcesContent:["\n.ques-desc[data-v-b2e076ae]{\n  margin-bottom: 10px;\n}\nh1[data-v-b2e076ae]{\n  font-size: 1.7rem;\n}\nh2[data-v-b2e076ae]{\n  font-size: 1.5rem;\n}\nh3[data-v-b2e076ae]{\n  font-size: 1.3rem;\n}\nblockquote[data-v-b2e076ae]{\n  background-color: rgba(128,128,128,0.05);\n}\nbutton.btn[data-v-b2e076ae]{\n  cursor: pointer;\n}\n.solve[data-v-b2e076ae]{\n  text-align: center;\n}\n"],sourceRoot:""}])},207:function(e,t,n){var a=n(201);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(167)("474403a8",a,!0)},213:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[e.question?n("div",{staticClass:"ques-desc card"},[n("div",{staticClass:"card-header"},[n("h1",{staticClass:"card-title"},[e._v(e._s(e.question.title))])]),e._v(" "),n("div",{staticClass:"card-block"},[n("div",{domProps:{innerHTML:e._s(e.question.html)}}),e._v(" "),e.enableEditor?e._e():n("div",{staticClass:"solve"},[n("button",{staticClass:"btn btn-primary",on:{click:function(t){e.enableEditor=!e.enableEditor}}},[e._v("Solve")])])])]):e._e()])]),e._v(" "),e.enableEditor?n("my-editor"):e._e()],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.f16706df7cca4b556a9a.js.map