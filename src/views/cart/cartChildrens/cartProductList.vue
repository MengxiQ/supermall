<template>
    <div class="cartProductList">
        <cart-product-list-item v-for="(item,index) in ProductList"
                                :key="index"
                                :product="item"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import CartProductListItem from "./cartProductListItem";
  export default {
    name: "cartProductList",
    components: {CartProductListItem},
    computed:{
      ...mapGetters(["ProductList"])
    }

  }
</script>

<style scoped>
    .cartProductList{
        position: absolute;
        /*height: 100%;*/
        width: 100%;
        top: 44px;
        bottom:88px ;
        overflow-x: hidden;
        overflow-y: scroll;
        background-color: #f9f9f9;
    }
</style>