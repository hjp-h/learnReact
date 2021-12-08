//引入connect进行连接
import { connect } from "react-redux";
//引入actions
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/counter_action";

import React, { Component } from "react";
class Counter extends Component {
  state = { car: "奔驰GL300" };
  increment = () => {
    //获取下拉框的值
    const { value } = this.selectNum;
    this.props.increment(value * 1);
  };
  sub = () => {
    const { value } = this.selectNum;
    this.props.decrement(value);
  };
  incrementIfOdd = () => {
    //获取下拉框的值
    const { value } = this.selectNum;
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  };
  asynAdd = () => {
    const { value } = this.selectNum;
    this.props.incrementAsync(value * 1, 500);
  };
  render() {
    return (
      <div>
        <h2>当前时间：{new Date().toDateString()}</h2>
        <h2>当前求和为{this.props.count}</h2>
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

//映射状态到容器  {return {count:state}}   简写方式 => ({count:state})
/*
const mapStateToProps = state =>  ({count:state})
 
//映射操作状态的方法到容器
const mapDispatchToProps = (dispatch) => {
    return {
        increment:num => dispatch(createIncrementAction(num*1)),
        decrement:num => dispatch(createDecrementAction(num*1)),
        incrementAsync: (num,time) => dispatch(createIncrementAsyncAction(num*1,time))
    }
}
*/
/*
1.当涉及到给子组件传递redux状态，和操作redux状态的方法时，connect第一次调用要传入两个参数（都是函数）
2.参数一：mapStateToProps  参数二：mapDispatchToProps
3.第二次调用传递时UI组件，建立关联
*/
//重点  connect(mapStateToProps,mapDispatchToProps)(CountUI)

//普通写法
//export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

//简写方法
export default connect(
  (state) => ({ count: state }),
  //当传入的第二个参数是个对象而不是函数时，react-redux会帮你自动分发dispatch(action)
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction,
  }
)(Counter);
