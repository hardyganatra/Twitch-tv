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
		this.props.CreateStream(submitProps);
	};
	render() {
		return (
			<div>
				<h2>StreamCreate</h2>
				<StreamForm
					onSubmit={this.onSubmit}
					button_1={"Submit"}
					label_1={"Title"}
					label_2={"Description"}
				></StreamForm>
			</div>
		);
	}
}

const MapDispatchToProps = (dispatch) => {
	return {
		CreateStream: (formvalues) => dispatch(CreateStream(formvalues)),
	};
};

const WrappedForm = reduxForm({ form: "StreamCreate" })(StreamCreate);
export default connect(null, MapDispatchToProps)(WrappedForm);
