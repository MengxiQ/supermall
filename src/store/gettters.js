export  let getters = {
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
}