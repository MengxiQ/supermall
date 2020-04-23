<template>
    <ul class="cateView">
        <li class="item" v-for="(item,index) in currentViewData"
            :key="index"
            @click="itemClick(item.title)"
        >
            <img class="img" :src="item.img" alt="">
            <div class="title">{{item.title}}</div>
        </li>
    </ul>
</template>

<script>
  export default {
    name: "cateView",
    props: {
      currentViewData: {
        type: Array,
      }
    },
    methods:{
      itemClick(itemTitle){
        alert('跳转到分类展示页，当前分类为：'+itemTitle);
      }
    }
  }
</script>

<style scoped>
    ul,li{
       list-style: none;
        padding: 0;
        margin:0 ;

    }
    .cateView{
        position: absolute;
        background-color: #f9f9f9;
        /*height: 100%;*/
        top: 44px;
        bottom: 44px;
        width: 75%;
        left: 25%;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .item{
        text-align: center;
        display: inline-block;
        width: 50%;
        margin-top: 15px;
        font-size: 13px;
    }
    .img{
        display: inline-block;
        background-color: #e095c1;
        height:110px;
        width: 110px;
        border-radius: 8px;
    }

</style>