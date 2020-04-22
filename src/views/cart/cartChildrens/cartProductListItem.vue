<template>
    <div class="cartProductListItem">

        <div class="shopName"><img src="@/assets/img/cart/shop.svg" alt="">{{product.shopName}}</div>
        <div class="checkbtn" @click="checkClick"><checkbotton :isCheck="isCheck"/></div>
        <div class="img"> <img :src="product.img" alt=""></div>
        <div class="rightbox">
            <div class="name">{{product.name}}</div>
            <div class="price">￥{{product.price}}</div>
            <div class="count">x{{product.count}}</div>
        </div>
    </div>
</template>

<script>
  import Checkbotton from "../../../components/common/checkbotton/checkbotton";
  export default {
    name: "cartProductListItem",
    components: {Checkbotton},
    props:{
      product:{
        type:Object,
        default(){return {}}
      }
    },
    data(){
      return{

      }
    },
    computed:{
      isCheck(){
        return this.product.isCheck
      }
    },
    methods:{
      checkClick(){
        this.$store.commit("changeCheck",this.product.iid);
      }
    }
  }
</script>

<style scoped>
    .cartProductListItem{
        background-color: white;
        margin: 4px 6px;
        /*height: 135px;*/
        overflow: hidden;
        position: relative;
        border-radius: 4px;
        box-shadow:0 0 1px rgba(188, 188, 188, 0.16);
        /*margin-top: 100px;*/
    }
    .shopName{
        font-size: 16px;
        font-weight: bold;
        margin-left: 25px;
        position: relative;
        height: 25px;
        margin-top: 5px;



    }
    .shopName>img{
        display: inline-block;
        position: absolute;
        height: 20px;
        left: -23px;
        top: -0.5px;
    }
    .img,.checkbtn,.rightbox {
        display: inline-block;
        overflow: hidden;
    }
    .checkbtn{
        height: 100px;
        text-align: center;
        width: 10%;
        line-height: 100px;

    }
    .img{
        height: 100px;
        width: 25%;
        padding: 4px;

    }
    .img>img{
        max-height:100%;
        max-width: 100%;
        min-width: 100%;
        min-height: 100%;
        border-radius: 4px;

    }
    .rightbox{
        padding:1px 4px;
        display: inline-block;
        height: 100px;
        width: 65%;
    }
    .name{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        font-size: 15px;
        line-height: 20px;
        height: 43px;
        width: 100%;
    }
    .price{
        padding:15px 0;
        width: 50%;
        color: var(--color-high-text);
        display: inline-block;
        font-weight: bold;
    }
    .count{
        padding:20px 0;
        width: 50%;
        display: inline-block;
        text-align: right;
        font-size: smaller;
        color: #8e8e8e;
        padding-right: 15px;
        /*font-size: larger;*/
        /*background-color: #e095c1;*/
    }


</style>