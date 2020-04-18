// 根据key拿到数据
import {request} from "./request";

export function getCategoryData(key) {
  return request({
    url: '/untitled3/category',
    params:{
      key
    }
  })

}
