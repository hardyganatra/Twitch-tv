import { SIGN_IN, SIGN_OUT } from "../Middleware/ActionTypes";
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
