<template>
  <div id="app">
    <keep-alive exclude="detail">
    <router-view></router-view>
    </keep-alive>
    <mainTabbar></mainTabbar>
  </div>
</template>
<script>
 import mainTabbar from "@/components/content/tabbar/mainTabbar";
  export default {
    components: {
      mainTabbar
    },

  }

</script>
<style>
@import "assets/css/base.css";
  #app{
    position: relative;
    overflow: hidden;
  }
</style>
