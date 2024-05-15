import { combineReducers } from "redux";
import userdataReducer from './userdataReducer'
import admindataReducer from './admindataReducer'
import userLoggingReducer from './userLoggingreducer'
import adminLoggingReducer from './adminLoggingReducer'

const reducers = combineReducers ({
    userData: userdataReducer,
    adminData:admindataReducer,
    userLogging:userLoggingReducer,
    adminLogging:adminLoggingReducer



})

export default reducers;