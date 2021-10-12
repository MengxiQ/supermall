<template>
  <div class="goodsList">
    <goods-list-item v-for="item in goods" :key="item.id" :goods_item="item">
    </goods-list-item>
  </div>
</template>

<script>
import goodsListItem from "./goodsListItem";

export default {
  name: "goodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
    goods_type: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {};
  },
  components: {
    goodsListItem,
  },
  updated() {
    // console.log(this.goods_type);
  },
};
</script>

<style scoped>
.goodsList {
  width: 100%;
  overflow: hidden;
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*justify-content: space-around;*/
  /*margin-bottom: 44px;*/
  /*background-color: rebeccapurple;*/
}
</style>