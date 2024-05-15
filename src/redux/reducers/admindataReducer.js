const reducer = (state = [], action) => {

    if(action.type == 'adminAdd') {
        state.push(action.payload)

        localStorage.setItem('adminData', JSON.stringify(state))
        return state
    }else if(action.type == 'retrieveAdmin') {

        const adminDatas = localStorage.getItem('adminData')

        if(adminDatas) return JSON.parse(adminDatas);

        else return state

    }else {

        return state;

    }
}

export default reducer;