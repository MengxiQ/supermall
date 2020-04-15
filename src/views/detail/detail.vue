<template>
    <div class="detail">
        <div v-if="iid !== undefined">
            <detailcarousels :res_banner="swipper" ></detailcarousels>
            <item-info :itemInfo="itemInfo"></item-info>
            <shop-info :shopInfo="shopInfo"></shop-info>
            <goods-detail :goodsDetail="goodsDetail" :itemParems="itemParems"></goods-detail>
        </div>
        <div v-else>
<!--            //如果找不到该商品的详情页-->
            没有找到该商品！
        </div>
    </div>
</template>

<script>
    import detailcarousels from "./detailChidrens/detailcarousels";
    import {getDetaildataByIid} from "@/network/detail";
    import itemInfo from "./detailChidrens/itemInfo";
    import shopInfo from "./detailChidrens/shopInfo";
    import goodsDetail from "./detailChidrens/goodsDetail/goodsDetail";
    export default {
        name: "detail",
        computed:{
          iid(){
            return this.$route.query.iid;
          }
        },
      components:{
        shopInfo,
        itemInfo,
        detailcarousels,
        goodsDetail
      },
        data(){
          return{
            swipper:[],
            itemInfo:{},
            conmment:{},
            shopInfo:{},
            itemParems:{},
            recommend:{},
            goodsDetail:{}
          }
        },
      created() {
        getDetaildataByIid(this.iid).then(res =>{
         //处理数据
          this.swipper = res.swipper.img.lists;
          this.itemInfo = res.itemInfo;
          this.conmment = res.conmment;
          this.shopInfo = res.shopInfo;
          this.itemParems = res.itemParams;
          this.recommend = res.recommend;
          this.goodsDetail = res.goodsDetail;

        } )
      }
    }
</script>

<style scoped>
    .detail{
        position: absolute;
        display: block;
        background-color: #f6f6f6;
        height: 100vh;
        width: 100%;
        z-index: 20;
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>