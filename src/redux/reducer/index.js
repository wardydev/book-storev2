import {combineReducers} from 'redux'
import accountReducer from './accountReducer'
import topupReducer from './topupReducer'
import loginReducer from './loginReducer'

const reducers = combineReducers({
    account: accountReducer,
    topup: topupReducer,
    login: loginReducer
})

export default reducers