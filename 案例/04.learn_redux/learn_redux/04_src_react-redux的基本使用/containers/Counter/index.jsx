//引入UI组件
import CountUI from '../../components/Counter'
//引入connect进行连接
import {connect} from 'react-redux'
//引入actions
import {createIncrementAction,
        createDecrementAction,
        createIncrementAsyncAction} from '../../redux/counter_action'

//这里的mapStateToProps是react-redux帮我们调用的，state也是它帮我们传进来的 
// 前提是你在使用容器的时候传了store
const mapStateToProps = (state) =>  {
    return {count:state}
    /*
    注意：这里为什么返回的是一个对象？
    因为这里所返回的结果是作为props传给子组件的的，必须是{key:value}的形式，子组件才能够取到
    相当于之前的<CountUI count=1>
    */
}

//这里的mapDispatchToProps是react-redux帮我们调用的，dispatch也是它帮我们传进来的 
// 前提是你在使用容器的时候传了store
const mapDispatchToProps = (dispatch) => {
    return {
        increment:num => dispatch(createIncrementAction(num*1)),
        decrement:num => dispatch(createDecrementAction(num*1)),
        incrementAsync: (num,time) => dispatch(createIncrementAsyncAction(num*1,time))
    }
    /*
    注意：这里为什么返回的是一个对象？
    因为这里所返回的结果是作为props传给子组件的的，必须是{key:value}的形式，子组件才能够取到
    相当于之前的<CountUI increment={num => dispatch(createIncrementAction(num))}>
    */
}
/*
1.当涉及到给子组件传递redux状态，和操作redux状态的方法时，connect第一次调用要传入两个参数（都是函数）
2.参数一：mapStateToProps  参数二：mapDispatchToProps
3.第二次调用传递时UI组件，建立关联
*/
//重点  connect(mapStateToProps,mapDispatchToProps)(CountUI)
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)