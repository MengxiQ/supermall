<template>
    <div id="recommend">
        <li class="recommend_item" v-for="(item,index) in res_recommend" :key="index">
            <a :href="item.link"><img :src="item.image" alt=""><div>{{item.title}}</div></a>
        </li>
    </div>
</template>

<script>
  export default {
    name: "recommend",
    props:{
      res_recommend:{
        type:Array
      }
    }
  }
</script>

<style scoped>
*,
ul,
li{
    list-style: none;
    margin: 0;
    padding: 0;
}
    #recommend{
        background-color: white;
        height: 110px;
        display: flex;
        /*background-color: rebeccapurple;*/
        text-align: center;
        overflow: hidden;
        font-size: 12px;
        margin-bottom: 10px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);

    }
    .recommend_item{
        margin: auto;
    }
    .recommend_item>a>img{
        height: 70px;
    }
</style>