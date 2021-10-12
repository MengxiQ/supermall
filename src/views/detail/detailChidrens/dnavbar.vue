<template>
    <div class="dnavbar">
    <nav_bar :key="'mdnavbar'">
        <img class="left"
             slot="left"
             @click="routerback"
             src="@/assets/img/navIron/navback.svg" alt="">
        <img @click="toCart"  class="right" slot="right" src="@/assets/img/navIron/navcart.svg" alt="">
    </nav_bar>
    </div>
</template>

<script>
  import nav_bar from "@/components/common/nav-bar/nav_bar";
  export default {
    name: "dnavbar",
    components:{
      nav_bar
    },
    methods:{
      routerback(){
        this.$router.back();
      },
      toCart(){
        this.$router.push('/cart');
      }
    }
  }
</script>

<style scoped>
    .dnavbar{
        position: absolute;
        width: 100%;
        top: 0;


    }
    .left{
        height: 44px;
        /*background-color: rgba(0, 0, 0, 0.36);*/
        padding: 10px 10px 10px 15px;
        border-radius: 50%;
    }
    .right{
        height: 44px;
        /*background-color: rgba(0, 0, 0, 0.36);*/
        padding: 10px 15px 10px 10px;
        border-radius: 22px;
    }
    .dnavbar{
        background-color: deeppink;
        box-shadow: 0 0px 4px rgba(0,0,0,0.1);
    }
</style>