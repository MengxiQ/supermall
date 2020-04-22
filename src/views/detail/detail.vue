<template>
    <div class="detail" ref="detail">
<!--        头部导航-->
        <dnavbar ></dnavbar>
<!--        滑动组件：监听滑动和滑动事件、x轴原生滑动-->
        <scroll ref="Scroll"
                :probe_type="3"
                :eventPassthrough="'horizontal'"
                @content_scroll="getpositon"
                @scrollEnd="scrollEnd"
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
                         :dcurrentIndex="currentIndex"
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
        <toolbar :cartProduct="cartProduct"></toolbar>
<!--        回到顶部按钮-->
<!--        混入-->
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
    // import ToTop from "../../components/content/Scroll/toTop";
    import Toolbar from "./toolbar";

    //混入对象
    import {toTop} from "@/common/mixin";

    export default {
        name: "detail",
      components:{
        Toolbar,
        Scroll,
        dnavbar,
        shopInfo,
        itemInfo,
        detailcarousels,
        goodsDetail,
        tabControl
      },
      mixins:[toTop],
      computed:{
        iid(){
          return this.$route.query.iid;
        },
        //封装一个发送到购物车的数据对象
        cartProduct(){
          const product = {};
          //需要判断数据对象是否为空
          if (this.swipper.length) {
            product.iid = this.iid;
            product.shopName = this.shopInfo.name;
            product.name = this.itemInfo.desc;
            product.price = this.itemInfo.price;
            product.img = this.swipper[0].url;
          }
          return product;
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

            modulePostion:[],
            currentIndex:0,
            lock:0
          }
        },
      methods:{
          //获取到需要滚动到的模块的位置
        getmodulePostion(){
          //1.拿到图文详情的位置。图文详情从goodsdetail的img开始。
          let Apositon = this.$refs.goodsDetail.$refs.imgs.offsetTop;
          this.modulePostion.splice(0,1,Apositon);
          //1.拿到商品参数的位置。
          let itemParemsPositon = this.$refs.goodsDetail.$refs.itemParems.$el.offsetTop-40;
          this.modulePostion.splice(1,1,itemParemsPositon);
          //1.拿到图文详情的位置。图文详情从goodsdetail的img开始。
          let recommendPositon = this.$refs.goodsDetail.$refs.recommend.$el.offsetTop-100;
          this.modulePostion.splice(2,1,recommendPositon)

        },

        //监听tabControl的点击事件，获取点击的index
        changeposition(index){

          //点击后，防止滚动过程中，修改currentIndex的值
          // console.log("上锁！");
          this.lock =1;

          this.currentIndex =index;
          //根据modulePostion中的值滑动到对应位置
          this.scroll.to_pos(0,-this.modulePostion[index]);
        },

        //监听滚动完成事件
        // eslint-disable-next-line no-unused-vars
        scrollEnd(pos){
          //滚动完成，解锁
          // console.log("解锁！");
          this.lock =0;
        },

        /**监听并拿到滑动的位置*/
        getpositon(pos){

          //tabcontrol的吸顶效果
          //1.拿到页面根元素
          let rootDOM = this.$refs.detail;
          //2.执行tabControl里的autofixed方法，并传入参数
          this.$refs.detailtabConCtrol.autofixed(rootDOM,pos);

          //是否显示返回顶部按钮
         this.isShowtoTop(pos);

         //滚动和tabbarControl的联动，判断是否上锁
          if(this.lock === 0) {
            if ((-pos.y) < this.modulePostion[0]) {
              // this.currentIndex = null;
              this.$refs.detailtabConCtrol.$data.currentIndex = null;
            }
            //图文详情区
            if ((-pos.y) > this.modulePostion[0] && -pos.y < this.modulePostion[1]) {
              // this.currentIndex = 0;
              // console.log(11);
              this.$refs.detailtabConCtrol.$data.currentIndex = 0;
            }
            //商品参数区
            if ((-pos.y) > this.modulePostion[1] && -pos.y < this.modulePostion[2]) {
              // this.currentIndex = 1;
              this.$refs.detailtabConCtrol.$data.currentIndex = 1;
            }
            //后面推荐部分
            if ((-pos.y) > this.modulePostion[2]) {
              // this.currentIndex = 2;
              this.$refs.detailtabConCtrol.$data.currentIndex = 2;
            }
          }
        },
      },
      created() {

         //从network/detail.js导入的网络请求方法
        //获取详情页的数据
        getDetaildataByIid(this.iid).then(res =>{
          if(res !== null ) {
            this.swipper = res.swipper.img.lists;
            this.itemInfo = res.itemInfo;
            this.conmment = res.conmment;
            this.shopInfo = res.shopInfo;
            this.itemParems = res.itemParams;
            this.goodsDetail = res.goodsDetail;
          }
          else {
            console.log("#网络请求出错：detail.vue ; 可能没有找到该商品");
          }
        } )
      },
      mounted() {

      },
      destroyed() {
        // console.log('销毁detail');
      },
      watch:{
        itemParems(){
          //监听后台是否返回itemParems的数据
          this.$nextTick(()=>{
            //dom渲染新数据后
            this.getmodulePostion();
            //3.手动刷新一下bs计算的高度
            this.scroll.refresh();
          })

        }
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
        /*z-index: 20;*/
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