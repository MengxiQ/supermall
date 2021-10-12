<template>
    <div class="category">
<!--        头部-->
        <div class="cnav_bar">
            <nav-bar :key="'cateNavBar'"><div slot="center">分类</div></nav-bar>
        </div>
<!--        左边的tabar-->
        <cate-tabar :title="title" @btnClick="btnClick"></cate-tabar>
<!--        右边显示区-->
        <cate-view :currentViewData="viewData[currentIndex]"></cate-view>
    </div>
</template>

<script>

  import CateTabar from "./categoryChildren/cateTabar";
  import CateView from "./categoryChildren/cateView";
  import {getCategoryData} from "@/network/category";
  import NavBar from "../../components/common/nav-bar/nav_bar";

  export default {
    name: "category",
    components: {NavBar, CateView, CateTabar},
    data(){
      return{
        title:[],
        viewData:[],
        currentIndex:0
      }
    },
    methods:{
      ////监听tabbar传来的参数key
      btnClick(index){
        this.currentIndex = index;
        //如果还没有数据请求数据
        if(this.viewData[this.currentIndex] === undefined){
          console.log("还没有当前的数据!");
          console.log('---->请求数据');
        getCategoryData(index).then(res => {
          if (res !== null){
            this.viewData.splice(this.currentIndex,1,res.values.list)
            console.log(" <-----服务器正确返回参数。");
          }
          else {console.log(" <-----服务器没有返回参数！");}
        });
      } }
    },
    created() {

      //先获取tabbar的数据
        getCategoryData('title').then(res => {
          this.title = res.categoryKey;
          getCategoryData(this.currentIndex).then(res => {
            if (res !== null){
              // this.viewData.push(res.values.list);
              this.viewData.splice(this.currentIndex,1,res.values.list)
            }
          });
        })
    },
    watch:{
      viewData(){
        // console.log('viewData改变');
      },
      currentTitle(){
        // console.log('currentTitle改变');
      }
    }
  }
</script>

<style scoped>
    .category{
        position: relative;
        height: 100vh;
        width: 100%;
        overflow: hidden;
    }
    .cnav_bar{
        position: fixed;
        top: 0;
        background-color: deeppink;
        width: 100%;
        z-index: 10;
        color: white;
    }
</style>