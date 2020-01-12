import { combineReducers } from "redux";
import AuthReducer from "../Middleware/AuthReducer";
const RootReducer = combineReducers({ AuthReducer });
export default RootReducer;
