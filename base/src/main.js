import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import { registerMicroApps, start } from 'qiankun'
Vue.config.productionTip = false

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:2323', // 默认会加载这个html 解析里面的js动态去执行，但要解决跨域问题
    container: '#vue', // 挂载到的元素
    activeRule: '/vue', // 激活的规则
  },
  {
    name: 'reactApp',
    entry: '//localhost:2233', // 默认会加载这个html 解析里面的js动态去执行，但要解决跨域问题
    container: '#react', // 挂载到的元素
    activeRule: '/react', // 激活的规则
  },
]

registerMicroApps(apps)
start({
  prefetch: false, // 取消预加载
})
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
