import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import {
	CreateStream,
	FetchStream,
	FetchStreams,
	EditStream,
	DeleteStream
} from "../../Middleware/Action";
class StreamCreate extends React.Component {
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
	onSubmit = submitProps => {
		//console.log("submitProps", submitProps);
		this.props.CreateStream(submitProps);
		//this.props.FetchStreams();
		//this.props.FetchStream("1");
		//this.props.EditStream("1", submitProps);
		//this.props.DeleteStream("1");
	};
	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
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
const validate = formvalues => {
	const errors = {};
	if (!formvalues.Title) {
		errors.Title = "you must enter a title";
	}
	if (!formvalues.Description) {
		errors.Description = "you must enter a description";
	}
	return errors;
};

const MapDispatchToProps = dispatch => {
	return {
		CreateStream: formvalues => dispatch(CreateStream(formvalues)),
		FetchStream: id => dispatch(FetchStream(id)),
		FetchStreams: id => dispatch(FetchStreams()),
		EditStream: (id, formvalues) => dispatch(EditStream(id, formvalues)),
		DeleteStream: id => dispatch(DeleteStream(id))
	};
};

const WrappedForm = reduxForm({ form: "StreamCreate", validate })(StreamCreate);
export default connect(null, MapDispatchToProps)(WrappedForm);
