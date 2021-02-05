import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

// 独立运行微应用
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
// 子组件协议
export async function bootstrap(props) {}
export async function mount(props) {
  render(props)
}
export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
