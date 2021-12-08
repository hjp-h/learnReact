//导入react的核心库
import React,{Component} from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld/HelloWorld'
import Welcome from './components/welcome/Welcome'
export default class App extends Component{
    render(){
        return(
        <div>
            <HelloWorld/>
            <Welcome/>
        </div>)
    }
}