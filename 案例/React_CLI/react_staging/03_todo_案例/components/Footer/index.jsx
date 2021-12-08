import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import './index.css'
export default class Footer extends Component {
  static propTypes = {
    delFinishTodos:PropTypes.func.isRequired
  }
  // 删除已完成的任务
  delFinishTodos = () => {
      this.props.delFinishTodos();
  }
  // 处理全选框事件 需要借助event来判断是全选还是全不选
  handleCheckAll =(event) => {
    this.props.handleCheckAll(event.target.checked);
  }
  render() {
    const {todos} = this.props;
    //全部任务的数量
    let allCount = todos.length;
    //已经完成任务的数量
    let doneCount = todos.reduce((preValue,todoObj) => preValue + (todoObj.done?1:0),0);
    return (
      <div className="todo-footer">
        <label>
          {/* 
            在react中，当所有的子项都已经勾选上时，全选框的checked就为true值
            再次点击全选框无法取消勾选
          解决：加一个 onChange方法
          */}
        <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === allCount ? true:false}/>
        </label>
        <span>
        <span>已完成{doneCount}</span> / 全部{allCount}
        </span>
        <button onClick={this.delFinishTodos} className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
