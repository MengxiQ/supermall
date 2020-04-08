<template>
    <div id="home">
<!--        //-->
        <div class="home_nav_bar">
             <nav_bar><div slot="center">购物街</div></nav_bar>
        </div>
<!--        //-->
        <Scroll :probe_type="3" @content_scroll="content_scroll" @pillingUp="loadmore" ref="Scroll">
                <div class="home_carousels">
                    <carousels :res_banner="res_banner"></carousels>
                </div>
        <!--        //-->
                <recommend :res_recommend="res_recommend"></recommend>
        <!--        //-->
                <ranking-list :re_keywords="re_keywords"></ranking-list>
        <!--        //-->
                <tab-control :tabControl_title="['流行','新款','精选']" @tabClick="changedata"></tab-control>
        <!--        // -->
                <goods-list :goods="goods[currentType].list"></goods-list>

        </Scroll>
        <to-Top v-show="isShowTotop" @click.native="toTopClick"></to-Top>
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
    import toTop from "../../components/content/Scroll/toTop";

    //网络请求
    import {getHomeMultidata,getHomeGoodsdata} from "../../network/home";

export default {
    name: "home",
    data(){
      return{
        // 数据控制
        res_banner:[],
        res_recommend:[],
        re_keywords:[],
        currentType:'pop',
        goods:{
          'pop':{page:1,list:[{
              show:{img:'http://192.168.1.11/goods/new/03.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/new/03.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/new/03.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/new/03.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/new/03.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/new/03.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            }]},
          'new':{page:1,list:[{
              show:{img:'http://192.168.1.11/goods/pop/02.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/pop/02.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/pop/02.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/pop/02.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/pop/02.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/sell/01.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            }]},
          'sell':{page:1,list:[{
              show:{img:'http://192.168.1.11/goods/sell/01.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/sell/01.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/sell/01.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/sell/01.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/sell/01.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/sell/01.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/sell/01.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            },{
              show:{img:'http://192.168.1.11/goods/sell/01.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66'
            }]}
        }
        // goods:{
        //   'pop':{page:0,list:[]},
        //   'new':{page:0,list:[]},
        //   'sell':{page:0,list:[]}
        // }
        ,
        // 界面控制
        wrapper:{},
        isShowTotop:false
      }
    },

    components:{
      toTop,
      Scroll,
      nav_bar,
      carousels,
      recommend,
      rankingList,
      tabControl,
      goodsList

    },
    methods:{
      /***
       * 方法
       * **/

      changedata(index){
        // console.log('111');
        switch (index) {
            case 0: {
              this.currentType = 'pop';
              break;
            }
            case 1: {
              this.currentType = 'new';
              break;
            }
            case 2:{
              this.currentType = 'sell';
              break;
            }
        }
      },
      content_scroll(pos){
        //是否显示返回顶部按钮
        if ((-pos.y) > 200){
          this.isShowTotop = true;
        }else {
          this.isShowTotop = false;
        }
        //是否加载更多
        // console.log(pos.x,pos.y);
      },
      toTopClick(){
        //回到顶部
        this.$refs.Scroll.to_pos(0,0,1000);
      },

      /***
       * 网络请求的方法
       * */
      getHomeMulti(){
        getHomeMultidata().then(res => {
          this.res_banner = res.data.banner.list;
          this.res_recommend = res.data.recommend.list;
          this.re_keywords = res.data.keywords.list;
        })
      },
      getHomeGoods(type){
        //根据类型获取下一页的数据
        getHomeGoodsdata(type,this.goods[type].page+1).then(res =>{
          console.log(res);
          //存放到data中
          //采用： 数组A.push(...数组B)简洁方法
          this.goods[type].list.push(...res.data.list);
          //page+1
          this.goods[type].page += 1;

          //加载完毕2，应该在这里告诉Scroll。
          // this.$refs.Scroll.finishPullUp();

        })
      },
      loadmore(){
        //按类型加载更多数据
        // this.getHomeGoods(this.currentType);
        //加载完毕2
        // this.$refs.Scroll.finishPullUp();

        /**
         * 模拟
         * **/
        setTimeout(()=>{
          console.log('加载完毕');
          this.$refs.Scroll.finishPullUp();
        },500)
      }
    },
    created() {
      //请求多个数据
      this.getHomeMulti();
      // this.getHomeGoods('pop');
      // this.getHomeGoods('new');
      // this.getHomeGoods('sell');
    },



}
</script>

<style scoped>

    #home{
        background-color:#f9f9f9;
        position: relative;
        height: 100vh;
    }
    .home_nav_bar{
        color: white;
        background-color: deeppink;
        position: absolute;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 44px;
    }



    .home_carousels{
        /*padding-top: 44px;*/
    }

</style>