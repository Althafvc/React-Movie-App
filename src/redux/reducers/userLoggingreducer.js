const reducer = (state = false, action)=> {

    if(action.type == 'userLogged') {
        localStorage.setItem('userLogged', true)
        state = true
        return state

    }else if(action.type == 'userLoggedOut') {
        localStorage.removeItem('userLogged',true)
        return state
    }
    return state
}

export default reducer