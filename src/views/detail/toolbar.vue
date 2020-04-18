<template>
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
            <span class="point" ref="point"
                  :class="{anim:isAnim}"></span></td>
        <td class="buyNow">立即购买</td>
    </tr>
    </table>
</template>

<script>
  export default {
    name: "toolbar",
    data(){
      return{
        publicPath:process.env.BASE_URL,
        title:[{key:'shop',value:'店铺'},{key:'services',value:'客服'},{key:'collect',value:'收藏'}],
        isCurrent:null,
        isAnim:false
      }
    },
    methods:{
      btnClick(index){
        this.isCurrent = index;
      },
      addCart(){
        console.log('加入购物车！');
        this.isAnim = true;
      },
      showanim(){

      }
    }

  }
</script>

<style scoped>
    .tollbar_box{
    }
    table,td,tr{
        border: rgba(241, 241, 241, 0.36) 2px solid ;
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
    .point{
        display: inline-block;
        background-color: peru;
        height: 20px;
        width: 20px;
        position: absolute;
        right: 40px;
        top: 10px;
        z-index: 20;
        opacity: 0;


    }
    .anim{
    }

</style>