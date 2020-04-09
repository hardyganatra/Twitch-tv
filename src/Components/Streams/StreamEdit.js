import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchStream } from "../../Middleware/Action";

function StreamEdit(props) {
	console.log("Result", props);
	useEffect(() => {
		props.fetchStream(props.match.params.id);
	}, []);
	if (props.streams) {
		return <div>{props.streams.Title}</div>;
	} else return <div>Loading</div>;
}

const MapStateToProps = (state, ownProps) => {
	return {
		streams: state.StreamsReducer.streams[ownProps.match.params.id],
	};
};
const MapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchStream: (id) => dispatch(FetchStream(id)),
	};
};
export default connect(MapStateToProps, MapDispatchToProps)(StreamEdit);
