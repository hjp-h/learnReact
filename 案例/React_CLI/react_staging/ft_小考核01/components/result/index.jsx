import React, { Component } from 'react';
import './index.css'
export default class Result extends Component {
  render() {
    return (
      <div>
          <input readOnly type="text" value={this.props.sum}/>
      </div>
    );
  }
}
