const reducer = (state = false, action) => {

    if(action.type== 'AdminLogged') {
        console.log('here');
        localStorage.setItem('AdminLogged', true)
        state = true
        return state

    }else if(action.type == 'AdminLoggedout') {
        localStorage.removeItem('AdminLogged',true)
        return state
    }
    return state;

}

export default reducer