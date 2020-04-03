<template>
    <div id="rankingList">
        <h5>{{title}}</h5>
        <div class="rankingList_row">
        <li class="rankingList_item" v-for="(item,index) in re_keywords" :key="index">
            <a href=""><img src="" alt="萌系Q"></a>
            <div class="rankingList_title">{{item.words}}</div>
        </li>
        </div>
<!--        <div class="rankingList_row">-->
<!--            <li class="rankingList_item" v-for="(item,index) in re_keywords" :key="index">-->
<!--                <a href=""><img src="" alt="萌系Q"></a>-->
<!--                <div class="rankingList_title">{{item.words}}</div>-->
<!--            </li>-->
<!--        </div>-->
    </div>
</template>

<script>
  export default {
    name: "rankingList",
    props:{
      re_keywords:{
        type:Array
      }
    },
    data(){
      return{
        title:'本周流行',
        // res_ranking_lists:{
        //   row1:['萌系Q1','萌系Q1','萌系Q1','萌系Q1'],
        //   row2:['萌系Q2','萌系Q2','萌系Q2','萌系Q2']
        // }
      }
    }
  }
</script>

<style scoped>
    #rankingList{
        background-color: white;
        height: 230px;
        width: 100%;
        /*background-color: rebeccapurple;*/
        text-align: center;
        box-shadow: 0 -1px 2px rgba(0,0,0,0.01);
        /*margin-bottom: 200px;*/
        overflow: hidden;
    }
    #rankingList > h5{
       /*padding: 5px;*/
        padding-top: 10px;
    }
    #rankingList>img{
        height: 100%;
        width: 100%;
    }
    *,
    ul,
    li{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .rankingList_row{
        /*display: flex;*/
        /*display: inline-block;*/
    }
    .rankingList_item{
        text-align: center;
        margin: 10px auto auto;
        display: inline-block;
        width: 25%;
    }
    .rankingList_item>a>img{
        display: inline-block;
        line-height: 70px;
        color: white;
        font-size: 13px;
        background-color: #f6f6f6;
        height: 70px;
        width: 70px;
        /*//*/
        border-radius: 50%;
    }
    .rankingList_title{
        font-size: 12px;
        padding: 2px;
    }
</style>