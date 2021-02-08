import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

// Vue.config.productionTip = false

let instance = null
function render(props = {}) {
  const { container } = props
  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app') // 仍然是挂载到自己的html中 基座会将其挂载后的html插入到主应用中
}
// qiankun使用
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

// 独立运行微应用
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
// 子组件协议
export async function bootstrap(props) {}
export async function mount(props) {
  // console.log(props)
  // 挂载父应用实例到子应用实例上
  Vue.prototype.instance = props.vueInstance
  render(props)
}
export async function unmount(props) {
  instance.$destory && instance.$destory()
}
