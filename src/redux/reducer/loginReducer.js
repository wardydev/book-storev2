const inisialState = {
    isLogin: false,
    greeting: false,
    changeLogin: false
}

const loginReducer = (state = inisialState, {type, payload}) => {
    switch(type) {
        case "ISLOGIN" :
            return{
                ...state,
                isLogin: payload
            }
        case "ISGREETING" :
            return{
                ...state,
                greeting: payload
            }
        case "CHANGELOGIN" :
            return {
                ...state,
                changeLogin: payload
            }
        default :
            return state
    }
}

export default loginReducer