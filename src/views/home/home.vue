<template>
  <div id="home" ref="home">
    <div class="home_nav_bar">
      <nav_bar :key="'homenavbar'"><div slot="center">购物街</div></nav_bar>
    </div>

    <Scroll
      :probe_type="3"
      :pullUp_load="true"
      @content_scroll="content_scroll"
      @pillingUp="loadmore"
      ref="Scroll"
      :key="'homeScroll'"
    >
      <div class="home_carousels">
        <carousels :res_banner="res_banner"></carousels>
      </div>

      <recommend :res_recommend="res_recommend"></recommend>

      <ranking-list :re_keywords="re_keywords"></ranking-list>

      <div class="hometbc">
        <tab-control
          :tabControl_title="['流行', '新款', '精选']"
          @tabClick="changedata"
          ref="homeTabControl"
        >
        </tab-control>
      </div>

      <goods-list
        :goods="goods[currentType].list"
        :goods_type="currentType"
      ></goods-list>
    </Scroll>
    <!--        回到顶部按钮-->
    <!--        混入-->
    <to-top @click.native="toTop" v-show="isShowTotop"></to-top>
  </div>
</template>
<script>
//公共组件
import nav_bar from "../../components/common/nav-bar/nav_bar";
import carousels from "../../components/common/carousels/carousels";

//组件
import recommend from "./homeChildrens/recommend";
import rankingList from "./homeChildrens/rankingList";
import tabControl from "../../components/content/tabControl/tabControl";
import goodsList from "../../components/content/goodsList/goodsList";
import Scroll from "../../components/content/Scroll/Scroll";
// import toTop from "../../components/content/Scroll/toTop";

//网络请求
import { getHomeMultidata, getHomeGoodsdata } from "../../network/home";

//事件总线
import { EventBus } from "../../bus/event-bus";


//混入对象
import { toTop } from "@/common/mixin";

export default {
  name: "home",
  data() {
    return {
      // 数据控制
      res_banner: [],
      res_recommend: [],
      re_keywords: [],
      currentType: "pop",
      //
      // goods: null,
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      selectedGoodslist: ["A0002", "B0001"],
      // 界面控制
      scroll_pos: { x: 0, y: 0 },
      wrapper: {},
    };
  },
  /**
   * 组件
   * **/
  components: {
    Scroll,
    nav_bar,
    carousels,
    recommend,
    rankingList,
    tabControl,
    goodsList,
  },
  mixins: [toTop],
  methods: {
    changedata(index) {
      switch (index) {
        case 0: {
          this.currentType = "pop";
          break;
        }
        case 1: {
          this.currentType = "new";
          break;
        }
        case 2: {
          this.currentType = "sell";
          break;
        }
      }
    },
    //监听Scroll的滚动事件
    content_scroll(pos) {
      this.scroll_pos = pos;
      //混入
      //是否显示返回顶部按钮
      this.isShowtoTop(pos);

      /**tabcontrol吸顶效果
       * */
      let rootDOM = this.$refs.home;
      this.$refs.homeTabControl.autofixed(rootDOM, pos);
    },
    // toTopClick() {
    //   //回到顶部
    //   this.$refs.Scroll.to_pos(0, 0, 1000);
    // },
    /***
     * 网络请求的方法
     * */
    getHomeMulti() {
      getHomeMultidata().then((res) => {
        this.res_banner = res.banner.list;
        this.res_recommend = res.recommend.list;
        this.re_keywords = res.keywords.list;
      });
    },
    getHomeGoods(type) {
      //根据类型获取下一页的数据
      getHomeGoodsdata(type, this.goods[type].page + 1).then((res) => {
        //存放到data中
        //采用： 数组A.push(...数组B)简洁方法
        this.goods[type].list.push(...res.list);
        //page+1
        this.goods[type].page += 1;
        console.log("下拉加载完成，类型：",type);
        //加载完毕2，应该在这里告诉Scroll。
        this.$refs.Scroll.finishPullUp();
      });
    },
    loadmore() {
      //按类型加载更多数据
      function load() {
        this.getHomeGoods(this.currentType)
      }
      let newload = this.debounce(load, 100);
      newload();
    },
    debounce(fun, delay) {
      // console.log(this)
      let timer = null;
      return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          // console.log(this)
          fun.apply(this, args);
        }, delay);
      };
    },
  },

  /**
   * 生命周期函数
   **/
  created() {
    //请求多个数据
    this.getHomeMulti();

    //初始请求数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    EventBus.$on("selectedGoods", (goods) => {
      //监听更改收藏事件
      if (goods.op === "+") {
        this.selectedGoodslist.push(goods.id);
      } else {
        this.selectedGoodslist = this.selectedGoodslist.filter((item) => {
          return item !== goods.id;
        });
      }
    });
  },
  updated() {
    // console.log('发送更新事件');
    //把收藏内容发送给
    EventBus.$emit("CheckRes", this.selectedGoodslist);
  },
  destroyed() {
    // console.log('销毁');
  },
  activated() {
    // console.log('回来了');
    //直接调用Scrol中的to_pos方法，从this.scroll_pos拿到记录的数据。
    this.$refs.Scroll.to_pos(this.scroll_pos.x, this.scroll_pos.y);
  },
  deactivated() {
    // console.log('离开');
    //离开时记录当前的位置
    //但是这里不用记录，因为this.scroll_pos中已经从Scoll事件中记录了。
  },
};
</script>

<style scoped>
#home {
  background-color: #f9f9f9;
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.home_nav_bar {
  color: white;
  /* background-color: #ff5777; */
  background: deeppink;
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 44px;
}

.hometbc {
  background-color: #f6f6f6;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
  /*width: 100%;*/
}
</style>