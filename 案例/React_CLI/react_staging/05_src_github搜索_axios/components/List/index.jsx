import React, { Component } from 'react';
import Item from '../Item'
export default class List extends Component {
  render() {
    const {isFirst,isLoading,users,error} = this.props.appState;
    return (
      <div>
          {
              isFirst?<h2>欢迎您！请输入文字进行搜索。</h2>:
              isLoading?<h2>Loading......</h2>:
              error?<h2>{error}</h2>:
              users==false?<h2>抱歉，您搜索的用户不存在。</h2>:
              <div className="row">
                  {
                      users.map(item => {
                          return <Item key={item.id} item={item}/> ;
                      })
                  }
              </div>
          }
          
      </div>
    );
  }
}
