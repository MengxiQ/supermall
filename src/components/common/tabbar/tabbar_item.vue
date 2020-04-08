<template>
    <div :class="{active: isActive}" class="tabbar_item"  @click="itemClick">
        <div class="img">
        <slot name="img_active" v-if="isActive"></slot>
        <slot name="img" v-else></slot>
        </div>
        <div class="font">
        <slot name="font"></slot>
        </div>

    </div>
</template>

<script>
  export default {
    name: "tabbar_item",
    props:{
      path:{
        type:String
      }
    },
    data(){
      return{
      }
    },
    computed:{
      isActive(){
        return(
          this.$route.path.indexOf(this.path) == 0
        );
      }
    },
    methods:{
      itemClick(){
        if(this.$route.path.indexOf(this.path) == 0)
        {
          //如果当前活跃路径包含当前路径，那么不要跳转
        }else{
          this.$router.replace(this.path);
        }

      }
    }
  }
</script>

<style scoped>
    img{
        height: 22px;
        width: 22px;
        display: block;
    }
    .img{
        /*background-color: rebeccapurple;*/
        height: 22px;
        width: 22px;
        margin:3px auto 3px auto;

    }
    .font{
        font-family: 微软雅黑;
        font-size: 12px;
    }
    .active{
        color: rgb(212,35,122);
    }

    .tabbar_item{
        width: 25%;
        text-align: center;
    }
</style>