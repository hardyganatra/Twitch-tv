export const SignInClickedAction = msg => {
	console.log("SignInClickedAction", msg);
	return dispatch => {
		dispatch({ type: "SIGN_IN_CLICKED", payload: "User is Signed In" });
	};
};
export const SignOutClickedAction = msg => {
	console.log("SignOutClickedAction", msg);
	return dispatch => {
		dispatch({ type: "SIGN_OUT_CLICKED", payload: "User Signed Out" });
	};
};
