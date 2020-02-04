import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import AuthReducer from "../Middleware/AuthReducer";
const RootReducer = combineReducers({ AuthReducer, formReducer });
export default RootReducer;
