import React, { Component } from 'react';
import Item from '../Item'
import PubSub from 'pubsub-js'
export default class List extends Component {
  //初始化用户的数据
  state = {
    //是否是第一次进入页面
    isFirst:true,
    //是否是在搜索中
    isLoading:false,
    //用户的数据
    users:[],
    //请求出错时的数据
    error:''
  }
  //在组件挂载完毕后订阅消息
  componentDidMount(){
    this.token = PubSub.subscribe('updateState',(msg,data) => {
      this.setState(data);
    });
  }
  //在组件即将卸载时
  componentWillUnmount(){
    PubSub.unsubscribe(this.token);
  }
  render() {
    const {isFirst,isLoading,users,error} = this.state;
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
