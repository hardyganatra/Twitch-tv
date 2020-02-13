import { SIGN_IN, SIGN_OUT } from "./ActionTypes";
import streams from "../Apis/Streams";

export const SignInAction = ID => {
	console.log("SignInAction", ID);
	return dispatch => {
		dispatch({
			type: SIGN_IN,
			payload: ID
		});
	};
};
export const SignOutAction = msg => {
	//console.log("SignOutAction", msg);
	return dispatch => {
		dispatch({
			type: SIGN_OUT
		});
	};
};

export const CreateStream = formvalues => async dispatch => {
	console.log("action called", formvalues);
	streams.post("/streams", formvalues);
};

// export const getYearToDateCSRTAction = (headers, params) => {
// 	return dispatch => {
// 		getYearTodateCSRT(headers, params)
// 			.then(data => {
// 				dispatch(getYearToDateCSRTActionSuccess(data));
// 			})
// 			.catch(error => {
// 				dispatch(getYearToDateCSRTActionError(error));
// 			});
// 	};
// };
// export const getYearToDateCSRTActionSuccess = val => {
// 	return { type: GET_CSRT_YD, payload: val };
// };

// const getYearToDateCSRTActionError = error => {};
// export const ClearscrtdataAction_Unit = val => {
// 	return { type: clear_init_CSRT_Unit };
// };
