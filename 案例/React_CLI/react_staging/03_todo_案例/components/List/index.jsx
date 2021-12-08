import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import Item from '../Item'
import './index.css'
export default class List extends Component {
  static propTypes = {
    todos:PropTypes.array.isRequired,
    handleCheck:PropTypes.func.isRequired,
    delTodoObjById:PropTypes.func.isRequired
  }
  render() {
    const {todos,handleCheck,delTodoObjById} = this.props;
    return (
      <ul className="todo-main">
        {
          todos.map((item)=>{
            //console.log(item.id);
            return <Item key={item.id} item={item} handleCheck={handleCheck} delTodoObjById={delTodoObjById}/>;
          })
        }
        
      </ul>
    );
  }
}
