<template>
    <ul class="cateView">
        <li class="item" v-for="(item,index) in currentViewData"
            :key="index">
            <a href=""><img class="img" :src="item.img" alt=""></a>
            <div class="title">{{item.title}}</div>
        </li>
    </ul>
</template>

<script>
  export default {
    name: "cateView",
    props: {
      currentViewData: {
        type: Array,
        // default() {
        //   return []
        // }
      }
    }
  }
</script>

<style scoped>
    ul,li{
       list-style: none;
        padding: 0;
        margin:0 ;

    }
    .cateView{
        position: absolute;
        background-color: #f9f9f9;
        /*height: 100%;*/
        top: 44px;
        bottom: 44px;
        width: 75%;
        left: 25%;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .item{
        text-align: center;
        display: inline-block;
        width: 50%;
        margin-bottom: 15px;
        font-size: 14px;
    }
    .img{
        display: inline-block;
        background-color: #e095c1;
        height:110px;
        width: 110px;
    }

</style>