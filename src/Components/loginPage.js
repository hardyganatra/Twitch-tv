import React from "react";
import StreamForm from "../Components/Streams/StreamForm";

export default function loginPage() {
	const onSubmit = (submitProps) => {
		// this.props.CreateStream(submitProps);
		console.log("LoginDetails", submitProps);
	};
	return (
		<div>
			<StreamForm
				onSubmit={onSubmit}
				button_1={"Signup"}
				button_2={"Login"}
				label_1={"Username"}
				label_2={"password"}
			></StreamForm>
		</div>
	);
}
