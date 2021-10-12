// 根据iid拿到数据
import {request} from "./request";

export function getDetaildataByIid(iid) {
  return request({
    url: '/goods/detail',
    params:{
      iid
    }
  })

}
