import './App.css'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter basename="/react">
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Switch>
        <Route path="/" exact component={() => <h1>首页</h1>}></Route>
        <Route path="/about" component={() => <h1>关于</h1>}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
