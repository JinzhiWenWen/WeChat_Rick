webpackJsonp([15],{DgKS:function(t,e){},kcl3:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{bannerUrl:"../../static/img/banner.jpg",newsList:[],pageTitle:"",lisType:"",pageNum:0}},created:function(){this.pageTitle=this.$route.query.title,this.lisType=this.$route.query.listType},mounted:function(){this.getNewsList()},methods:{getNewsList:function(){var t=this,e=this;e.$axios.post(e.oUrl+"/view/findNewsListByCondition?type="+e.lisType+"&size=10&page="+this.pageNum).then(function(s){for(var n in t.$refs.loadmore.onTopLoaded(),e.newsList=s.data.data.content,e.newsList){if(e.newsList[n].title.length>10){var i=e.newsList[n].title;console.log(i),e.newsList[n].title=i.substring(0,14)+"..."}if(e.newsList[n].intro.length>38){var a=e.newsList[n].intro;e.newsList[n].intro=a.substring(0,39)+"..."}}console.log(s)}).catch(function(t){console.log(t)})},newsDe:function(t){this.$router.push({name:"NewsDetails",params:{Mes:this.newsList[t].content}})},loadTop:function(){this.getNewsList()}},components:{WorkHeader:s("qqdu").a}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news_list"},[s("WorkHeader",[s("span",[t._v(t._s(t.pageTitle))])]),t._v(" "),s("div",{staticClass:"news_newsDeta"},[s("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,topPullText:"加载中"}},[s("ul",t._l(t.newsList,function(e,n){return s("li",{on:{click:function(e){return t.newsDe(n)}}},[s("img",{attrs:{src:"http://rightservicetech.com:8080/"+e.imgName,alt:""}}),t._v(" "),s("span",{staticClass:"news_newsDeta_title"},[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"news_newsDeta_de"},[t._v(t._s(e.intro))]),t._v(" "),s("span",{staticClass:"news_newsDeta_time"},[t._v(t._s(e.timeStr))])])}),0)])],1)],1)},staticRenderFns:[]};var a=s("C7Lr")(n,i,!1,function(t){s("DgKS")},"data-v-2b3418b2",null);e.default=a.exports}});
//# sourceMappingURL=15.6edd6f485e6f029810f6.js.map