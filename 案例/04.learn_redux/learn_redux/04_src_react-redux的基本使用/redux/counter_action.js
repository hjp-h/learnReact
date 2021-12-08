//专门用于返回产生的action {type:'add',data:1}
import {INCREMENT,DECREMENT} from './constant'
export const createIncrementAction = (data) => ({type:INCREMENT,data})
export const createDecrementAction = (data) => ({type:DECREMENT,data})
//创建一个异步的action 返回的是一个函数
export const createIncrementAsyncAction = (data,time) => {
    //返回的函数让store执行 它知道是个函数，也知道是个异步动作，等待一段时间后  就会执行同步的操作
    //所以会返回一个dispatch 直接发送给reducer
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        },time);
    }
}