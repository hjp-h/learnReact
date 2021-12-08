import React, { Component } from 'react';
import './index.css';
export default class Counter extends Component {
  state = {sum:0};
  implement = () => {
      //获取state
      const {sum} = this.state;
      //获取下拉框的值
      const {value} = this.selectNum;
      this.setState({sum:sum+value*1});
  }
  sub = () => {
      //获取state
      const {sum} = this.state;
      //获取下拉框的值
      const {value} = this.selectNum;
      this.setState({sum:sum-value*1});

  }
  implementIfOdd = () => {
      //获取state
      const {sum} = this.state;
      //获取下拉框的值
      const {value} = this.selectNum;
      if(sum % 2 !==0){
        this.setState({sum:sum+value*1});
      }    
  }
  asynAdd = () => {
      //获取state
      const {sum} = this.state;
      const {value} = this.selectNum;
      setTimeout(() => {
        this.setState({sum:sum+value*1});
      },1000); 
  }
  render() {
    return (
      <div>
          <h2>当前时间：{new Date().toDateString()}</h2>
          <h2>当前求和为{this.state.sum}</h2>
          <select ref={c => this.selectNum = c}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select> 
          <button onClick={this.implement}>+</button>
          <button onClick={this.sub}>-</button>
          <button onClick={this.implementIfOdd}>当和为奇数加</button>
          <button onClick={this.asynAdd}>异步加</button>
      </div>
    );
  }
}
