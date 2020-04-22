import ToTop from "../components/content/Scroll/toTop";

export const toTop = {
  components:{
    ToTop
  },
  data(){
    return{
      isShowTotop:false
    }
  },
  computed:{
    scroll(){
      return this.$refs.Scroll
    }
  },
  methods:{
    /**
     * 监听滚动事件的地方调用
     * */
    //是否显示返回顶部按钮
    isShowtoTop(pos){
      this.isShowTotop = -pos.y > 750;
    },
    /**
     * 按钮点击事件绑定该方法
     * */
    toTop(){
      this.scroll.to_pos(0,0,500)
    },
  }
}