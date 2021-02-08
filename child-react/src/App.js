import './App.css'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Button } from 'antd'
function App(props) {
  const toVue = () => {
    window.history.pushState({}, '', '/vue')
  }
  return (
    // <div>
    <BrowserRouter basename="/react">
      <Link to="/">首页</Link> |<Link to="/about">关于</Link>
      <Button type="link" onClick={toVue}>
        to Vue
      </Button>
      <Switch>
        <Route path="/" exact component={() => <h1>首页</h1>}></Route>
        <Route path="/about" component={() => <h1>关于</h1>}></Route>
      </Switch>
    </BrowserRouter>
    // </div>
  )
}

export default App
