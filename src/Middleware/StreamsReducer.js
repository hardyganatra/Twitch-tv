import _ from "lodash";
import {
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM,
	SIGN_IN_SUCCESS,
	SIGN_IN_ERROR,
	SIGN_UP_SUCCESS,
	SIGN_UP_ERROR,
} from "../Middleware/ActionTypes";
const initialState = {
	streams: {},
	loginMessage: "",
};
const StreamsReducer = (state = initialState, action) => {
	const NewState = { ...state };
	switch (action.type) {
		case FETCH_STREAMS:
			//;
			NewState.streams = {
				..._.mapKeys(action.payload, "_id"),
			};
			//;
			break;
		case FETCH_STREAM:
			NewState.streams = {
				...NewState.streams,
				[action.payload._id]: action.payload,
			};

			break;
		case CREATE_STREAM:
			// NewState.streams = {
			// 	...NewState.streams,
			// 	[action.payload.id]: action.payload,
			// };
			//;
			break;
		case EDIT_STREAM:
			// NewState.streams = {
			// 	...NewState.streams,
			// 	[action.payload.id]: action.payload,
			// };
			// let abc = NewState.streams;

			break;
		case DELETE_STREAM:
			break;
		// NewState.streams = _.omit(NewState.streams, action.payload);
		case SIGN_IN_SUCCESS:
			NewState.loginMessage = "Sign up Successful";
			debugger;
			break;
		//SIGN_UP_ERROR
		case SIGN_IN_ERROR:
			NewState.loginMessage =
				"unAuthorised , incorrect username or Password ";
			debugger;
			break;
		case SIGN_UP_SUCCESS:
			NewState.loginMessage = "Sign up SUccessfull";
			debugger;
			break;
		case SIGN_UP_ERROR:
			NewState.loginMessage = "User name or Password Allready exist";
			debugger;
			break;
		default:
			break;
	}
	return NewState;
};

export default StreamsReducer;
