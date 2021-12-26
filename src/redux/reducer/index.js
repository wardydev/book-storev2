import {combineReducers} from 'redux'
import accountReducer from './accountReducer'
import topupReducer from './topupReducer'
import loginReducer from './loginReducer'
import cartReducer from './cartReducer'
import checkoutReducer from './checkoutReducer'

const reducers = combineReducers({
    account: accountReducer,
    topup: topupReducer,
    login: loginReducer,
    cart: cartReducer,
    checkout: checkoutReducer
})

export default reducers