import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
export default class MyNavLink extends Component {
  render() {
    return (
        /*
        不需要这么写，因为在标签内有个属性叫children就能完成这个功能
        <NavLink className="list-group-item" to="/home">Home</NavLink>
        */
        <NavLink activeClassName="myActive" className="list-group-item" {...this.props}/>
    );
  }
}
