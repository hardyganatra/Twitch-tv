import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import AuthReducer from "../Middleware/AuthReducer";
import StreamsReducer from "../Middleware/StreamsReducer";
const RootReducer = combineReducers({
	AuthReducer,
	form: formReducer,
	StreamsReducer
});
export default RootReducer;
