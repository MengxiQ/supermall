<template>
    <div class="assets">
        <div class="assetsInfo">
            <div class="balance"><a class="number">{{this.$store.state.assets.balance}}</a>元<p class="title">我的余额</p></div>
            <div class="coupons"><a class="number">{{this.$store.state.assets.coupons}}</a>个<p class="title">我的优惠</p></div>
            <div class="integration"><a class="number">{{this.$store.state.assets.integration}}</a>分<p class="title">我的积分</p></div>
        </div>
        <div class="myassets">
            <div class="MyMessage line">
                <div class="logo"><img src="@/assets/img/profile/message.svg" alt=""></div>
                <div class="text">我的消息</div></div>
            <div class="mySelected line">
                <div class="logo"><img src="@/assets/img/profile/collect.svg" alt=""></div>
                <div class="text">我的收藏</div></div>
            <div class="myCoupons line">
                <div class="logo"><img src="@/assets/img/profile/vip.svg" alt=""></div>
                <div class="text">会员卡</div></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "assets"
  }
</script>

<style scoped>
    .assets{
        overflow: hidden;
    }
    .assetsInfo{
        text-align: center;
        background-color: white;
        box-shadow:0 0 3px rgba(171, 171, 171, 0.29);
    }
    .balance,.coupons,.integration{
        display: inline-block;
        text-align: center;
        overflow: hidden;
        height: 100px;
        /*background-color: #e095c1;*/
        padding: 25px 0;
        line-height: 25px;
        width:33%;
    }
    .balance,.coupons{
        border-right: rgba(144, 144, 144, 0.22) solid 1px ;
    }
    .number{
        color: var(--color-high-text);
        font-weight: bold;
    }
    .title{
        font-size: 14px;
    }


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