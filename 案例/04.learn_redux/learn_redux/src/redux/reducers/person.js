import {ADD_PERSON} from '../constant'
import {nanoid} from 'nanoid'
const initState = [{id:nanoid(),name:'kobe',age:41}]
export default function personReducer(preState=initState,action){
    //获取action中的type,data
    const {type,data} = action;
    switch(type){
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState  
    }
}