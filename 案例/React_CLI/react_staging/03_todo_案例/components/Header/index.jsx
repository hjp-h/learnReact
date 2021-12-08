import React, { Component } from 'react';
import {PropTypes} from 'prop-types'
//引入随机id库
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {
  //对传人的属性进行限制
  static propTypes = {
    addTodoList:PropTypes.func.isRequired
  }
  //按下回车键添加任务
  keyHandle = (event) => {
    const {keyCode,target} = event;
    //按下的是空格键
    if(keyCode === 13){
      if(target.value.trim() === ''){
        alert("输入的内容不能为空！");
        return;
      }
      //将新的任务添加到App的状态中
      const newTodo = {id:nanoid(),name:target.value,done:false};
      this.props.addTodoList(newTodo);
      //最后清空输入框的值
      target.value = '';
    }else{
      return;
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.keyHandle} placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    );
  }
}
