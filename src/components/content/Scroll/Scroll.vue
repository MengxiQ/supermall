<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
        <slot></slot>
        </div>
    </div>
</template>

<script>
  //插件
  import BScroll from 'better-scroll'
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
        this.wrapper.refresh();
      }
    },
    mounted() {
      // console.log(this.probe_type);
      // console.log(wrapper);
      this.wrapper = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probe_type,
        pullUpLoad:50
      });
      //监听滑动事件
      this.wrapper.on('scroll',(pos) => {
        // console.log(pos.x,pos.y);
        this.$emit('content_scroll',pos);
      })
      //监听上拉加载更多
      this.wrapper.on('pullingUp',() =>{
        console.log('加载更多！');
        // setTimeout(()=>{
        //  this. finishPullUp();
        // },500)
        //把事件传出去，让home加载更多，
        //然后加载完毕后调用 finishPullUp方法。
        this.$emit('pillingUp');
      })

    }
  }
</script>

<style scoped>
    .wrapper{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 44px;

    }

    .content{
        overflow: hidden;
    }
</style>