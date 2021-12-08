import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
  render() {
    return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header/>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/*  传统的实现页面的跳转
            <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}
            {/* 使用路由  路由的导航 */}
            {/* <NavLink className="list-group-item" to="/home">Home</NavLink>
            <NavLink className="list-group-item" to="/about">About</NavLink> */}
            {
              /*
              多级路径刷新的时候可能会造成样式的丢失，
              原因：当再次刷新的时候，第一级路径会被当成根目录
              解决方式：
              （1）样式路径最前面不加点
              （2）路径中使用 %PUBLIC_URL%
              （3）最外层使用HashRouter
              */
            }
            <MyNavLink to="/home">Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由  要在最外面包裹一个switch 实现单一的匹配
                  模糊匹配与技术匹配：
                  （1）默认使用模糊匹配，简单记：【输入的路径】必须要包含【匹配的路径】，且顺序要一致。
                  （2）开启严格模式匹配，<Route exact path="/hjp-h/home" component={Home}></Route>
                  （3）严格模式不要随便开启，需要再开，有时候可能会导致无法匹配二级路径。
              */}
              <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/about" component={Category}></Route>
                {/* 当前面的都匹配不上 就使用重定向 */}
                <Redirect to="/home"/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
  </div>
    )
  }
}
