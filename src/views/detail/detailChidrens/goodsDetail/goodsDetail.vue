<template>
    <div class="goodsDetail">
        <div class="adv">
            <div class="line"><span class="poin"></span></div>
            {{goodsDetail.adv}}
            <div class="line_right"><span class="poin_right"></span></div>
        </div>
        <div class="desc">{{goodsDetail.desc}}</div>
        <div class="imgs">
            <img v-for="(item,index) in goodsDetail.imgs" :key="index" :src="item" alt="">
        </div>
        <item-params :itemParems="itemParems"></item-params>
    </div>
</template>

<script>
    import itemParams from "./goodsDetailChidrens/itemParams";
  export default {
    name: "goodsDetail",
    components:{
      itemParams
    },
    props:{
      goodsDetail:{
        type:Object
      },
      itemParems:{
        type:Object
      }
    }
  }
</script>

<style scoped>
    .goodsDetail{

        background-color: white;
        padding: 15px;
    }
    .adv{
        padding:10px 0 ;
    }
    .desc{
        /*background-color: #e031a7;*/
        clear: both;
        padding:15px 0 ;
    }
    .imgs>img{
        width: 100%;
    }
    .line{
        background-color: #4b4b4b;
        height: 1px;
        width: 30%;
        position: relative;
        margin-bottom: 30px;
    }
    .poin{
        display: block;
        height: 7px;
        width: 7px;
        border-radius: 50%;
        background-color: #cacaca;
        position: absolute;
        top: -3px;
    }
    .line_right{
        float: right;
        background-color: #cacaca;
        height: 1px;
        width: 30%;
        position: relative;
        margin: 30px 0 10px 0;
    }
    .poin_right{
        display: block;
        height: 7px;
        width: 7px;
        border-radius: 50%;
        background-color: #cacaca;
        position: absolute;
        top: -3px;
        right: 0;
    }
</style>