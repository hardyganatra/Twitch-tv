import _ from "lodash";
import {
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM,
} from "../Middleware/ActionTypes";
const initialState = {
	streams: {},
};
const StreamsReducer = (state = initialState, action) => {
	const NewState = { ...state };
	switch (action.type) {
		case FETCH_STREAMS:
			//debugger;
			NewState.streams = {
				..._.mapKeys(action.payload, "_id"),
			};
			//debugger;
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
			//debugger;
			break;
		case EDIT_STREAM:
			// NewState.streams = {
			// 	...NewState.streams,
			// 	[action.payload.id]: action.payload,
			// };
			// let abc = NewState.streams;

			break;
		case DELETE_STREAM:
			// NewState.streams = _.omit(NewState.streams, action.payload);

			break;
		default:
			break;
	}
	return NewState;
};

export default StreamsReducer;
