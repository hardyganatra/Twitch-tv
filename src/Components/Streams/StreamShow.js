import React, { useState } from "react";
import { FetchStream } from "../../Middleware/Action";
import { connect } from "react-redux";

const StreamShow = (props) => {
	console.log("Show", props);
	useState(() => {
		props.fetchStream(props.match.params.id);
	}, []);
	if (props.streams) {
		return (
			<>
				<h2>{props.streams.Title}</h2>
				<h2>{props.streams.Description}</h2>
			</>
		);
	} else return <div>Loading........</div>;
};

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
export default connect(MapStateToProps, MapDispatchToProps)(StreamShow);
