import {combineReducers} from 'redux'
import accountReducer from './accountReducer'
import topupReducer from './topupReducer'

const reducers = combineReducers({
    account: accountReducer,
    topup: topupReducer
})

export default reducers