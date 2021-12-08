import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import News from "./News";
import Messages from "./Messages";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>我是Home界面</h2>
        <div>
          <ul className="nav nav-tabs">
            {/* <li>
              <a class="list-group-item active" href="./home-news.html">News</a>
            </li>
            <li>
              <a class="list-group-item " href="./home-message.html">Message</a>
            </li> */}
            {/*编写路由的链接 */}
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/messages">Messages</MyNavLink>
            </li>
          </ul>
          {/*注册路由*/}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/messages" component={Messages} />
          </Switch>
        </div>
      </div>
    );
  }
}
