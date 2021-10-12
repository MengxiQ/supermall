<template>
    <div class="goodsDetail">
        <div class="adv">
            <div class="line"><span class="poin"></span></div>
            {{goodsDetail.adv}}
            <div class="line_right"><span class="poin_right"></span></div>
        </div>
        <div class="desc">{{goodsDetail.desc}}</div>
        <div class="imgs" ref="imgs">
            <img v-for="(item,index) in goodsDetail.imgs" :key="index" :src="item" alt="">
        </div>
        <item-params :itemParems="itemParems" ref="itemParems"></item-params>
        <h4 class="recommendTitle">热卖推荐</h4>
        <recommend :goods_style="goodsDetail.goodsStyle" ref="recommend"></recommend>
    </div>
</template>

<script>
    import itemParams from "./goodsDetailChidrens/itemParams";
    import recommend from "@/components/content/recommend/recommend";

  export default {
    name: "goodsDetail",
    components:{
      itemParams,
      recommend,
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
    .recommendTitle{
        text-align: center;
        margin:20px 0;
    }
</style>