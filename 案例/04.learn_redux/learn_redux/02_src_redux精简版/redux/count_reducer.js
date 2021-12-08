//reducer是个函数
//接收preState,action,返回一个处理后的state

//初始化的值
const initState = 0;
export default function countReducer(preState=initState,action) {
    //action中有type,data
    const {type,data} = action;
    //判断type的类型，然后决定如何加工数据
    switch(type){
        case 'increment':
            return preState+data;
        case 'decrement':
            return preState-data;
        default://初始化 默认值
            return preState;
    }
}