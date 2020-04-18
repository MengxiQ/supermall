import axios from 'axios'
export function request(config) {
  //1.创建axios的实例ru
  const instance = axios.create({
    // baseURL:'http://123.207.32.32:8000',
    baseURL:"http://localhost:80",
    // method:'get',
    timeout:5000,

  });

  //2.axios的拦截器
  //2.1请求拦截
  instance.interceptors.request.use(config => {
    return config
  },error => {
    console.log('请求失败');
    console.log(error);
  });

  //2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  },error => {
    console.log('响应出错');
    console.log(error);
  })

  //3.发送真正的网络请求
  return instance(config);
}