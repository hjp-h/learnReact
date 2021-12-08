import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import axios from 'axios'
export default class Search extends Component {
    search = () => {
        //只要点了搜索 就不是第一次 并且处于加载中
        PubSub.publish('updateState',{isFirst:false,isLoading:true});
        //解构赋值的连续写法 并且重命名
        const {keyWordInp:{value:keyWord}} = this;
        //发送网络请求
        axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`).then(success => {
            // console.log(success.data.items);
            PubSub.publish('updateState',{isLoading:false,users:success.data.items});
        },
        error => {
            PubSub.publish('updateState',{isLoading:false,error:error.message});
        });
    }
    render() {
        return (
        <div>
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordInp = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        </div>
        );
    }
}
