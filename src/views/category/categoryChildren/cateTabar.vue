<template>
    <ul class="cateTabar">
        <li class="item" v-for="(item,index) in title"
            :class="{isActive:isCurrent === index}"
            :key="index"
            @click="btnClick(index)"
        >{{item}}</li>
    </ul>
</template>

<script>
  export default {
    name: "cateTabar",
    props:{
      title:{
        type:Array
      }
    },
    data(){
      return {
        isCurrent:0
      }
    },
    methods:{
      btnClick(index){
        this.isCurrent = index;
        this.$emit("btnClick",index);
      }
    }
  }
</script>

<style scoped>
    ul,li {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .cateTabar{
        position: absolute;
        background-color: #ebebeb;
        width: 25%;
        /*height: 100vh;*/
        bottom: 44px;
        top: 44px;
        min-height: 500px;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    ::-webkit-scrollbar{
        display: none;
    }
    .item{
        text-align: center;
        padding: 12px 0;
        margin-top: 0;
        transition: all 0.2s;
    }
    .isActive{
        background-color: white;
        border-left: #e031a7 solid 3px;
    }
</style>