import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchStream, EditStream } from "../../Middleware/Action";
import StreamForm from "./StreamForm";
import _ from "lodash";

function StreamEdit(props) {
	console.log("Result", props);
	useEffect(() => {
		props.fetchStream(props.match.params.id);
	}, []);
	const onSubmit = (submitProps) => {
		console.log("SUbmittttttttttt");
		props.EditStream(props.match.params.id, submitProps);
	};
	if (props.streams) {
		return (
			<div>
				<h2>StreamEdit</h2>
				<StreamForm
					initialValues={_.pick(props.streams, [
						"Title",
						"Description",
					])}
					onSubmit={onSubmit}
					button_1={"Submit"}
					label_1={"Title"}
					label_2={"Description"}
				></StreamForm>
			</div>
		);
	} else return <div>Loading...........</div>;
}

const MapStateToProps = (state, ownProps) => {
	return {
		streams: state.StreamsReducer.streams[ownProps.match.params.id],
	};
};
const MapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchStream: (id) => dispatch(FetchStream(id)),
		EditStream: (id, formvalues) => dispatch(EditStream(id, formvalues)),
	};
};
export default connect(MapStateToProps, MapDispatchToProps)(StreamEdit);
