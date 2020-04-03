<template>
<!--    <div class="carousels_contair">-->
<!--        <ul id="carousels" >-->
<!--            <li class="item" v-for="(item,index) in res_banner" v-bind:key="index"><img :src="item.image" alt=""></li>-->
<!--        </ul>-->
        <ul id="carousels">
            <li class="item" v-for="(item,index) in res_banner" v-bind:key="index"><a :href="item.link"><img :src="item.image" alt=""></a></li>

            <div  class="btn btn_left" ></div>
            <div  class="btn btn_right"></div>
            <div id="carousels_point">
                <li class="point point_active"></li>
                <li  class="point"></li>
                <li  class="point"></li>
                <li  class="point"></li>
            </div>
        </ul>
<!--    </div>-->
</template>

<script>

  export default {
    name: "carousels",
    props:{
      res_banner:{
        type:Array
      }
    },
    data(){
      return{

      }
    },
    methods:{

    },
    updated() {
        let carousels = new Carousels();
        carousels.init({
          intervalTime:5000
        });

    }

  }

  class Carousels {
    constructor() {
      this.carousels = document.getElementById('carousels');
      this.items = document.getElementsByClassName('item');
      this.btn_left = document.getElementsByClassName('btn_left')[0];
      this.btn_right = document.getElementsByClassName('btn_right')[0];
      this.points = document.getElementsByClassName('point');
      this.care_num = this.items.length;
      this.active_flag = 0; //记录当前获取的编号
      this.carousels_timer = null; //定时器
      this.intervalTime = 1000;
    }

    init(config) {

      //配置
      this.intervalTime = config.intervalTime;//毫秒
      this.showActiveItem();

      //初始化小点
      this.initPoints();
      //1.绑定事件
      if (this.btn_left !== undefined) {
        this.btn_right.onclick = () => {
          //先把定时器给关了
          clearInterval(this.carousels_timer);
          // console.log('定时器给关了');
          this.nextitem();
        }
        this.btn_left.onclick = () => {
          this.preitem();
        }
      } else {
        console.log('你没有添加按钮哦！');
      }
      this.carousels.onmouseenter = () => {
        //组件活得焦点，清除定时器
        clearInterval(this.carousels_timer);
      }
      this.carousels.onmouseleave = () => {
        //当组件失去焦点，重启计时器
        this.carousels_timer = this.run_timer();
      }
      // 2.开启定时器
      this.carousels_timer = this.run_timer();

      //控制台消息
      console.log('欢迎使用梦兮Q的UI组件，请多多支持！   ' +
        '有任何可以改进的地方，欢迎联系我哦，^_^ !    ' +
        'QQ邮箱：1486073356@qq.com');
    }

    /*
    定义方法
     */
    initPoints() {
      //检测是否添加了小点
      if (this.points.length !== 0) {
        //给每个小点绑定与卡片一样的index，并绑定一个点击事件
        for (let i = 0; i < this.care_num; i++) {

          // this.points[i].setAttribute('data-index',i);
          //这里根本就不需要给标签绑定自定义属性值
          //因为这里的值可以直接在下面点击事件中使用，不用传参。
          //下面事件的this就是这里的this！
          // console.log(this.points[i]);
          this.points[i].onclick = () => {
            //给每个点绑定点击事件的时候，每个点击事件都是独立
            //设置一个变量，用于保存每个点对应的index值。
            let index = i;//
            this.pointClick(index);
            // console.log(e);
          }
        }
      } else {
        console.log('没有添加小点O!');
      }
    }

    pointClick(i) {
      // 当点被点击时，活动设置为自己的index值
      this.clearLastActive();
      this.active_flag = i;
      this.showActiveItem();
    }

    clearLastActive() {
      this.items[this.active_flag].classList.remove('item_active');
      if (this.points.length !== 0) {
        this.points[this.active_flag].classList.remove('point_active');
      }
    }

    showActiveItem() {
      this.items[this.active_flag].classList.add('item_active');
      if (this.points.length !== 0) {
        this.points[this.active_flag].classList.add('point_active');
      }
    }

    nextitem() {
      //判断是否越界
      if (this.active_flag < this.care_num - 1) {
        //清除上一个
        this.clearLastActive();
        //将活动页设置成下一个
        this.active_flag = this.active_flag + 1;
        //显示活动页
        this.showActiveItem();
      } else {
        //越界，回到第一张：当前样式的去掉，设置活跃的为第一张，
        //清除上一个
        this.clearLastActive();
        this.active_flag = 0;
        this.showActiveItem();
      }
    }

    preitem() {
      //判断是否越界
      if (this.active_flag !== 0) {
        //清除上一个
        this.clearLastActive();
        //
        this.active_flag = this.active_flag - 1;
        this.showActiveItem();
      } else {
        //越界，回到最后一张：当前样式的去掉，设置活跃的为最后一张，
        // console.log('越界');
        this.clearLastActive();
        this.active_flag = this.items.length - 1;
        this.showActiveItem();
      }
    }

    run_timer() {
      //定时器，让他动起来。
      return (setInterval(() => {
        this.nextitem()
      }, this.intervalTime));
    }
  }
</script>

<style scoped>
    .carousels_contair{
        background-color:#f6f6f6;
    }
    #carousels{
        /*设置*/
        --care_hight:200px;/*设置卡片的高度*/
        --care_width:340px;/*设置卡片的宽度*/
        --care_width:100%;
        --transiton_opacity:opacity 1s;/*设置淡入淡出效果的值*/

        /*按钮的设置*/
        --btn_isShow:block;/*是否显示按钮*/
        --btn_opacity:0.1;/*设置按钮透明度*/
        --btn_radius:2px;/*置按钮圆角值*/
        --btn_hight:100px;/*设置按钮的高度*/
        --btn_width:20px;/*设置按钮的宽度*/
        /*按钮垂直区中的位置top = 父容器的高度/2 - 自己个高度/2*/
        /*top = (父高度 - 自己的高度)/2*/
        --btn_top:50px;

        /*points*/
        --points_width:10px;
        --points_innerColor:white;
        --points_outerColor:#e031a7;
    }
    ul,li{
        list-style: none;
        text-decoration: none;
    }
    #carousels{
        margin: auto;
        height: var(--care_hight);
        width: var(--care_width);
        position: relative;
        display: flex;
    }
    .item{
        height: var(--care_hight);
        width: var(--care_width);
        position: absolute;
        z-index: -1;
        /* 淡出淡入效果 */
        opacity: 0;
        transition: var(--transiton_opacity);
    }

    /*设置插入的图片自适应大小，平铺*/
    .item>a>img{
        /*按照宽度等比缩放：*/
        /*这样子会在下部分产生空白*/
        /*height: auto;*/
        /*width: auto;*/
        /*max-height: 100%;*/
        /*max-width: 100%;*/

        /*平铺：*/
        height: var(--care_hight);
        width: var(--care_width);
    }
    .item>a>img:hover{
        /*聚焦状态*/
        cursor: pointer;
        /*下面配置图片无效：*/
        /*box-shadow: 0 0 20px rgba(0,0,0,1) inset;*/
    }
    .item_active{
        z-index: 0;
        opacity: 1;
    }
    /*
    按钮样式
    */
    .btn{
        display: var(--btn_isShow);
        border-radius: var(--btn_radius);
        height: var(--btn_hight);
        width: var(--btn_width);
        z-index:2 ;
        position: absolute;

        top: var(--btn_top);
        line-height: var(--btn_hight);
        font-size: 12px;

        background-color: rgba(0,0,0,var(--btn_opacity));
        border-style: none;
        color: rgba(255,255,255,0.8);
    }
    .btn:hover{
        cursor: pointer;
    }
    .btn_right{
        right: 0;
    }
    .btn>img{

        /*svg类型的图标会铺满*/
        height: var(--btn_hight);
        width: var(--btn_width);
        opacity: 0.8;
    }
    .btn_left>img{
        transform: rotate(180deg);
    }
    /*
    points的样式
    */
    #carousels_point{
        /*background: rebeccapurple;*/
        width: 40%;
        height: auto;
        position: absolute;
        z-index: 10;
        display: flex;
        right: 0;
        bottom: 10px;
    }
    .point{
        opacity: 0.3;
        background: var(--points_innerColor);
        height: var(--points_width);
        width: var(--points_width);
        border-radius: 50%;
        margin: 5px;
        border: 3px solid var(--points_outerColor);

    }
    .point:hover{
        cursor: pointer;
        opacity: 1;
    }
    .point_active{
        opacity: 1;
    }
</style>