import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchStreams } from "../../Middleware/Action";
import { Link } from "react-router-dom";

function StreamList(props) {
	console.log(props, "props");
	//const [streams] = useState(props.streams);
	useEffect(() => {
		props.GetStreams();
	}, []);
	const renderlist = () => {
		// if (props.streams.length > 0) {
		// 	console.log("streams in functiion", props.streams[1].Title);
		// }
		// return <div>Show List</div>;
		if (props.streams.length > 0) {
			return props.streams.map(item => {
				return (
					<div
						className="item"
						key={item.id}
						style={{
							border: "1px solid red",
							backgroundColor: "pink"
						}}
					>
						{render_Delete_Edit(item.UserID)}
						<i className="large middle aligned icon camera"></i>
						<div className="content">
							{item.Title}
							<div className="description">
								{item.Description}
							</div>
						</div>
					</div>
				);
			});
		} else return <div>Loading....</div>;
	};
	const render_Delete_Edit = userid => {
		console.log(props, userid, "props1");
		if (userid === props.user_id) {
			return (
				<div className="right floated content">
					<button className="ui button primary">Edit</button>
					<button className="ui button negative">Delete</button>
				</div>
			);
		}
	};
	const render_create_button = () => {
		if (props.SignInStatus) {
			return (
				<div style={{ textAlign: "right" }}>
					<Link to="/streams/new" className="ui button primary">
						Create Stream
					</Link>
				</div>
			);
		}
	};
	return (
		<div>
			<h2 style={{ color: "blue" }}>Streams</h2>
			<div className="ui celled list">{renderlist()}</div>
			{render_create_button()}
		</div>
	);
}

const MapStateToProps = state => {
	return {
		streams: Object.values(state.StreamsReducer.streams),
		user_id: state.AuthReducer.UserID,
		SignInStatus: state.AuthReducer.SignInStatus
	};
};
const MapDispatchToProps = dispatch => {
	return {
		GetStreams: () => dispatch(FetchStreams())
	};
};
export default connect(MapStateToProps, MapDispatchToProps)(StreamList);
