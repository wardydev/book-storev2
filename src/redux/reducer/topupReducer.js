const topupReducer = (state = 1, action) => {
    switch(action.type) {
        case 'topup' :
            return state + action.payload
        default :
            return state
    }
}

export default topupReducer