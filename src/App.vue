<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="view_box">
        <!-- <keep-alive>
          <router-view v-if="$route.meta.keep"></router-view>
        </keep-alive> -->
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return{
      reload:this.reload,
    }
  },
  data(){
    return{
      isLoad:true
    }
  },
  methods:{
    reload(){
      this.isLoad=false;
      this.$nextTick(()=>{
        this.isLoad=true;
      })
    }
  },
  components:{
  }
}
</script>

<style>
#app {
  font-family: 'MyriadPro Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0;
  padding:0;
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 2rem;
}
.view_box{
  padding-bottom: .2rem;
}
#nprogress .bar {
  background: #eb7a1d !important;
}
</style>
