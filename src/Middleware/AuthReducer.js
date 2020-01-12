const InitialState = {
	SignInStatus: ""
};
const AuthReducer = (state = InitialState, action) => {
	const NewState = { ...state };
	switch (action.type) {
		case "SIGN_IN_CLICKED":
			NewState.SignInStatus = "User is Signed In";
			break;
		case "SIGN_OUT_CLICKED":
			NewState.SignInStatus = "User Signed Out";
			break;
		default:
			break;
	}
	return NewState;
};

export default AuthReducer;
