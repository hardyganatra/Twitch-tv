import { SIGN_IN, SIGN_OUT } from "../Middleware/ActionTypes";
const InitialState = {
	SignInStatus: null,
	UserID: null
};
const AuthReducer = (state = InitialState, action) => {
	const NewState = { ...state };
	switch (action.type) {
		case SIGN_IN:
			NewState.SignInStatus = true;
			NewState.UserID = action.payload;
			break;
		case SIGN_OUT:
			NewState.SignInStatus = false;
			NewState.UserID = null;
			break;
		default:
			break;
	}
	return NewState;
};

export default AuthReducer;
