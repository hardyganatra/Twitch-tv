import React from "react";
import StreamForm from "../Components/Streams/StreamForm";
import { signUp } from "../Middleware/Action";
import { connect } from "react-redux";

const loginPage = (props) => {
	const onSubmit = (submitProps) => {
		// this.props.CreateStream(submitProps);
		props.Signup(submitProps);
		console.log("LoginDetails", submitProps);
	};
	return (
		<div>
			<StreamForm
				onSubmit={onSubmit}
				button_1={"Signup"}
				button_2={"Login"}
				label_1={"email"}
				label_2={"password"}
			></StreamForm>
		</div>
	);
};

const MapDispatchToProps = (dispatch) => {
	return {
		Signup: (formvalues) => dispatch(signUp(formvalues)),
	};
};

export default connect(null, MapDispatchToProps)(loginPage);
