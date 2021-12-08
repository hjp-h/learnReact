import React, { Component } from 'react';
import axios from 'axios'
export default class componentName extends Component {
  //获取学生的数据
  getStudent = () => {
    axios.get("http://localhost:3000/api1/students").then(res => {
      console.log(res.data);
    },error => {
      console.log(error.data);
    });
  };
  //获取汽车的数据
  getCars = () => {
    axios.get("http://localhost:3000/api2/cars").then(res => {
      console.log(res.data);
    },error => {
      console.log(error.data);
    });
  }
  render() {
    return (
      <div> 
        <button onClick={this.getStudent}>获取学生数据</button>
        <button onClick={this.getCars}>获取学生数据</button> 
       </div>
    );
  }
}
