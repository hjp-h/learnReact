import {ADD_PERSON} from '../constant'
import {nanoid} from 'nanoid'
const initState = [{id:nanoid(),name:'kobe',age:41}]
export default function personReducer(preState=initState,action){
    //获取action中的type,data
    const {type,data} = action;
    switch(type){
        case ADD_PERSON:
            // preState.unshift(data);
            // return preState;
            /*
            注意：redux要求reducer是一个纯函数。
            什么是纯函数？
            1.不能改变参数
            2.相同的输入得到相同的输出
            3.纯函数里面不能发送网络请求，做一些不靠谱的事情（副作用）。

            用unshift方法改变了参数的值，使得reducer不纯了，就会导致redux无法监听状态的改变

            底层原理就是当传入的参数是引用类型时，比较的只是引用类型的地址。

            地址变了才会重新渲染
            */
            return [data,...preState]
        default:
            return preState  
    }
}
