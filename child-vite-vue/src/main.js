import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

let app = null
function render() {
  app = createApp(App)
  app.use(router).mount('#app')
}
// createApp(App).use(router).mount('#app')
render()

// qiankun使用
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

// 独立运行微应用
// if (!window.__POWERED_BY_QIANKUN__) {
//   render()
// }

export async function bootstrap(props) {}
export async function mount(props) {
  render(props)
}
export async function unmout(props) {
  app.unmout('#app')
}
