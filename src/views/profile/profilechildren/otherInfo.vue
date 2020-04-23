<template>
    <div class="otherInfo">
        <div class="myassets">
            <div class="MyMessage line">
                <div class="logo"><img src="@/assets/img/profile/cart.svg" alt=""></div>
                <div class="text">去购物</div></div>
            <div class="mySelected line">
                <div class="logo"><img src="@/assets/img/profile/shopping.svg" alt=""></div>
                <div class="text">下载购物APP</div></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "otherInfo"
  }
</script>

<style scoped>

    /*myassets*/
    .myassets{
        background-color: white;
        margin-top: 13px;
        box-shadow:0 0 2px rgba(171, 171, 171, 0.29);
        padding: 0 20px;
    }
    .line{
        height: 50px;
        /*margin-top: 10px;*/
        /*line-height: 50px;*/
        /*background-color: #f5f5f5;*/
        /*width: 100%;*/
        /*padding: 0 10px;*/
        border-bottom: rgba(229, 229, 229, 0.65) solid 1px;
    }
    .line>div{
        display: inline-block;

    }
    .logo{
        height: 50px;
        /*background-color: rebeccapurple;*/
        overflow: hidden;
        /*line-height: 50px;*/
        line-height: 60px;
    }
    .logo>img{
        display: inline-block;
        height: 25px;
        width: 25px;
        /*background-color: #a1a1a1;*/
    }
    .text{
        height: 50px;
        line-height: 50px;
        /*background-color: deeppink;*/
        overflow: hidden;
        padding-left: 8px;
    }
</style>