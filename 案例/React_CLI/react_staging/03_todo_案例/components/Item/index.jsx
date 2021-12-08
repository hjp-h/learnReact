import React, { Component } from 'react';
import './index.css'
export default class Item extends Component {
  state = {mouse:false}
  //处理鼠标的事件
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({mouse:flag});
    }
  }
  //处理勾不勾选任务的事件
  changCheck = (id) => {
    return (event) => {
      this.props.handleCheck(id,event.target.checked);
    }
  }

  //删除指定的id任务
  hanleDelete = (id) => {
    if(window.confirm('确定删除该任务么？')){
      this.props.delTodoObjById(id);
    }
  }
  render() {
    const {mouse} = this.state;
    const {id,name,done} = this.props.item;
    return (
      <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
            {/* defaultChecked 只会被调用一次 不推荐使用 */}
            <input type="checkbox" checked={done} onChange={this.changCheck(id,done)}/>
            <span>{name}</span>
        </label>
        <button onClick={()=> this.hanleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':"none"}}>删除</button>
      </li>
       
    );
  }
}
