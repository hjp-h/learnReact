import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createPersonAction} from '../../redux/actions/person'
import {nanoid} from 'nanoid'
class Person extends Component {
  addPerson = () => {
    const id = nanoid();
    const name = this.pName.value;
    const age = this.pAge.value;
    const newPerson = {id,name,age};
    console.log(newPerson);
    //利用props添加redux Person的数据
    this.props.addPerson(newPerson);
    this.pName.value='';
    this.pAge.value='';
  }
  render() {
    return (
      <div>       
          <h2>我是Person组件,上方组件求和为{this.props.count}</h2>
          <input ref={c => this.pName = c} type="text" placeholder="请输入姓名"/>
          <input ref={c => this.pAge = c} type="text" placeholder="请输入年龄"/>
          <button onClick={this.addPerson}>添加</button>
          <ul>
              {
                this.props.people.map( personObj => {
                  return <li key={personObj.id}>姓名：{personObj.name}----年龄：{personObj.age}</li>
                })
              }
          </ul>
      </div>
    );
  }
}
export default connect(
  //映射状态
  state => ({people:state.people,count:state.count}),
  //映射操作状态的方法
  {
    addPerson:createPersonAction
  }
)(Person)
