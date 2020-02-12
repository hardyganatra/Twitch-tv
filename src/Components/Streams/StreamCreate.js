import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends React.Component {
	renderInput({ input, label }) {
		return (
			<div>
				<label>{label}</label>
				<input {...input} />
			</div>
		);
	}

	onSubmit(submitProps) {
		console.log("submitProps", submitProps);
	}
	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form"
			>
				<Field
					name="Title"
					component={this.renderInput}
					label="title"
				/>
				<Field
					name="Description"
					component={this.renderInput}
					label="Description"
				/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}
const validate = formvalues => {
	const errors = {};
	if (!formvalues.title) {
		errors.title = "you must enter a title";
	} else if (!formvalues.description) {
		errors.description = "you must enter a description";
	}
};
export default reduxForm({ form: "StreamCreate" })(StreamCreate);
