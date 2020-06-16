import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home/home";
import category from "../views/category/category";
import cart from "../views/cart/cart";
import profile from "../views/profile/profile";
import detail from "../views/detail/detail";
// import test from "../views/test";
Vue.use(VueRouter)

const routes = [
  {
    path:'/suppermall',
    redirect:'/suppermall/home'
  },
  {
    path:'/suppermall/home',
    component:home
  },
  {
    path:'/suppermall/category',
    component:category
  },
  {
    path:'/suppermall/cart',
    component:cart
  },
  {
    path:'/suppermall/profile',
    component:profile
  },
  {
    path:'/suppermall/detail',
    component:detail
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
