import React, { Component } from "react";
import qs from "querystring";

export default class Detail extends Component {
  state = {
    contents: [
      { id: "01", content: "你好，李焕英" },
      { id: "02", content: "叶问3" },
      { id: "03", content: "复仇者联盟" },
    ],
  };
  render() {
    console.log(this.props);
    //#region 1.接收params方式的参数
    const { id, title } = this.props.match.params;
    //#endregion

    //#region 2.接收search方式的参数
    //拿到路由search方式传递的参数 this.props.location.search
    //拿到参数 ?id=01&title=电影01
    //const {search} = this.props.location;
    //parse 将字符串转换为json格式 search.slice(1)去掉？
    //const {id,title} = qs.parse(search.slice(1));
    //#endregion

    //#region 3.接收state方式的参数 state={id: "01", title: "电影01"}
    //const {id,title} = this.props.location.state || {};
    //#endregion
    const targetContent =
      this.state.contents.find((item) => {
        return item.id === id;
      }) || {};
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>Title:{title}</li>
          <li>Content:{targetContent.content}</li>
        </ul>
      </div>
    );
  }
}
