<template>
    <div class="cart">
<!--        头部-->
        <div class="cartNavbar">
            <nav-bar>
                <div slot="center">购物车({{productNum}})</div>
                <div slot="right" class="right" @click="manageCart">管理</div>
            </nav-bar>
        </div>
<!--        列表-->
         <cart-product-list></cart-product-list>
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
        alert('别点了~还没有开发该模块功能~')
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
        position: fixed;
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
</style>