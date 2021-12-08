import React, { Component } from 'react';
//对css进行模块化 文件名要有。module
import welcome from './Welcome.module.css'
export default class Welcome extends Component {
  render() {
    return (
      <h2 className={welcome.title}> 你好，欢迎来到react 脚手架 </h2>
    );
  }
}
