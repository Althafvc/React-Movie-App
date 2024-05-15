
const reducer = (state = [], action) => {

    if (action.type == "userAdd") {
        state.push(action.payload)
        localStorage.setItem('usersData', JSON.stringify(state))
        return state

    } else if (action.type == 'retrieveUser') {

        const datas = localStorage.getItem('usersData')
        
        if (datas) return JSON.parse(datas)

        else return state

    } else {
        
        return state
    }
}

export default reducer;