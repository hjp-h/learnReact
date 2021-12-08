import React, { Component } from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
  //状态在哪儿 操作状态的方法就在哪儿
  state = {todos:[{id:1,name:'吃饭',done:false},
                  {id:2,name:'睡觉',done:false},
                  {id:3,name:'打代码',done:false}]
          }
  //将新的任务添加到列表中
  addTodoList = (todoObj)=>{
    //获取原来的列表
    const {todos} = this.state;
    // 将新的列表加入形成新的列表
    const newTodos = [todoObj,...todos];
    //重新设置状态
    this.setState({todos:newTodos});
  }

  //复选框勾选改变状态done 的方法
  updateTodo = (id,done) => {
    //获取原来的列表
    const {todos} = this.state;
    //新的newTodos
    const newTodos = todos.map((item) => {
      //如果当前遍历的项是正在修改的项 那么就更新它的状态
      if(item.id === id){
        return {...item,done};
      }else{
        return item;
      }
    });
    //更新状态
    this.setState({todos:newTodos});
  }
  //清除已完成的任务
  delFinishTodos = () => {
    const {todos} = this.state;
    const newTodos = todos.filter((item) => {
      return !item.done;
    });
    //更新状态
    this.setState({todos:newTodos});
  }

  //删除指定的任务
  delTodoObjById = (id) => {
    //获取当前的任务列表
    const {todos} = this.state;
    //过滤掉编号为id的任务
    const newTodos = todos.filter(item => {
      return item.id !== id;
    });
    //更新状态
    this.setState({todos:newTodos});
  }
  //全选按钮的点击
  handleCheckAll = (done) => {
    const {todos} = this.state;
    const newTodos = todos.map(item => {
      return {...item,done};
    });
    //更改状态
    this.setState({todos:newTodos});
  }
  render() {
    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header addTodoList={this.addTodoList}/>
                <List delTodoObjById={this.delTodoObjById} todos={this.state.todos} handleCheck={this.updateTodo}/>
                <Footer delFinishTodos={this.delFinishTodos} todos={this.state.todos} handleCheckAll={this.handleCheckAll}/>
            </div>
        </div>
    );
  }
}
