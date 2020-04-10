<template>
    <div class="tabControl_box " ref="tabControl_box">
        <div ref="tabControl" :class="{tabControl:true,isFixed:isFixed}">
    <!--        使用的时候需要给组件传参，参数是标题内容-->
            <div class="tabControl_item option" v-for="(item,index) in tabControl_title"
                 @click="itemClick(index)" :key="index">{{item}}
            </div>
            <div class="tabbar_line"></div>
        </div>
    </div>

</template>

<script>
    import {EventBus} from "../../../bus/event-bus";

    export default {
    name: "tabControl",
    props:{
      tabControl_title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0,
        isFixed:false,
        //页面元素
        dom_tc:{},
        home:{},
        tabControl_box:{}
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        //自定义事件,将index传给home，让home知道当前分类
        this.$emit('tabClick',index);
        // console.log(this.$refs.tabControl);



      }

    },
      mounted() {
        //实例化
        let tabbar = new Tabbar('.tabControl',{
          tabbr_line:true,//是否显示点击状态下的滑块
          hover_line:false//是否显示hover状态下的下的滑块
        });
        tabbar.init();
        //检测窗口的大小变动,动态初始化
        window.addEventListener('resize', () => {
          // console.log('reszie');
          tabbar.refresh();
        })

        //获取页面元素
        this.dom_tc = this.$refs.tabControl;
        this.home = this.$parent.$parent.$el;
        this.tabControl_box = this.$refs.tabControl_box;

        //监听事件总线
        EventBus.$on('home_scroll',(pos) => {
          // console.log('检测');
          // console.log(this.tabControl_box.offsetTop,'----',(-pos.y));
          /**
           * 在BScroll中是改变transfor，dom元素的相对位置是固定的。
           * 只要将内部元素的位置与滑动(-pos.y)比较，就可以知道是否到达了顶部
           * 注意要大于等于，不能等于，因为惯性下(-pos.y)是小数，比较不出来。
           * **/
          if ((-pos.y) >= this.tabControl_box.offsetTop){
            //把tabControl拿出来,放到home中，改变样式
            // console.log('inner！！！');
            this.isFixed = true;
            this.home.appendChild(this.dom_tc);
          }else{
            //把tabControl放回去tabControl_box中，改变样式
            // console.log('outter！！！');
            this.isFixed = false;
            this.tabControl_box.appendChild(this.dom_tc);
          }
        })

        // console.log(this.dom_tc,this.home,this.tabControl_box)
        //;
      }
    }

  class Tabbar{
      //slecectd:css选择器，拿到tabbar根元素
      // config:配置信息
      constructor(selected,config) {
        this.dom_tabbar = document.querySelector(selected);
        this.dom_tabbar_options = document.querySelectorAll('.option');
        this.dom_tabbar_line = [];
        //设置tabbr_line的宽度为每个li的宽度
        this.line_width = this.dom_tabbar_options[0].offsetWidth;
        this.dom_hover_lines = [];
        //
        this.current_active = 0;
        this.current_line_postion = 0;
        //
        this.config = config;
      }
      refresh(){
        //重新设置LineWidth
        this.setLineWidth();
        //重新设置位置
        this.current_line_postion = this.current_active * this.line_width;
        this.clearAcitve();
        this.setCurrentAcitve();

      }
      init(){

        if (this.dom_tabbar != null){
          //是否启用tabb_line
          if (this.config.tabbr_line === true)
          {
            //添加tabbr_line dom元素
            // console.log(this.dom_tabbar);
            // let tabbr_line_txt = '<div class="tabbar_line"></div>';
            // this.dom_tabbar.appendChild(this.parseDom(tabbr_line_txt));
            this.dom_tabbar_line = document.querySelector('.tabbar_line');
            //
            this.setLineWidth();

          }
          //是否启用hover_line
          if (this.config.hover_line === true){
            this.hoverOption();
          }

          this.setCurrentAcitve();
          this.setClick();
        }else {
          console.log('你选择的dom不存在！');
        }



      }
      //设置点击事件
      setClick(){
        for (let i = 0;i < this.dom_tabbar_options.length;i++){
          let index = i;
          this.dom_tabbar_options[i].onclick =() => {
            this.clearAcitve();
            this.current_active = index;
            this.setCurrentAcitve();
          }
        }
      }
      //清除当前的活动样式
      clearAcitve(){
        this.dom_tabbar_options[this.current_active].classList.remove('option_active');
      }
      //设置当前的活动样式
      setCurrentAcitve(){
        this.dom_tabbar_options[this.current_active].classList.add('option_active');
        //移动tabbar_line
        if (this.config.tabbr_line === true) {
          this.movLine();
          this.dom_tabbar_line.style.left = this.current_line_postion;
        }

      }
      //移动tabbar_line
      movLine(){
        let line_postion  = this.current_active * this.line_width;
        this.current_line_postion = line_postion;
        this.dom_tabbar_line.style.left = this.current_line_postion + 'px';
      }
      //设置hover效果
      hoverOption(){
        let dom_txt = '<div class="hover_line"></div>';

        this.dom_tabbar_options.forEach((item,index) =>{
          //先把生成的一个dom添加到  this.dom_hover_lines中
          this.dom_hover_lines.push(this.parseDom(dom_txt)) ;
          //给每一个option里都添加一个hover_line dom（从this.dom_hover_lines拿出）
          item.appendChild(this.dom_hover_lines[index]);
          item.onmouseover = () =>{
            this.dom_hover_lines[index].style.width = this.getOptionWidth() + 'px';
          }
          item.onmouseleave = () =>{
            this.dom_hover_lines[index].style.width = 0 + 'px';
          }
        })
      }
      getOptionWidth(){
        return this.dom_tabbar_options[0].offsetWidth;
        // this.dom_tabbar_options[0].style.width = '10px';
        // console.log(this.dom_tabbar_options[0].offsetWidth);
      }
      setLineWidth(){
        this.line_width = this.getOptionWidth();
        this.dom_tabbar_line.style.width = this.line_width +'px';
      }
      parseDom(str){
        let parent_dom = document.createElement("div");
        parent_dom.innerHTML = str;
        return parent_dom.childNodes[0];
      }
    }
</script>

<style scoped>
    .tabControl-box{
    height: 44px;
    width: 100%;
    }
    *,ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .tabControl_box{
        background-color: #fff4fb;
        height: 44px;
        width: 100%;
    }
    .tabControl{
        display: flex;
        justify-content:space-between;
        /*justify-content: center;*/
        position: relative;
        height: 44px;
        width: 100%;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        background-color: #f6f6f6;
        overflow: hidden;

    }
    .option{
        flex: 1;
        display: flex;
        justify-content: center;
        height: 44px;
        line-height: 44px;
    }
    .option_active{
        background-color: #ececec;
    }
    .tabControl>.option:hover{
        cursor: pointer;

    }
    .tabbar_line{
        height: 5px;
        position: absolute;
        background-color: #ff1493;
        border-radius: 1px;
        bottom: 0;
        transition: left 0.3s;

    }
    .hover_line{
        position: absolute;
        height: 5px;
        width: 0;
        bottom: 0;
        background-color: #ff932e;
        transition: width 0.2s;

    }
    .isFixed{
        position: absolute;
        top: 44px;
    }
</style>