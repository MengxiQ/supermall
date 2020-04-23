<template>
    <div>
    <div class="itemInfo">
        <h1 class="price"><span>￥</span>{{itemInfo.price}}
            <span class="oldPrice">￥{{itemInfo.oldPrice}}
            </span></h1>
        <span class="tag">优惠价</span>

        <div class="desc">{{itemInfo.desc}}
            <span class="tag2" @click="helpSelect"> <img src="@/assets/img/detail/ai.svg" alt=""><span>帮我选</span></span></div>
        <div class="shipping">运费:{{itemInfo.shipping}}</div>
    </div>
        <div class="service">
            <span v-for="(item,index) in itemInfo.services" :key="index">
<!--                <img src="@/assets/img/detail/service.svg" alt="">-->
                {{item}}
            </span>
            <div class="goservice"> > </div>
        </div>
        <div class="service">
            <div>请选择：颜色 &nbsp; &nbsp;&nbsp; &nbsp;尺码</div>
            <div class="goservice"> > </div>
        </div>
    </div>

</template>

<script>
  export default {
    name: "itemInfo",
    props:{
      itemInfo:{
        type:Object
      }
    },
    methods:{
      helpSelect(){
        alert("helpSelect还没有开发~")
      }
    }
  }
</script>

<style scoped>
    .itemInfo{
        background-color: white;
        margin-bottom: 10px;
       box-shadow: 0 1px 2px rgba(151, 151, 151, 0.1);
    }
    .price{
        color: var(--color-tint);
        display: inline-block;
        position:relative ;
        margin: 10px;
    }
    .oldPrice{
        text-decoration:line-through;
        font-size: 14px;
        position: absolute;
        font-family: '微软雅黑',serif;
        color: #c2c2c2;
        font-weight: normal;
    }
    .tag{
        font-size: 12px;
        background-color: rgba(255, 20, 147, 0.24);
        color: #f00d49;

    }
    .desc{
        font-size: 15px;
        padding: 8px 100px 8px 15px;
        line-height: 23px;
        border-top: 0.1px solid rgba(0,0,0,0.05);
        border-bottom: 0.1px solid rgba(0,0,0,0.06);
        position: relative;
    }
    .shipping{
        padding: 10px 15px;
        font-size: smaller;
        color: #666666;
    }
    .tag2{
        position: absolute;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.09);
        display: block;
        height: 30px;
        /*line-height: 30px;*/
        width: 110px;
        right: -15px;
        bottom: 18px;
        border-radius: 20px;
        padding-left:5px;
        overflow: hidden;
        box-shadow: 1px  1px 1px rgba(0, 0, 0, 0.11);
        color: #757575;

    }
    .tag2>img{
        display: inline-block;
        height: 25px;
        /*background-color: #ff5777;*/
        margin: 2px 4px;
    }
    .tag2>span{
        margin: 2px 4px;
        display: inline-block;
        height: 24px;
        line-height: 25px;
        overflow: hidden;
        /*background-color: palevioletred;*/
    }
    .service{
        font-size: 12px;
        padding: 8px 15px;
        display: flex;
        justify-content: space-between;
        background-color: white;
        box-shadow: 0 1px 2px rgba(151, 151, 151, 0.1);
        margin-bottom: 10px;

    }
    .service>span{
        height: 20px;
        line-height: 20px;
        display: inline-block;
        position: relative;
        background: url("../../../assets/img/detail/service.svg") no-repeat left;
        background-size: 17px;
        padding-left: 20px;
    }
    .goservice{
        /*background-color: #e031a7;*/
        height: 20px;
        line-height: 20px;
        display: inline-block;
        text-align: center;
        width: 30px;
    }
</style>