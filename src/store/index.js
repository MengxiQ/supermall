import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {actions} from "./actions";
import {mutations} from "./mutations";
import {getters} from "./gettters";

export default new Vuex.Store({
  state: {
    //购物车
    cartList:[],
    //用户信息
    userInfo:{
      userId:'u_001',
      userName:'梦溪Q',
      logo:'#'
    },
    //用户assets
    assets: {
      balance: '998.00',
      coupons: '99',
      integration: '9999',
      message: '99'
    }

  },
  mutations,
  actions,
  getters,
  modules: {
  }
})
