webpackJsonp([17],{WhSS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{needCon:null,amount:null,contactName:null,contactPhone:null}},components:{WorkHeader:a("qqdu").a},methods:{subNeed:function(){var t=this;if(null==t.needCon)t.$Toast("请输入需求详情");else if(null==t.amount)t.$Toast("请输入预算金额");else if(null==t.contactName)t.$Toast("请输入联系人姓名");else if(null==t.contactPhone)t.$Toast("请输入联系人电话");else if(/^1[34578]\d{9}$/.test(t.contactPhone)){t.$Indicator.open("提交中...");var e=new FormData;e.append("content",t.needCon),e.append("budget",t.amount),e.append("linkman",t.contactName),e.append("contact",t.contactPhone),t.$axios.post(t.oUrl+"/saveDemand",e).then(function(e){0==e.data.code?(t.$Toast("提交成功"),t.$Indicator.close(),window.history.back()):(t.$Toast(e.data.msg),t.$Indicator.close())}).catch(function(t){console.log(t)})}else t.$Toast("请输入正确的手机号")}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demand_need"},[a("WorkHeader",[a("span",[t._v("发布需求")])]),t._v(" "),a("div",{staticClass:"put_bg"}),t._v(" "),a("div",{staticClass:"put_area"},[a("div",{staticClass:"area_top"},[a("p",{staticClass:"top_title"},[t._v("请填写您的需求")]),t._v(" "),a("ul",{staticClass:"textarea"},[t._m(0),t._v(" "),a("li",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.needCon,expression:"needCon"}],attrs:{name:"name",placeholder:"请输入您的需求描述"},domProps:{value:t.needCon},on:{input:function(e){e.target.composing||(t.needCon=e.target.value)}}})])]),t._v(" "),a("ul",{staticClass:"mount"},[t._m(1),t._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"number",name:"",value:"",placeholder:"请输入您的预算金额"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"area_bot"},[a("p",{staticClass:"top_title"},[t._v("联系方式")]),t._v(" "),a("ul",{staticClass:"mount"},[t._m(2),t._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contactName,expression:"contactName"}],attrs:{type:"text",name:"",value:"",placeholder:"请输入联系人姓名"},domProps:{value:t.contactName},on:{input:function(e){e.target.composing||(t.contactName=e.target.value)}}})])]),t._v(" "),a("ul",{staticClass:"mount"},[t._m(3),t._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contactPhone,expression:"contactPhone"}],attrs:{type:"number",name:"",value:"",placeholder:"请输入联系人电话"},domProps:{value:t.contactPhone},on:{input:function(e){e.target.composing||(t.contactPhone=e.target.value)}}})])])])]),t._v(" "),a("p",{staticClass:"put_need",on:{click:function(e){return t.subNeed()}}},[t._v("提交")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("需求描述：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("预算金额：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("联系人：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("联系电话：")])])}]};var s=a("C7Lr")(n,o,!1,function(t){a("YkgW")},"data-v-62013fdb",null);e.default=s.exports},YkgW:function(t,e){}});
//# sourceMappingURL=17.e33136710dc8b5e5cc98.js.map