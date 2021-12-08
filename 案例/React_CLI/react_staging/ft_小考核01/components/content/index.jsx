import React, { Component } from 'react';
import './index.css'
export default class Inp extends Component {
  changeNum = (event) => {
    //获取输入的值
    const {value} = event.target;
    //判断是第一个输入框还是第二个输入框
    const{flag,updateState} = this.props;
    //是第一个输入框
    if(flag==="num1"){
      updateState({num1:value});
    }else{
      updateState({num2:value});
    }
  }
  count = () => {
    const {count} = this.props;
    count(1);
  }
  render() {
    return (
      <div>
          <input onChange={this.changeNum} type="text" placeholder="请输入数字" onBlur={this.count}/>
      </div>
    );
  }
}
