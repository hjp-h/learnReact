import React from 'react'
import store from './redux/store'
import CountContainer from './containers/Counter'

export default class App extends React.Component{
  render(){
    return (
      <div>
        {/* 给容器传入store */}
        < CountContainer store={store}/>
      </div>
    )
  } 
}
