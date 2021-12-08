import React, { Component } from 'react';
import PubSub from 'pubsub-js'
//import axios from 'axios'
export default class Search extends Component {
    search = async () => {
        //只要点了搜索 就不是第一次 并且处于加载中
        PubSub.publish('updateState',{isFirst:false,isLoading:true});
        //解构赋值的连续写法 并且重命名
        const {keyWordInp:{value:keyWord}} = this;
        
        //#region  使用axios发送网络请求
        // axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`).then(success => {
        //     // console.log(success.data.items);
        //     PubSub.publish('updateState',{isLoading:false,users:success.data.items});
        // },
        // error => {
        //     PubSub.publish('updateState',{isLoading:false,error:error.message});
        // });
        //#endregion
        //使用fetch发送网络请求 未优化
        /*fetch(`http://localhost:3000/api/search/users?q=${keyWord}`).then(success => {
            console.log('联系服务器成功！');
            return success.json();
        },
        error => {
            console.log("联系服务器失败");
            //中断链  如果没有这一句 就会返回undefined 执行下一个then的success
            return new Promise(()=>{});
        }).then(
            success => {
                console.log('获取数据成功',success);
            },
            error => {
                console.log('获取数据失败',error);
            }
        );*/

        //优化版本
        try{
            //await右边是一个promise的实例 等待实例执行并且拿到返回的结果  搭配async使用
            const response = await fetch(`http://localhost:3000/api/search/users?q=${keyWord}`);
            const data = await response.json();
            PubSub.publish('updateState',{isLoading:false,users:data.items});
        }catch(error){
            PubSub.publish('updateState',{isLoading:false,error:error.message});
            console.log('请求失败',error);
        }
        
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
