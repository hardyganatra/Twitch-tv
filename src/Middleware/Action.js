import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM
} from "./ActionTypes";
import streams from "../Apis/Streams";

export const SignInAction = ID => {
	//console.log("SignInAction", ID);
	return dispatch => {
		dispatch({
			type: SIGN_IN,
			payload: ID
		});
	};
};
export const SignOutAction = msg => {
	return dispatch => {
		dispatch({
			type: SIGN_OUT
		});
	};
};

export const CreateStream = formvalues => {
	return dispatch => {
		streams.post("/streams", formvalues).then(res => {
			//console.log(res);
			dispatch(CreateStreamSuccess(res.data));
		});
	};
};
const CreateStreamSuccess = data => {
	return {
		type: CREATE_STREAM,
		payload: data
	};
};

export const FetchStream = id => {
	//console.log("id", id);
	return dispatch => {
		streams.get(`/streams/${id}`).then(res => {
			//console.log("Fetch_Single", res.data);
			dispatch(FetchStreamSuccess(res.data));
		});
	};
};

const FetchStreamSuccess = data => {
	return {
		type: FETCH_STREAM,
		payload: data
	};
};

export const FetchStreams = () => {
	return dispatch => {
		streams.get("/streams").then(res => {
			//console.log("fetchStreams", res.data);
			dispatch(FetchStreamsSuccess(res.data));
		});
	};
};

const FetchStreamsSuccess = data => {
	return {
		type: FETCH_STREAMS,
		payload: data
	};
};

export const DeleteStream = id => {
	return dispatch => {
		streams.delete(`/streams/${id}`).then(res => {
			//console.log("Delete", res);
			dispatch(DeleteSuccess(res.data));
		});
	};
};

const DeleteSuccess = data => {
	return {
		type: DELETE_STREAM,
		payload: data
	};
};

export const EditStream = (id, formvalues) => {
	//console.log("EditStream", id, formvalues);
	return dispatch => {
		streams.put(`/streams/${id}`, formvalues).then(res => {
			//console.log("EditStream", res);
			dispatch(EditSuccess(res.data));
		});
	};
};

const EditSuccess = data => {
	return {
		type: EDIT_STREAM,
		payload: data
	};
};
