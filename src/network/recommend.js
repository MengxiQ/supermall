/**
 * 网络请求
 * */
import {request} from "./request";
export function getRecommendData(type,style){
  // console.log(type,style)
  return request({
    url:'/untitled3/recommend',
    params:{
      type,
      style
    }
  });
}