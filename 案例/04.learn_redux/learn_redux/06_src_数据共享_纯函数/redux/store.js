//整个应用只有一个store对象
//引入createStore方法 创建store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入redux-thunk的一个中间件  使得store.dispatch()能够处理一个函数
import thunk from 'redux-thunk'
import countReducer from './reducers/counter'
import personReducer from './reducers/person'
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
//combineReducers 组合所有的reducer
//combineReducers 传入的对象是什么样的  redux中保存的对象就是什么样的
const allReducers = combineReducers({
    count:countReducer,
    people:personReducer
});
//创建store对象，并且把它暴露出去
export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))
