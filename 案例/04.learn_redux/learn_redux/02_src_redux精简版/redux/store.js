//整个应用只有一个store对象
//引入createStore方法 创建store对象
import {createStore} from 'redux'
import countReducer from './count_reducer'
//创建store对象，并且把它暴露出去
export default createStore(countReducer);
