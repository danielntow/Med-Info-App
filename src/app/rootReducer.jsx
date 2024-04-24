import { combineReducers } from "redux";
import medinfoReducer from "features/medInfoApp/slice/medinfoSlice";
import myUserReducer from "features/redux-users/myUserSlice";

const rootReducer = combineReducers({
    medinfo: medinfoReducer,
    myuser: myUserReducer,

});

export default rootReducer;
