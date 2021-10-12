/**
 * 网络请求
 * */
import {request} from "./request";
export function getRecommendData(type,style){
  // console.log(type,style)
  return request({
    url:'/json/recommend.json',
    params:{
      type,
      style
    }
  });
}