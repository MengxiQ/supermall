<template>
    <div class="tabControl_box " ref="tabControl_box">
        <div ref="tabControl" :class="{tabControl:true,isFixed:isFixed}">
    <!--        使用的时候需要给组件传参，参数是标题内容-->
            <div class="tabControl_item option"
                 v-for="(item,index) in tabControl_title"
                 @click="itemClick(index)"
                 :key="index"
                 :class="{option_active:index === currentIndex}"
            >
                {{item}}
            </div>

            <div class="tabbar_line" ref="tabbar_line" id="tabbar_line"></div>
        </div>
    </div>

</template>

<script>
    // import {EventBus} from "../../../bus/event-bus";

    export default {
      name: "tabControl",
      props: {
        tabControl_title: {
          type: Array,
          default() {
            return []
          }}
      },
      data() {
        return {
          currentIndex: 0,
          isFixed: false,
          //页面元素
          tabControl:{},
          tabControl_box:{}
        }
      },
      methods: {
        itemClick(index) {
          this.currentIndex = index;
          //自定义事件,将点击事件和index传给父组件
          this.$emit('tabClick', index);

          //调用移动下滑线方法
          this.moveLine(index);
        },
        //下划线移动效果
        // eslint-disable-next-line no-unused-vars
        moveLine(index){
          // //1.获取到子选项的个数
          // let ChildCount = this.$refs.tabControl.children.length-1;//-1：减去下滑线自己
          // console.log(ChildCount);

          // 1.直接将下划线移动到对应的子选项的位置。
          // console.log(this.$refs.tabbar_line.offsetLeft);

          // 1.拿到被点击元素的位置
          let pos_x = this.$refs.tabControl.children[index].offsetLeft;
          this.$refs.tabbar_line.style.left= pos_x+"px";
        },

        //吸顶效果
        //需要在父组件的监听滑动事件的地方调用。
        //传入父组件的根dom，吸顶时让tabControl弹到里面
        //传滑动事件的参数入pos，用于判断是否需要吸顶
        autofixed(pageRootDOM, pos) {
          //获取页面元素
          this.tabControl = this.$refs.tabControl;//dom:tabControll
          this.tabControl_box = this.$refs.tabControl_box;//dom:tabControl_box

          if ((-pos.y) >= this.tabControl_box.offsetTop) {
            //把tabControl拿出来,放到home中，改变样式
            // console.log('tabControl弹到根dom中');
            this.isFixed = true;
            pageRootDOM.appendChild(this.tabControl);
          } else {
            //把tabControl放回去tabControl_box中，改变样式
            // console.log('tabControl放回box.');
            this.isFixed = false;
            this.tabControl_box.appendChild(this.tabControl);
          }
        },
        mounted() {

          {
            // //实例化
            // let tabbar = new Tabbar('.tabControl', {
            //   tabbr_line: true,//是否显示点击状态下的滑块
            // });
            // tabbar.init();
            // //检测窗口的大小变动,动态初始化
            // window.addEventListener('resize', () => {
            //   // console.log('reszie');
            //   tabbar.refresh();
            // })
          }
        }
      }
    };

    {
    //
    //
    //   class Tabbar{
    //   //slecectd:css选择器，拿到tabbar根元素
    //   // config:配置信息
    //   constructor(selected,config) {
    //     this.dom_tabbar = document.querySelector(selected);
    //     this.dom_tabbar_options = document.querySelectorAll('.option');
    //     this.dom_tabbar_line = [];
    //     //设置tabbr_line的宽度为每个li的宽度
    //     this.line_width = this.dom_tabbar_options[0].offsetWidth;
    //     this.dom_hover_lines = [];
    //     //
    //     this.current_active = 0;
    //     this.current_line_postion = 0;
    //     //
    //     this.config = config;
    //   }
    //   refresh(){
    //     //重新设置LineWidth
    //     this.setLineWidth();
    //     //重新设置位置
    //     this.current_line_postion = this.current_active * this.line_width;
    //     this.clearAcitve();
    //     this.setCurrentAcitve();
    //
    //   }
    //   init(){
    //
    //     if (this.dom_tabbar != null){
    //       //是否启用tabb_line
    //       if (this.config.tabbr_line === true)
    //       {
    //         this.dom_tabbar_line = document.querySelector('.tabbar_line');
    //         //
    //         this.setLineWidth();
    //
    //       }
    //
    //       this.setCurrentAcitve();
    //       this.setClick();
    //     }else {
    //       console.log('你选择的dom不存在！');
    //     }
    //
    //
    //
    //   }
    //   //设置点击事件
    //   setClick(){
    //     for (let i = 0;i < this.dom_tabbar_options.length;i++){
    //       let index = i;
    //       this.dom_tabbar_options[i].onclick =() => {
    //         this.clearAcitve();
    //         this.current_active = index;
    //         this.setCurrentAcitve();
    //       }
    //     }
    //   }
    //   //清除当前的活动样式
    //   clearAcitve(){
    //     this.dom_tabbar_options[this.current_active].classList.remove('option_active');
    //   }
    //   //设置当前的活动样式
    //   setCurrentAcitve(){
    //     this.dom_tabbar_options[this.current_active].classList.add('option_active');
    //     //移动tabbar_line
    //     if (this.config.tabbr_line === true) {
    //       this.movLine();
    //       this.dom_tabbar_line.style.left = this.current_line_postion;
    //     }
    //
    //   }
    //   //移动tabbar_line
    //   movLine(){
    //     let line_postion  = this.current_active * this.line_width;
    //     this.current_line_postion = line_postion;
    //     this.dom_tabbar_line.style.left = this.current_line_postion + 'px';
    //   }
    //
    //   getOptionWidth(){
    //     return this.dom_tabbar_options[0].offsetWidth;
    //     // this.dom_tabbar_options[0].style.width = '10px';
    //     // console.log(this.dom_tabbar_options[0].offsetWidth);
    //   }
    //   setLineWidth(){
    //     this.line_width = this.getOptionWidth();
    //     console.log(this.line_width);
    //     this.dom_tabbar_line.style.width = this.line_width +'px';
    //   }
    //   parseDom(str){
    //     let parent_dom = document.createElement("div");
    //     parent_dom.innerHTML = str;
    //     return parent_dom.childNodes[0];
    //   }
    }
</script>

<style scoped>
    *,ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .tabControl_box{
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
        /*box-shadow: 0 1px 2px rgba(0,0,0,0.05);*/
        background-color: rgba(254, 254, 254, 0.96);
        overflow: hidden;
        box-shadow: 0px 0px 2px rgba(0,0,0,0.05);

    }
    .option{
        flex: 1;
        display: flex;
        justify-content: center;
        height: 44px;
        line-height: 44px;
    }
    .option_active{
        /*background-color: #f977c8;*/
    }

    .tabbar_line{
        width: 33%;
        height: 2px;
        position: absolute;
        background-color: #ff1493;
        border-radius: 1px;
        bottom: 1px;
        transition: left 0.2s;

    }

    .isFixed{
        position: absolute;
        top: 44px;
    }
</style>