import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
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
            <MyNavLink to="/home">Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
            </div>
          </div>
        </div>
      </div>
  </div>
    )
  }
}
