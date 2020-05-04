import React from "react";
import history from "../history";

import StreamForm from "../Components/Streams/StreamForm";
import { signUp, signIn } from "../Middleware/Action";
import { connect } from "react-redux";

// const loginPage = (props) => {
// 	const onSubmit = (submitProps) => {
// 		// this.props.CreateStream(submitProps);
// 		///props.Signup(submitProps);
// 		props.Signin(submitProps);
// 		console.log("LoginDetails", submitProps);
// 	};
// 	return (
// 		<div>
// 			<StreamForm
// 				onSubmit={onSubmit}
// 				button_1={"Signup"}
// 				button_2={"Login"}
// 				label_1={"email"}
// 				label_2={"password"}
// 			></StreamForm>
// 			<div>{props.loginMessage}</div>
// 		</div>
// 	);
// };

// const MapStateToProps = (state, ownProps) => {
// 	console.log("Star", state.StreamsReducer.loginMessage);
// 	return {
// 		loginMessage: state.StreamsReducer.loginMessage,
// 	};
// };

// const MapDispatchToProps = (dispatch) => {
// 	return {
// 		Signup: (formvalues) => dispatch(signUp(formvalues)),
// 		Signin: (formvalues) => dispatch(signIn(formvalues)),
// 	};
// };

// export default connect(MapStateToProps, MapDispatchToProps)(loginPage);

const loginPage = (props) => {
	return (
		<div>
			<button
				onClick={() => {
					history.push("/signup");
				}}
			>
				Signup
			</button>
			<button
				onClick={() => {
					history.push("/signin");
				}}
			>
				Signin
			</button>
		</div>
	);
};

export default loginPage;
