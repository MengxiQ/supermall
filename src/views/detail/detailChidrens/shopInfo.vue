<template>
    <div class="shopInfo">
        <div class="logo"><img :src="shopInfo.logo" alt=""></div>
        <div class="info_box">
            <div class="name">{{shopInfo.name}}</div>
            <div class="shopinfo"><span class="score">***{{shopInfo.score}}</span><span>|</span><span class="cgoods">在架商品&nbsp;&nbsp;{{shopInfo.cGoods}}</span></div>
            <div><span class="cFans">{{shopInfo.cFans}}人关注</span><span class="cSell">累计销量{{shopInfo.cSell}}</span></div>
        </div>
        <span class="goshop"> <a :href="shopInfo.url">进店&nbsp;&nbsp;></a></span>
    </div>
</template>

<script>
  export default {
    name: "shopInfo",
    props:{
      shopInfo:{
        type:Object
      }
    }
  }
</script>

<style scoped>
    .shopInfo{
        background-color: white;
        margin-bottom: 10px;
        padding:15px;
        position: relative;
    }
    .logo{
        height:80px;
        width: 80px;
        background-color: #f977c8;
        display: inline-block;
        overflow: hidden;
    }
    .info_box{
        font-size: 16px;
        display: inline-block;
        overflow: hidden;
        height: 80px;
        width: 200px;
        /*background-color: #e031a7;*/

        padding:2px 8px;
    }
    .info_box>div{

        margin-bottom:6px
    }
    .name{
        font-weight: bold;
    }
    span{
        font-size: smaller;
    }
    .score{

        padding-right: 10px;
    }
    .cgoods{

        padding-left: 10px;
    }
    .cFans,.cSell{
        font-size: 11px;
        margin-right: 5px;
        padding: 2px;
        border: 1px solid var(--color-tint);
        border-radius: 10px;
        color: var(--color-tint);
    }
    .goshop{
        /*background-color: #e031a7;*/
        display:block;
        position: absolute;
        top: 10px;
        right: 10px;
    }
</style>