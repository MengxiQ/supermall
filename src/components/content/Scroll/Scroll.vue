<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
        <slot></slot>
        </div>
    </div>
</template>

<script>
  //插件
  import BScroll from 'better-scroll';
  // import {EventBus} from "../../../bus/event-bus";

  export default {
    name: "Scroll",
    data(){
      return {
        wrapper:null
      }
    },
    props:{
      probe_type:{
        type:Number,
        defaults:0
      },
      pullUp_load:{
        type: Boolean,
        defaults: false
      },
      eventPassthrough:{
        type:String,
        defaults:''
      }
    },
    methods:{
      to_pos(x,y,time = 1000){
        this.wrapper.scrollTo(x,y,time);
      },
      finishPullUp(){
        //加载完毕
        this.wrapper.finishPullUp();
        //刷新Scroll计算的高度
        this.refresh();
      },
      refresh(){//手动刷新一下BS计算的高度
        this.wrapper.refresh();
      }
    },
    mounted() {
     //1.创建BScroll对象
     //  console.log("创建bs");
      this.wrapper = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probe_type,
        pullUpLoad:this.pullUp_load,
        // eventPassthrough:"horizontal"
        eventPassthrough:this.eventPassthrough
        // momentum:false
      });
      //2.监听滑动事件
      // if(this.)
      this.wrapper.on('scroll',(pos) => {
        // console.log(pos.x,pos.y);
        this.$emit('content_scroll',pos);

        //发到事件总线上
        // EventBus.$emit('home_scroll',pos)
      })
      //3.监听上拉到底部
      this.wrapper.on('pullingUp',() =>{
        console.log('监听上拉到底部！');
        // setTimeout(()=>{
        //  this. finishPullUp();
        // },500)
        //把事件传出去，让home加载更多，
        //然后加载完毕后调用 finishPullUp方法。
        this.$emit('pillingUp');
      })

      //数据挂载之后，手动刷新一下BS计算的高度，防止滑动的bug
      this.refresh()
    }
  }
</script>

<style scoped>
    .wrapper{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 44px;
        width: 100%;

    }

    .content{
        overflow: hidden;
    }
</style>