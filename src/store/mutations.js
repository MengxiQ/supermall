export let mutations = {
  //商品数量+1
  increaseCount(state,iid){
    // // 根据oldProduct的查找到商品的index
    // let index = state.cartList.indexOf(oldProduct);
    //根据iid找到商品的下标
    let index = state.cartList.indexOf(state.cartList.find((item)=> {
        return item.iid === iid
      })
    )
    state.cartList[index].count++;

  },
  //商品数量-1
  decreaseCount(state,iid){
    // // 根据oldProduct的查找到商品的index
    // let index = state.cartList.indexOf(oldProduct);
    //根据iid找到商品的下标
    let index = state.cartList.indexOf(state.cartList.find((item)=> {
        return item.iid === iid
      })
    )
    if (state.cartList[index].count > 1) state.cartList[index].count--;

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

}