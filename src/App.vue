<template>
  <div id="app">
    <router-view></router-view>
    <mainTabbar></mainTabbar>
  </div>
</template>
<script>
 import mainTabbar from "./components/tabbar/mainTabbar";
  export default {
    components: {
      mainTabbar
    }
  }

</script>
<style>
/*@import "assets/css/base.css";*/
</style>
