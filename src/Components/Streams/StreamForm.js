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
		console.log("form", this.props);
		return (
			<form
				onSubmit={this.props.handleSubmit(this.props.onSubmit)}
				className="ui form error"
			>
				<Field
					name="Title"
					component={this.renderInput}
					label={this.props.label_1}
				/>
				<Field
					name="Description"
					component={this.renderInput}
					label={this.props.label_2}
				/>
				<button className="ui button primary">
					{this.props.button_1}
				</button>
				{this.props.button_2 ? (
					<button className="ui button primary">
						{this.props.button_2}
					</button>
				) : null}
			</form>
		);
	}
}
const validate = (formvalues) => {
	const errors = {};
	if (!formvalues.Title) {
		errors.Title = "you must enter a value";
	}
	if (!formvalues.Description) {
		errors.Description = `you must enter a value`;
	}
	return errors;
};

export default reduxForm({ form: "StreamCreate", validate })(StreamForm);
