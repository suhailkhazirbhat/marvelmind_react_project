import {combineReducers} from 'redux'
import cardItems from './reducer'
console.log(cardItems,"cardItems")

export default combineReducers({
    cardItems,
})