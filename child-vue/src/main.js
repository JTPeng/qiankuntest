import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false

let instace = null
function render() {
  instace = new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app') // 仍然是挂载到自己的html中 基座会将其挂载后的html插入到主应用中
}
// qiankun使用
if (window.__POWERED_BY_QIANKUN) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

// 独立运行微应用
if (!window.__POWERED_BY_QIANKUN) {
  render()
}
// 子组件协议
export async function bootstrap(props) {}
export async function mount(props) {
  render(props)
}
export async function unmount(props) {
  instace.$destory()
}
