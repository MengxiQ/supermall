<template>
    <div :class="{active: isActive}" class="tabbar_item"  @click="itemClick">

        <slot name="img_active" v-if="isActive"></slot>
        <slot name="img" v-else></slot>
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

    }
    .font{
        font-family: 微软雅黑;
        font-size: 10px;
    }
    .active{
        color: rgb(212,35,122);
    }

    .tabbar_item{
        width: 25%;
        text-align: center;
    }
</style>