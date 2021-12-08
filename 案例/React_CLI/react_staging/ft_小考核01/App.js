import React, { Component } from 'react';
import Inp from './components/content'
import Result from './components/result'
import './App.css'
export default class App extends Component {
  state = {num1:0,num2:0,sum:0}
  //更新状态
  updateState = (stateObj) => {
    this.setState(stateObj);
  }
  //计算
  count = (s) => {
    const {num1,num2} = this.state;
    //获取运算符
    const op = this.operate.value;
    //运算
    let result = 0;
    if(op === "+"){
      result = parseInt(num1)+parseInt(num2);
    }else{
      result = parseInt(num1)-parseInt(num2);
    }
    //更新状态
    this.setState({sum:result});
  }
  render() {
    const {num1,num2,sum} = this.state;
    return (
      <div>
        <Inp count={this.count} updateState={this.updateState} flag="num1" num1={num1}/> 
        <select ref={c => this.operate = c} style={{float:"left"}} onChange={this.count}>
          <option value="+">+</option>
          <option value="-">-</option>
        </select> 
        <Inp count={this.count} updateState={this.updateState} flag="num2" num2={num2}/>
        <span>=</span>
        <Result sum={sum}/>
        
       <input></input>
       <Com></Com>
      </div>
    )
  }
}
