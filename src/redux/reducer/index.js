import {combineReducers} from 'redux'
import accountReducer from './accountReducer'
import topupReducer from './topupReducer'
import loginReducer from './loginReducer'
import cartReducer from './cartReducer'

const reducers = combineReducers({
    account: accountReducer,
    topup: topupReducer,
    login: loginReducer,
    cart: cartReducer
})

export default reducers