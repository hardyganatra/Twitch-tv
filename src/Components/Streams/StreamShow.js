import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FetchStreams } from "../../Middleware/Action";

function StreamShow(props) {
	//const [streams] = useState(props.streams);
	useEffect(() => {
		props.GetStreams();
	}, []);
	const renderlist = () => {
		// if (props.streams.length > 0) {
		// 	console.log("streams in functiion", props.streams[1].Title);
		// }
		// return <div>Show List</div>;
		console.log("streams in functiion", props.streams);
		if (props.streams.length > 0) {
			return props.streams.map(item => {
				console.log("object", item);
				return <div key={item.id}>{item.Title}</div>;
			});
		} else return <div>Loading....</div>;
	};

	return <div>{renderlist()}</div>;
}

const MapStateToProps = state => {
	console.log("mp", Object.values(state.StreamsReducer.streams));
	return {
		streams: Object.values(state.StreamsReducer.streams)
	};
};
const MapDispatchToProps = dispatch => {
	return {
		GetStreams: () => dispatch(FetchStreams())
	};
};
export default connect(MapStateToProps, MapDispatchToProps)(StreamShow);
