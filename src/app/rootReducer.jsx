import { combineReducers } from "redux";
import medinfoReducer from "features/medInfoApp/slice/medinfoSlice";

const rootReducer = combineReducers({
    medinfo: medinfoReducer,
});

export default rootReducer;
