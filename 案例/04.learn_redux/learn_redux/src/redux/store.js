//整个应用只有一个store对象
//引入createStore方法 创建store对象
import {createStore,applyMiddleware} from 'redux'
//引入redux-thunk的一个中间件  使得store.dispatch()能够处理一个函数
import thunk from 'redux-thunk'
//引入所有的reducer
import reducer from './reducers'
//创建store对象，并且把它暴露出去
export default createStore(reducer,applyMiddleware(thunk));