//导入react的核心包
import React from 'react'
import ReactDOM from 'react-dom'
//在App组件的最外层包裹一个BrowserRouter,管理里面所有的路由映射关系
import {BrowserRouter} from 'react-router-dom'
import App from './App'
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,document.getElementById("root"));
