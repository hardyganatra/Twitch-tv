import React from "react";
import StreamForm from "../Components/Streams/StreamForm";
import history from "../history";

export default function loginPage() {
	const onSubmit = (submitProps) => {
		// this.props.CreateStream(submitProps);
		history.push("/streamlist");
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
}
