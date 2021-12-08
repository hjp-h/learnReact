import count from './counter'
import people from './person'
import {combineReducers} from 'redux'
export default combineReducers({
    count,
    people,
});