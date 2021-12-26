const initialState = {
    shoppingSummary: true,
    checkout: false,
    payments: false,
    finished: false
}

const checkoutReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "SHOPPINGSUMMARY" :
            return {
                ...state,
                shoppingSummary: payload
            }
        case "CHECKOUT" :
            return {
                ...state,
                checkout: payload
            }
        case "PAYMENTS" :
            return {
                ...state,
                payments: payload
            }
        case "FINISHED" :
            return {
                ...state,
                finished: payload
            }
        default :
            return state
    }
}

export default checkoutReducer