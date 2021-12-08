import React, { Component } from 'react';

export default class About extends Component {
  render() {
    console.log("About收到的props是",this.props);
    return (
      <h2>我是关于界面</h2>
    );
  }
}
