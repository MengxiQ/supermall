export let actions = {
  /**
   * 购物车相关
   * */
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
        context.commit("increaseCount",oldProduct.iid);
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
  },

  /**
   * 个人档案相关
   * */

}