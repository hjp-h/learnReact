import React, { Component } from "react";
import store from "../../redux/store";
import "./index.css";
export default class Counter extends Component {
  state = { car: "奔驰GL300" };
  //注意：redux只负责帮你修改状态  不负责帮你重新render 在入口文件加
  // componentDidMount(){
  //   store.subscribe(() => {
  //     //this.render()行不通 只有调用this.setState()才行
  //     this.setState({});
  //   });
  // }
  //
  increment = () => {
    //获取下拉框的值
    const { value } = this.selectNum;
    store.dispatch({ type: "increment", data: value * 1 });
  };
  sub = () => {
    const { value } = this.selectNum;
    store.dispatch({ type: "decrement", data: value * 1 });
  };
  incrementIfOdd = () => {
    //获取下拉框的值
    const { value } = this.selectNum;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({ type: "increment", data: value * 1 });
    }
  };
  asynAdd = () => {
    const { value } = this.selectNum;
    setTimeout(() => {
      store.dispatch({ type: "increment", data: value * 1 });
    }, 1000);
  };
  render() {
    return (
      <div>
        <h2>当前时间：{new Date().toDateString()}</h2>
        <h2>当前求和为{store.getState()}</h2>
        <select ref={(c) => (this.selectNum = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.incrementIfOdd}>当和为奇数加</button>
        <button onClick={this.asynAdd}>异步加</button>
      </div>
    );
  }
}
