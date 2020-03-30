import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home/home";
import category from "../views/category/category";
import cart from "../views/cart/cart";
import profile from "../views/profile/profile";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/profile',
    component:profile
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
