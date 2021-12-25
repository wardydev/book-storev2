const initialState = {
    isCart : false,
    cartCount: 0
}

const cartReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "ISCART" :
            return {
                ...state,
                isCart: payload
            }
        case "CARTCOUNT" :
            return {
                ...state,
                cartCount: state.cartCount + payload
            }
        case "REMOVECARTCOUNT" :
            return {
                ...state,
                cartCount: state.cartCount - payload
            }
        default :
            return state
    }
}

export default cartReducer