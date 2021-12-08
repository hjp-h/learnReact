import React from 'react'
import CountContainer from './containers/Counter'
import PersonContainer from './containers/Person'
export default class App extends React.Component{
  render(){
    return (
      <div>
        {/* 引用了react-redux的provider就可以为每一个容器提供store */}
        {/* 给容器传入store */}
        {/* < CountContainer store={store}/> */}
        < CountContainer/>
        <hr/>
        <PersonContainer/>
      </div>
    )
  } 
}
