import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url:'/home'
    // url:'/home/multidata'
  })
}
//这个方法通过传参动态获取到不同类型的数据
export function getHomeGoodsdata(type,page) {
  return request({
    url: '/home/more',
    params:{
      type,
      page
    }
  })
}