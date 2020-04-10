import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
class StreamForm extends React.Component {
	renderErr = ({ touched, error }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	};
	renderInput = ({ input, label, meta }) => {
		//console.log("meta", meta);
		let className = `field ${meta.error && meta.touched ? "error" : ""}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderErr(meta)}
			</div>
		);
	};
	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.props.onSubmit)}
				className="ui form error"
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
const validate = (formvalues) => {
	const errors = {};
	if (!formvalues.Title) {
		errors.Title = "you must enter a title";
	}
	if (!formvalues.Description) {
		errors.Description = "you must enter a description";
	}
	return errors;
};

export default reduxForm({ form: "StreamCreate", validate })(StreamForm);
