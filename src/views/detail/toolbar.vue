<template>
    <div class="toolbar" >
        <table>
        <tr class="tollbar_box">
            <td v-for="(item,index) in title" :key="index"
                :class="{item:true,isActive:index === isCurrent}" @click="btnClick(index)">
                <img v-if="isCurrent !== index "
                     :src="publicPath+'toolbar/'+item.key+ '.svg'" alt="">
                <img v-else :src="publicPath+'toolbar/'+item.key+'_active.svg' " alt="">
                <div class="title">{{item.value}}</div>
            </td>
            <td class="joinCart" @click="addCart"
                >加入购物车
            <td class="buyNow">立即购买</td>
        </tr>
        </table>
<!--        <toast ref="toolbar_toast"></toast>-->
    </div>
</template>

<script>

  // import Toast from "../../components/common/toast";
  export default {
    name: "toolbar",
    // components: {Toast},
    props:{
      cartProduct:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        publicPath:process.env.BASE_URL,
        title:[{key:'shop',value:'店铺'},{key:'services',value:'客服'},{key:'collect',value:'收藏'}],
        isCurrent:null,

      }
    },

    methods:{
      btnClick(index){
        this.isCurrent = index;
      },
      addCart(){
        //判断是否有该商品
       if(this.cartProduct.iid !== undefined){
        //将数据对象提交到vuex
        if (this.cartProduct) {
          this.$store.dispatch("addToCart", this.cartProduct).then(res => {
            //显示toast信息
            this.$toast.show(res,1500);

          })
         }
        }
      },
    }

  }
</script>

<style scoped>
    .toolbar{
        width: 100%;
    }
    .tollbar_box{
        box-shadow: -1px 0 2px rgba(143, 143, 143, 0.11);
    }
    table,td,tr{
        border: rgba(227, 227, 227, 0.42) 1px solid ;
    }
    table{
        background-color: white;
        position: absolute;
        z-index: 12;
        bottom: 0;
        left: 0;
        right: 0;
        /*background-color: azure;*/
        width: 100%;
        border-collapse:collapse;

    }
    td{
        height: 54px;
        text-align: center;
        /*overflow: hidden;*/
    }
    .item{
        padding: 0 0;

    }
    .item>img{
        height: 22px;
    }
    .title{
        font-size: 12px;
    }
    .isActive{
        color: var(--color-high-text);
    }
    .joinCart{
        background-color: rgba(255, 134, 193, 0.35);
        width: 30%;
        line-height: 54px;
        color: var(--color-high-text);
        position: relative;
    }
    .buyNow{
        background-color: deeppink;
        width: 30%;
        line-height: 54px;
        color: #fafafa;
    }


</style>