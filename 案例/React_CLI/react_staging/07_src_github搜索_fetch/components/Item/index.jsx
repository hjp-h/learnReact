import React, { Component } from 'react';
import './index.css'
export default class Item extends Component {
  render() {
    const {html_url,avatar_url,login} = this.props.item;
    return (
      <div>
        <div className="card">
            <a href={html_url} target="_blank" rel="noreferrer">
            <img alt="head_potrait" src={avatar_url} style={{width: '100px'}}/>
            </a>
            <p className="card-text">{login}</p>
        </div>
      </div>
    );
  }
}
