<template>
    <div class="detail" ref="detail">
<!--        头部导航-->
        <dnavbar ></dnavbar>
<!--        滑动组件：监听滑动和滑动事件、x轴原生滑动-->
        <scroll ref="detailScroll"
                :probe_type="3"
                :eventPassthrough="'horizontal'"
                @content_scroll="getpositon"
                :key="'detailScroll'"
        >
<!--            如果能获取到商品详情-->
        <div v-if="iid !== undefined">
            <detailcarousels :res_banner="swipper" ></detailcarousels>
            <item-info :itemInfo="itemInfo"></item-info>
            <shop-info :shopInfo="shopInfo"></shop-info>
<!--            tabcontrol-->
            <div class="dtab">
            <tab-control :tabControl_title="['图文详情','商品参数','热卖推荐']"
                         :key="'detailtabConCtrol'"
                         @tabClick="changeposition"
                         ref="detailtabConCtrol"
            ></tab-control>
            </div>
<!--            商品展示-->
            <goods-detail :goodsDetail="goodsDetail"
                          :itemParems="itemParems"
                          ref="goodsDetail"
            ></goods-detail>
        </div>
<!--            如果找不到该商品的详情页-->
        <div v-else>
            没有找到该商品！
        </div>
        </scroll>
<!--        底部工具栏-->
        <toolbar></toolbar>
<!--        回到顶部按钮-->
        <to-top @click.native="toTop"
                v-show="isShowTotop"
        ></to-top>
    </div>
</template>

<script>
    import detailcarousels from "./detailChidrens/detailcarousels";
    import {getDetaildataByIid} from "@/network/detail";
    import itemInfo from "./detailChidrens/itemInfo";
    import shopInfo from "./detailChidrens/shopInfo";
    import goodsDetail from "./detailChidrens/goodsDetail/goodsDetail";

    import tabControl from "../../components/content/tabControl/tabControl";
    import dnavbar from "./detailChidrens/dnavbar";
    import Scroll from "../../components/content/Scroll/Scroll";
    import ToTop from "../../components/content/Scroll/toTop";
    import Toolbar from "./toolbar";

    export default {
        name: "detail",
      components:{
        Toolbar,
        ToTop,
        Scroll,
        dnavbar,
        shopInfo,
        itemInfo,
        detailcarousels,
        goodsDetail,
        tabControl


      },
      computed:{
        iid(){
          return this.$route.query.iid;
        },
        //拿到子组件Scroll
        scroll(){
          return this.$refs.detailScroll
        }
      },
        data(){
          return{
            swipper:[],
            itemInfo:{},
            conmment:{},
            shopInfo:{},
            itemParems:{},
            goodsDetail:{},

            //
            isShowTotop:false
          }
        },
      methods:{
        //监听tabControl的点击事件，获取点击的index
        changeposition(index){

          //tabControl改变滑动的位置
          switch (index) {
            case 0 :{
              this.toA();
              break
            }
            case 1 :{
              this.toItemParams()
              break
            }
            case 2:{
              this.toRecommend()
              break
            }
          }
        },

        /**监听并拿到滑动的位置*/
        getpositon(pos){

          //tabcontrol的吸顶效果
          //1.拿到页面根元素
          let rootDOM = this.$refs.detail;
          //2.执行tabControl里的autofixed方法，并传入参数
          this.$refs.detailtabConCtrol.autofixed(rootDOM,pos);

          //是否显示返回顶部按钮
          if (-pos.y > 750){
            this.isShowTotop = true
          }
          else {
            this.isShowTotop = false
          }

        },

        //滑动到<图文详情>。
        toA(){
          //1.拿到图文详情的位置。图文详情从goodsdetail的img开始。
          let Apositon = this.$refs.goodsDetail.$refs.imgs.offsetTop;
          //2.直接调用Scroll的to_pos方法。
          this.scroll.to_pos(0,-Apositon);
          //3.手动刷新一下bs计算的高度
          this.scroll.refresh()

        },

        //回到顶部
        toTop(){
          this.scroll.to_pos(0,0,500)
        },

        //滑动到<商品参数>。s
        toItemParams(){

          //1.拿到商品参数的位置。
          let itemParemsPositon = this.$refs.goodsDetail.$refs.itemParems.$el.offsetTop;
          //2.直接调用Scroll的to_pos方法。
          this.scroll.to_pos(0,-itemParemsPositon);
            //3.手动刷新一下bs计算的高度
          this.scroll.refresh()
        },

        //滑动到<热卖推荐>。
        toRecommend(){
          //1.拿到图文详情的位置。图文详情从goodsdetail的img开始。
          let recommendPositon = this.$refs.goodsDetail.$refs.recommend.$el.offsetTop;
          //2.直接调用Scroll的to_pos方法。
          this.scroll.to_pos(0,-(recommendPositon-100));
            //3.手动刷新一下bs计算的高度
          this.scroll.refresh()
        }
      },
      created() {

         //从network/detail.js导入的网络请求方法
        //获取详情页的数据
        getDetaildataByIid(this.iid).then(res =>{
          this.swipper = res.swipper.img.lists;
          this.itemInfo = res.itemInfo;
          this.conmment = res.conmment;
          this.shopInfo = res.shopInfo;
          this.itemParems = res.itemParams;
          this.goodsDetail = res.goodsDetail;

        } )
      },
      mounted() {

      },
      destroyed() {
        // console.log('销毁detail');
      }
    }
</script>

<style scoped>
    /*详情页盒子*/
    .detail{
        display: block;
        background-color: #f6f6f6;
        height: 100vh;
        width: 100%;
        z-index: 20;
        overflow-y: scroll;
        overflow-x: hidden;
        position: relative;
    }
    /*详情页tabcontroll*/
    .dtab{
        height: 44px;
        width: 100%;
        /*padding: 0 15px;*/

        /*margin-bottom: 2px;*/
        /*box-shadow: 0 1px 2px rgba(0,0,0,0.05);*/
    }

</style>