export const depositMoney = (ammount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: ammount
        })
    }
}

export const withdrawMoney = (ammount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: ammount
        })
    }
}

export const topupSaldo = (ammount) => {
    return dispatch => {
        dispatch({
            type: 'topup',
            payload: ammount
        })
    }
}

export const handleLogin = (status) => {
    return dispatch => {
        dispatch({
            type: "ISLOGIN",
            payload: status
        })
    }
}

export const handleGreeting = (greeting) => {
    return dispatch => {
        dispatch({
            type: "ISGREETING",
            payload: greeting
        })
    }
}

export const handleChangeLogin = (status) => {
    return dispatch => {
        dispatch({
            type: "CHANGELOGIN",
            payload: status
        })
    }
}

export const changeCartBool = (cart) => {
    return dispatch => {
        dispatch({
            type: "ISCART",
            payload: cart
        })
    }
}

export const handleCartCount = (count) => {
    return dispatch => {
        dispatch({
            type: "CARTCOUNT",
            payload: count
        })
    }
}

export const handleRemoveCartCount = (count) => {
    return dispatch => {
        dispatch({
            type: "REMOVECARTCOUNT",
            payload: count
        })
    }
}