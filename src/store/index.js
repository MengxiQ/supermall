import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    //商品数量+1
    increaseCount(state,oldProduct){
      // 根据oldProduct的查找到商品的index
      let index = state.cartList.indexOf(oldProduct);
      // console.log(index);
      state.cartList[index].count++;

    },
    //商品数量-1
    deceasedCount(state,oldProduct){
      // 根据oldProduct的查找到商品的index
      let index = state.cartList.indexOf(oldProduct);
      console.log(index);
      state.cartList[index].count--;
    },
    //添加商品到购物车
    addProduct(state,product){
      state.cartList.push(product);
    },

    //修改是否选中
    changeCheck(state,iid){
      let index = state.cartList.indexOf(state.cartList.find((item)=> {
        return item.iid === iid
      })
      )
      state.cartList[index].isCheck = !state.cartList[index].isCheck;
    }

  },
  actions: {
    //加入购物车
    addToCart(context,payload ){
      /**
       * 在这里向后台更新数据
       * */
      //先判断该商品是否存在,存在则拿到该商品
      return new Promise(resolve => {
      let oldProduct = context.state.cartList.find((item)=> {
         return item.iid === payload.iid
      });
      if (oldProduct){
        //存在执行+1操作
        context.commit("increaseCount",oldProduct);
        resolve("商品数量+1");
      }else {
        //不存在，执行加入新商品操作
        //商品数量设置为1
        payload.count = 1;
        payload.isCheck = true
        context.commit("addProduct",payload)
        resolve("添加购物车成功！");
      }
      })
    },
    //全选或者全部取消选中
    changeCheckAll(context){

      if (context.state.cartList !== 0){
        // 如果当前全选状态为false,那么就是有没有选上的
        // 找到没选上的，更改为true
      if (!context.getters.isCheckAll){//注意要取反
        context.state.cartList.map((item,index) => {
          if (item.isCheck === false){
            context.state.cartList[index].isCheck = true
          }
        })
      }else { // 如果当前全选状态为true,找到选上的，更改为false
        context.state.cartList.map((item,index) => {
          if (item.isCheck === true){
            context.state.cartList[index].isCheck = false
          }
        })
      }}
    }
    // 购物车内增加商品数量


  },
  getters:{
    cartListLength(state){
      return state.cartList.length;
    },
    ProductList(state){
      return state.cartList;
    },

    totalPrice(state){

      if (state.cartList.length !== 0) {
          //这里要加一层判断因为reduce不能对空数组进行操作
        //先过滤出来被选中的数组
          let chekcArray = state.cartList.filter(item => {
            return item.isCheck === true
          });
          if(chekcArray.length !== 0) {
            //返回计算的总价
            return chekcArray.map(item => {
              return item.price * item.count
            }
            ).reduce((pre, n) => pre + n).toFixed(2)

          }else {
            //没有选中的商品
            return 0
          }
      }else {
        //购物车为空
        return 0;
      }
    },
    //返回被选中了多少件商品
    checkedCount(state){
      return (state.cartList.filter(item => item.isCheck === true)).length
    },
    //状态：商品是否都被选上
    isCheckAll(state){
      if (state.cartList.length !== 0) {
        //注意找到没选中的，有返回，有返回则true
        //而有没有选中的商品我们希望isCheckAll为faults，所以要取反！
        return !state.cartList.find(item => item.isCheck === false)
      }
      else {
        return false
      }
    }
  },
  modules: {
  }
})
