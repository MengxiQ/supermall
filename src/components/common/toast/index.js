/**
 * 封装toast插件
 * */
//导入一个组件模板
import Toast from "./toast";

const obj = {};

obj.install = function (Vue) {
  //创建一个组件构造器
  const  toastConstructor = Vue.extend(Toast);
  //创建一个组件对象
  const  toast = new toastConstructor();
  //组件对象挂载到一个dom元素上
  toast.$mount(document.createElement('div'));
  //将生成的dom元素添加到页面上渲染
  document.body.appendChild(toast.$el);
  //将Vue实例上挂载一个自定义属性
  Vue.prototype.$toast = toast;
}
//导出对象
export default obj