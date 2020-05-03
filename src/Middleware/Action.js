import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM,
	SIGN_UP,
} from "./ActionTypes";
import streams from "../Apis/Streams";
import history from "../history";

export const SignInAction = (ID) => {
	//console.log("SignInAction", ID);
	return (dispatch) => {
		dispatch({
			type: SIGN_IN,
			payload: ID,
		});
	};
};
export const SignOutAction = (msg) => {
	return (dispatch) => {
		dispatch({
			type: SIGN_OUT,
		});
	};
};

export const CreateStream = (formvalues) => {
	return (dispatch, getstate) => {
		//;
		const { UserID } = getstate().AuthReducer;
		streams.post("/streams", { ...formvalues, UserID }).then((res) => {
			//console.log("Che", res);
			dispatch(CreateStreamSuccess(res.data));
			history.push("/streamlist");
		});
	};
};
const CreateStreamSuccess = (data) => {
	return {
		type: CREATE_STREAM,
		payload: data,
	};
};

export const FetchStream = (id) => {
	return (dispatch) => {
		streams.get(`/streams/${id}`).then((res) => {
			dispatch(FetchStreamSuccess(res.data));
		});
	};
};

const FetchStreamSuccess = (data) => {
	//;
	return {
		type: FETCH_STREAM,
		payload: data,
	};
};

export const FetchStreams = () => {
	return (dispatch) => {
		streams.get("/streams").then((res) => {
			//console.log("fetchStreams", res.data);
			//;
			dispatch(FetchStreamsSuccess(res.data.streams));
		});
	};
};

const FetchStreamsSuccess = (data) => {
	return {
		type: FETCH_STREAMS,
		payload: data,
	};
};

export const DeleteStream = (id) => {
	return (dispatch) => {
		streams.delete(`/streams/${id}`).then((res) => {
			dispatch(DeleteSuccess(id));

			//;
		});
	};
};

const DeleteSuccess = (data) => {
	history.push("/streamlist");
	return {
		type: DELETE_STREAM,
		payload: data,
	};
};

export const EditStream = (id, formvalues) => {
	//console.log("EditStream", id, formvalues);
	return (dispatch) => {
		streams.patch(`/streams/${id}`, formvalues).then((res) => {
			//console.log("EditStream", res);
			dispatch(EditSuccess(res.data));
			history.push("/streamlist");
		});
	};
};

const EditSuccess = (data) => {
	return {
		type: EDIT_STREAM,
		payload: data,
	};
};

export const signUp = (formvalues) => {
	return (dispatch) => {
		streams.post("/signup", formvalues).then((res) => {
			debugger;
			dispatch(signUpSuccess(res.data));
			history.push("/streamlist");
		});
	};
};

const signUpSuccess = (data) => {
	return {
		type: SIGN_UP,
		payload: data,
	};
};
