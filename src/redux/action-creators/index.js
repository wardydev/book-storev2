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