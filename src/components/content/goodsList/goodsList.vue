<template>

    <div class="goodsList">
        <goods-list-item v-for="(item,index) in goods" :key="index" :goods_item="item"></goods-list-item>
    </div>

</template>

<script>
    import goodsListItem from "./goodsListItem";

  export default {
    name: "goodsList",
    props:{
      goods:{
        type:Array,
        default(){return []}
      }
    },
    data(){
      return{
      }
    },
    components:{
      goodsListItem
    },
    mounted() {

    }

  }
</script>

<style scoped>

.goodsList{

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /*margin-bottom: 44px;*/
    /*background-color: rebeccapurple;*/


}
</style>