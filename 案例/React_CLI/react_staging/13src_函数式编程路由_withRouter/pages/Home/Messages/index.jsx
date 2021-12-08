import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";
export default class Messages extends Component {
  state = {
    messages: [
      { id: "01", title: "电影01" },
      { id: "02", title: "电影02" },
      { id: "03", title: "电影03" },
    ],
  };
  //函数式编程路由
  //push查看
  pushShow = (id, title) => {
    //通过路由组件接收的参数this.props.history来实现
    //params实现
    //this.props.history.push(`/home/messages/detail/${id}/${title}`);

    //search实现
    // this.props.history.push(`/home/messages/detail/?id=${id}&title=${title}`);

    //state实现
    this.props.history.push("/home/messages/detail", { id, title });
  };
  //replace查看
  replaceShow = (id, title) => {
    //通过路由组件接收的参数this.props.history来实现
    //params实现
    //this.props.history.replace(`/home/messages/detail/${id}/${title}`);

    //search实现
    // this.props.history.replace(`/home/messages/detail/?id=${id}&title=${title}`);

    //state实现
    this.props.history.replace("/home/messages/detail", { id, title });
  };
  render() {
    const { messages } = this.state;
    return (
      <div>
        <ul>
          {
            //编写路由链接 1.params参数
            // messages.map((msgObj) => {
            //     return <li key={msgObj.id}>
            //                 <Link to={`/home/messages/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
            //                 &nbsp;<button onClick={() => this.pushShow(msgObj.id,msgObj.title)}>push查看</button>
            //                 &nbsp;<button onClick={() => this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
            //             </li>
            // })

            // 编写路由链接 2.search方式传参
            // messages.map((msgObj) => {
            //     return <li key={msgObj.id}>
            //                 <Link to={`/home/messages/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
            //                 &nbsp;<button onClick={() => this.pushShow(msgObj.id,msgObj.title)}>push查看</button>
            //                 &nbsp;<button onClick={() => this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
            //             </li>
            // })

            //编写路由链接 3.state方式传参
            messages.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  <Link
                    to={{
                      pathname: "/home/messages/detail",
                      state: { id: msgObj.id, title: msgObj.title },
                    }}
                  >
                    {msgObj.title}
                  </Link>
                  &nbsp;
                  <button
                    onClick={() => this.pushShow(msgObj.id, msgObj.title)}
                  >
                    push查看
                  </button>
                  &nbsp;
                  <button
                    onClick={() => this.replaceShow(msgObj.id, msgObj.title)}
                  >
                    replace查看
                  </button>
                </li>
              );
            })
          }
        </ul>
        <hr />
        {/* 注册路由 2.parms方式路由传参接收*/}
        {/* <Route path="/home/messages/detail/:id/:title" component={Detail}></Route> */}

        {/* 注册路由 2.search方式路由传参无需接收*/}
        {/* <Route path="/home/messages/detail" component={Detail}></Route> */}

        {/* 注册路由 3.state方式路由传参无需接收*/}
        <Route path="/home/messages/detail" component={Detail}></Route>
      </div>
    );
  }
}
