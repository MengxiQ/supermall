<template>
    <div class="tabControl-box" ref="tabControl-box">
        <div id="tabControl">
    <!--        使用的时候需要给组件传参，参数是标题内容-->
            <div class="tabControl_item" v-for="(item,index) in tabControl_title"
                 :class="{tabControl_item_active:index === currentIndex}"
                 @click="itemClick(index)" :key="index">{{item}}</div>
             <div class="tabControl_line"></div>
        </div>
    </div>

</template>

<script>
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
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        let line_left = 6+(34*(index));
        // console.log(document.getElementsByClassName('tabControl_line')[0]);
        //修改下滑线的样式
        document.getElementsByClassName('tabControl_line')[0].setAttribute('style','left:'+line_left+'%')
        //自定义事件
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
    #tabControl {

        display: flex;
        height: 44px;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        background-color: #f6f6f6;
    }
    .tabControl_item{
        flex: 1;
        text-align: center;
        line-height: 39px;
    }
    .tabControl_item:hover {
       cursor: pointer;
    }
    .tabControl_item_active{
        color:var(--color-tint) ;
    }
    .tabControl_line{
        display: block;
        height: 4px;
        width: 20%;
        background-color: var(--color-tint);
        /*z-index: 20;*/
        content: ' ';
        position: absolute;
        bottom: 0;
        transition: left 0.4s;
        left: 6%;
        /*left: 40%;*/
        /*left: 74%;*/
        /*间隔34px*/
    }
    .tabControl-box{


    }
</style>