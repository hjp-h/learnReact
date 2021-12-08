import React, { Component } from 'react';

export default class News extends Component {
  componentDidMount(){
    //3秒后跳转到messages
    // setTimeout(()=>{
    //   this.props.history.replace('/home/messages');
    // },3000);
    
  }
  render() {
    return (
        <ul>
            <li>news001</li>
            <li>news002</li>
            <li>news003</li>
        </ul>
    );
  }
}
