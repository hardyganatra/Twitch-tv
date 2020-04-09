import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import {
	CreateStream,
	FetchStream,
	FetchStreams,
	EditStream,
	DeleteStream,
} from "../../Middleware/Action";
import StreamForm from "./StreamForm";
class StreamCreate extends React.Component {
	onSubmit = (submitProps) => {
		//console.log("submitProps", submitProps);
		this.props.CreateStream(submitProps);
		//this.props.FetchStreams();
		//this.props.FetchStream("1");
		//this.props.EditStream("1", submitProps);
		//this.props.DeleteStream("1");
	};
	render() {
		return (
			<div>
				<h2>StreamCreate</h2>
				<StreamForm onSubmit={this.onSubmit}></StreamForm>
			</div>
		);
	}
}

const MapDispatchToProps = (dispatch) => {
	return {
		CreateStream: (formvalues) => dispatch(CreateStream(formvalues)),
		// FetchStream: (id) => dispatch(FetchStream(id)),
		// FetchStreams: (id) => dispatch(FetchStreams()),
		// EditStream: (id, formvalues) => dispatch(EditStream(id, formvalues)),
		// DeleteStream: (id) => dispatch(DeleteStream(id)),
	};
};

const WrappedForm = reduxForm({ form: "StreamCreate" })(StreamCreate);
export default connect(null, MapDispatchToProps)(WrappedForm);
