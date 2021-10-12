<template>
    <div class="cart">
<!--        头部-->
        <div class="cartNavbar">
            <nav-bar>
                <div slot="center">购物车({{productNum}})</div>
                <div slot="right" class="right" @click="manageCart">管理</div>
            </nav-bar>
        </div>

    <!--     购物车不为空，显示列表-->
        <cart-product-list v-if="this.$store.getters.cartListLength !== 0"/>
<!--        购物车为空-->
        <div v-else class="cartNull">
            <img src="@/assets/img/cart/cartNull.svg" alt="">
            <p>购物车为空~</p>
<!--            <p>钱不是省出来了，是挣出来的。</p>-->
            <p>买点啥？犒劳一下努力生活的你~</p>
        </div>

<!--        底部工具栏-->
        <cart-toolbar></cart-toolbar>
    </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import NavBar from "../../components/common/nav-bar/nav_bar";
  import CartProductList from "./cartChildrens/cartProductList";
  import CartToolbar from "./cartChildrens/cartToolbar";
  export default {
    name: "cart",
    components: {CartToolbar, CartProductList, NavBar},
    computed:{
      ...mapGetters({productNum:'cartListLength'})
    },
    methods:{
      manageCart(){
        this.$toast.show('别点了~还没有开发该模块功能~')
      }
    }
  }
</script>

<style scoped>
    .cart {
        position: relative;
        height: 100vh;
        width: 100%;
        overflow: hidden;



    }
    .cartNavbar{
        position: absolute;
        background-color: deeppink;
        height: 44px;
        width: 100%;
        color: white;
    }
    .right{
        /*padding-left: 1px;*/
        /*background-color: #8f8f8f;*/
        padding-right: 15px;
        font-size:14px;
        color: rgba(255, 255, 255, 0.85);
    }
    .cartNull{
        position: absolute;
        width: 100%;
        overflow: hidden;
        top: 44px;
        bottom: 88px;
        /*height: 100vh;*/
        /*background-color: red;*/
        text-align: center;
        font-size: 14px;
        color: rgba(102, 102, 102, 0.85);
        line-height: 22px;
    }
    .cartNull>img{
        margin-top: 50px;
        height: 150px;
        margin-bottom: 10px;
        opacity: 0.7;
    }
</style>