<template>
    <div class="goodsListItem">
<!--        <img src="../../../assets/img/goods/new/03.jpg" alt="">-->
        <img class="goodsListItem_img" :src="goods_item.show.img" alt="">
        <span class="goodsListItem_title">{{goods_item.title}}</span>
        <div class="goodsListItem_desc">
        <span class="goodsListItem_price">{{goods_item.price | price}}</span>
        <span class="goodsListItem_cfac" >{{goods_item.cfav}}</span>
        <img class="goodsListItem_select" @click="select" v-if="isSelected" src="../../../assets/img/cfav/collect-active.svg" alt="萌系Q">
        <img class="goodsListItem_select" @click="select" v-else src="../../../assets/img/cfav/collect.svg" alt="萌系Q">
        </div>
    </div>
</template>

<script>
  export default {
    name: "goodsListItem",
    data(){
      return{
        isSelected:false
      }
    },
    props:{
      goods_item:{
        type:Object,
        default(){ return {} }
      }
    },
    methods:{
      select(){
        if (this.isSelected === false){
          this.goods_item.cfav =(parseInt(this.goods_item.cfav)+1).toString();
          //更新数据
        }else{
          this.goods_item.cfav =(parseInt(this.goods_item.cfav)-1).toString();
          //更新数据
        }
        this.isSelected = ! this.isSelected;
      }
    },
    filters:{
      price(value){
        return '￥'+value;
      }
    }
  }
</script>

<style scoped>
    .goodsListItem{
        /*background-color: rebeccapurple;*/
        height: 260px;
        width: 47%;
        overflow: hidden;
        font-size: 14px;
        box-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        margin: 5px;
        padding: 2px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .goodsListItem_img{
        height: 210px;
        width: 100%;
        overflow: hidden;
    }
    .goodsListItem_title{
        /*background-color: rebeccapurple;*/
        display: block;
        height: 16px;
        overflow: hidden;
    }
    .goodsListItem_desc{
        /*background-color: rosybrown;*/
        display: flex;
        align-items : center;
        justify-content : space-around;
    }
    .goodsListItem_desc>span{
        display: inline-block;
    }
    .goodsListItem_price{
        color:var(--color-tint);
        /*background-color: rebeccapurple;*/
        padding-right: 40px;
    }
    .goodsListItem_cfac{
        padding-left: 40px;
    }
    .goodsListItem_select{
        display: inline-block;
        height: 20px;
        width: 20px;
        transition: all 1s;
        background-color: #f9f9f9;
    }
</style>