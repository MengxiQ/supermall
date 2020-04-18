<template>

    <div id="home" ref="home">
<!--        //-->
        <div class="home_nav_bar">
             <nav_bar :key="'homenavbar'"><div slot="center">购物街</div></nav_bar>
        </div>
<!--        //-->
        <Scroll :probe_type="3" :pullUp_load="true" @content_scroll="content_scroll" @pillingUp="loadmore" ref="Scroll"
                :key="'home Scroll'">
                <div class="home_carousels">
                    <carousels :res_banner="res_banner"></carousels>
                </div>
        <!--        //-->
                <recommend :res_recommend="res_recommend"></recommend>
        <!--        //-->
                <ranking-list :re_keywords="re_keywords"></ranking-list>
        <!--        //-->
                <div class="hometbc">
                <tab-control  :tabControl_title="['流行','新款','精选']"
                              @tabClick="changedata"
                              ref="homeTabControl"
                >

                </tab-control>
                </div>
        <!--        // -->
                <goods-list :goods="goods[currentType].list" :goods_type="currentType"></goods-list>

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

    //事件总线
    import {EventBus} from "../../bus/event-bus";

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
              show:{img:'http://localhost/untitled3/static/images/goodsdetail/A-001/swiper/A-001-1.webp',},
              title:'2020春秋新款韩系连衣裙女法式碎花裙长裙收腰赫本很仙过膝裙',
              price:'39.99',
              cfav:'66',
              iid:'A-001'
            },{
              show:{img:'http://192.168.1.11/goods/new/03.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66',
              id:'A0002'
            }
            ,{
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
            }
              ]},
          'new':{page:1,list:[{
              show:{img:'http://192.168.1.11/goods/pop/02.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66',
              id:'B0001'
            },{
              show:{img:'http://192.168.1.11/goods/pop/02.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66',
              id:'B0002'
            }
            ,{
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
            }
            ]},
          'sell':{page:1,list:[{
              show:{img:'http://192.168.1.11/goods/sell/01.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66',
              id:'C001'
            },{
              show:{img:'http://192.168.1.11/goods/sell/01.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66',
              id:'C002'
            }
            ,{
              show:{img:'http://192.168.1.11/goods/sell/01.jpg',},
              title:'时尚最骚最漂亮最美丽的汉服+女神标配+附赠男友一枚先到先得',
              price:'99.9',
              cfav:'66',
              id:'C-003'
            }
            ,{
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
            }
            ]}
        }
        // goods:{
        //   'pop':{page:0,list:[]},
        //   'new':{page:0,list:[]},
        //   'sell':{page:0,list:[]}
        // }
        ,
        selectedGoodslist:['A0002','B0001'],
        // 界面控制
        scroll_pos:{x:0,y:0},
        wrapper:{},
        isShowTotop:false,

      }
    },
    /**
     * 组件
     * **/
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


    methods: {
      /***
       * 方法
       * **/

      //监听tabControl的点击事件
      changedata(index) {
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
          case 2: {
            this.currentType = 'sell';
            break;
          }
        }
      },
      //监听Scroll的滚动事件
      content_scroll(pos) {

        /**是否显示返回顶部按钮
         * */
        this.isShowTotop = (-pos.y) > 200;
        this.scroll_pos = pos;

        /**tabcontrol吸顶效果
         * */
        let rootDOM = this.$refs.home;
        this.$refs.homeTabControl.autofixed(rootDOM,pos);


      },
      toTopClick() {
        //回到顶部
        this.$refs.Scroll.to_pos(0, 0, 1000);
      },
      toOriginal() {
        console.log(this.scroll_pos);
      },


      /***
       * 网络请求的方法
       * */
      getHomeMulti() {
        getHomeMultidata().then(res => {
          this.res_banner = res.data.banner.list;
          this.res_recommend = res.data.recommend.list;
          this.re_keywords = res.data.keywords.list;
        })
      },
      getHomeGoods(type) {
        //根据类型获取下一页的数据
        getHomeGoodsdata(type, this.goods[type].page + 1).then(res => {
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
      loadmore() {
        //按类型加载更多数据
        // this.getHomeGoods(this.currentType);
        // //加载完毕2

        function load() {
            console.log('加载完毕数据:'+this.currentType);
            this.$refs.Scroll.finishPullUp();
        }

        let newload = this.debounce(load,500);

        newload();


        // setTimeout(() => {
        //   console.log('加载完毕数据:' + this.currentType);
        //   this.$refs.Scroll.finishPullUp();
        // }, 500);

      },
      debounce(fun,delay){
        // console.log(this)
      let timer = null
      return (...args) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(()=>{
          // console.log(this)
          fun.apply(this,args)

        },delay)
      }
    }
    },

      /**
       * 生命周期函数
      **/
    created() {
      //请求多个数据
      // this.getHomeMulti();
      // this.getHomeGoods('pop');
      // this.getHomeGoods('new');
      // this.getHomeGoods('sell');
    },
    mounted() {
      //监听更改收藏事件
      EventBus.$on('selectedGoods',(goods) =>{
        if (goods.op === '+'){
          this.selectedGoodslist.push(goods.id);
        }else {
          this.selectedGoodslist = this.selectedGoodslist.filter(item =>{
            return item !== goods.id;
          })
        }
      });

    },
      updated() {
        // console.log('发送更新事件');

        //把收藏内容发送给
        EventBus.$emit('CheckRes',this.selectedGoodslist);

      },
      destroyed() {
      // console.log('销毁');
      },
    activated() {
      // console.log('回来了');
      //直接调用Scrol中的to_pos方法，从this.scroll_pos拿到记录的数据。
      this.$refs.Scroll.to_pos(this.scroll_pos.x,this.scroll_pos.y);
    },
    deactivated() {
      // console.log('离开');
      //离开时记录当前的位置
      //但是这里不用记录，因为this.scroll_pos中已经从Scoll事件中记录了。
    }


}
</script>

<style scoped>

    #home{
        background-color:#f9f9f9;
        position: relative;
        height: 100vh;
        overflow: hidden;
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
    .hometbc{
        background-color: #f6f6f6;
        box-shadow: 0px 0px 2px rgba(0,0,0,0.05);
        /*width: 100%;*/
    }

</style>