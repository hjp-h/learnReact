import React, { Component } from 'react';
import Search from './components/Search'
import List from './components/List'
import './App.css'
export default class componentName extends Component {
  //初始化用户的数据
  state = {
    //是否是第一次进入页面
    isFirst:true,
    //是否是在搜索中
    isLoading:false,
    //用户的数据
    users:[],
    //请求出错时的数据
    error:''
  }
  //存储用户的数据
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List appState = {this.state}/>
      </div>
    );
  }
}
