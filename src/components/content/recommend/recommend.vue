<template>
  <div class="recommend">
    <recommmend-item
      v-for="(item, index) in recommendData.list"
      :itemdata="item"
      :key="index"
    ></recommmend-item>
  </div>
</template>

<script>
/**
 * recommend组件
 * 根据浏览商品的类型向后台请求推荐的商品列表
 * */
import { getRecommendData } from "@/network/recommend";
import recommmendItem from "./recommmendItem";
export default {
  name: "recommend",
  components: {
    recommmendItem,
  },
  props: {
    goods_style: {
      type: Object,
      default() {
        // return {type:'衣服',style:'热门'}
        return null;
      },
    },
  },
  data() {
    return {
      recommendData: {},
    };
  },
  methods: {
    getdata() {
      //请求数据的方法
      if (this.goods_style !== null) {
        getRecommendData(this.goods_style.type, this.goods_style.style).then(
          (res) => {
            this.recommendData = res;
          }
        );
      }
    },
  },
  created() {
    this.getdata();
  },
  watch: {
    goods_style() {
      //监听goods_style的值的变化
      this.getdata();
    },
  },
};
</script>

<style scoped>
.recommend {
  width: 100%;
  text-align: center;
}
</style>