<template>
    <div class="goodsListItem" >
<!--        <img src="../../../assets/img/goods/new/03.jpg" alt="">-->
        <img class="goodsListItem_img"
             :src="goods_item.show.img"
             alt=""
             @click="itemclick">
        <span class="goodsListItem_title" >{{goods_item.title}}</span>
        <div class="goodsListItem_desc" >
        <span class="goodsListItem_price" >{{goods_item.price | price}}</span>
        <span class="goodsListItem_cfac" >{{goods_item.cfav}}
        <img class="goodsListItem_select" @click="select" v-if="isSelected" src="../../../assets/img/cfav/collect-active.svg" alt="萌系Q" >
        <img class="goodsListItem_select" @click="select" v-else src="../../../assets/img/cfav/collect.svg"  alt="萌系Q">
        </span>
        </div>
    </div>
</template>

<script>
    import {EventBus} from "../../../bus/event-bus";

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
      computed:{
      },
    methods:{
      itemclick(){//跳转到详情页
        // console.log(this.goods_item.iid);
        this.$router.push({
          path:"/detail",
          query:{
            iid:this.goods_item.iid
          }
        });
      },
      select(){
        if (this.isSelected === false){
          this.goods_item.cfav =(parseInt(this.goods_item.cfav)+1).toString();
          EventBus.$emit('selectedGoods',{id:this.goods_item.id,op:'+'});
          //更新数据，记得往服务器更新。
        }else{
          this.goods_item.cfav =(parseInt(this.goods_item.cfav)-1).toString();
          EventBus.$emit('selectedGoods',{id:this.goods_item.id,op:'-'});
          //更新数据,记得往服务器更新。
        }
        this.isSelected = ! this.isSelected;
      },
      checkSelected(){
        // 检查该商品是否被收藏
        // this.isSelected
        EventBus.$on('CheckRes',(res) => {
          res.forEach(item => {
              if(item === this.goods_item.id){
                this.isSelected = true;
              }
            })

        });


      }
    },
    filters:{
      price(value){
        return '￥'+value;
      }
    },
      mounted() {
        // console.log('重新挂载1');
        //判断是否收藏改商品
         this.checkSelected();

      },
      updated() {
        // console.log('更新');
      },
      destroyed() {
        // console.log('我被销毁了1');
      }
    }
</script>

<style scoped>
    .goodsListItem{
        height: 260px;
        width: 47%;
        overflow: hidden;
        font-size: 14px;
        box-shadow: 1px 1px 2px rgba(0,0,0,0.05);
        background-color: white;
        border-radius: 5px;
        margin: 5px;
        /*padding: 10px;*/
        display: inline-block;

    }
    .goodsListItem_img{
        display: block;
        background-color: #e095c1;
        height: 210px;
        width: 100%;
        overflow: hidden;
        border-radius: 5px;
        color: #f9f9f9;
    }
    .goodsListItem_title{
        /*background-color: rebeccapurple;*/
        height: 18px;
        line-height: 18px;
        display: block;
        overflow: hidden;
        padding: 0 1px;
    }
    .goodsListItem_desc{
        margin-top: 5px;
        /*background-color: #e031a7;*/
        display: flex;
        align-items : center;
        justify-content: space-between;
    }
    .goodsListItem_desc>span{
        display: inline-block;
    }
    .goodsListItem_price{
        color:var(--color-tint);
        font-weight: bold;

    }
    .goodsListItem_cfac{
        display: inline-block;
        /*background-color: #e031a7;*/
        font-size: 12px;
        width: 40px;
        position: relative;
        padding: 2px;
        color: #7a7a7a;

    }
    .goodsListItem_select{
        /*height: 20px;*/
        width: 20px;
        position: absolute;
        top: -1.5px;
        left: 18px;
    }
</style>