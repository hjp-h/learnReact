import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Header extends Component {
  go = () => {
    this.props.history.go(2);
  }
  render() {
    return (
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button onClick={() => this.props.history.goBack()}>后退</button>
          <button onClick={() => this.props.history.goForward()}>前进</button>
          <button onClick={this.go}>go</button>
        </div>
    );
  }
}
// withRouter可以加工一般组件，让它具有路由组件的性质
export default withRouter(Header);