import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchStreams } from "../../Middleware/Action";
import { Link } from "react-router-dom";
import StreamDelete from "./StreamDelete";
import history from "../../history";

function StreamList(props) {
	console.log(props, "props");
	//const [streams] = useState(props.streams);
	useEffect(() => {
		props.GetStreams();
	}, []);
	const renderlist = () => {
		if (props.streams.length > 0) {
			return props.streams.map((item) => {
				return (
					<div
						className="item"
						key={item.id}
						style={{
							border: "1px solid red",
							backgroundColor: "#b77f89",
							width: "50%",
							margin: "0 auto ",
						}}
					>
						{render_Delete_Edit(item)}
						<i className="large middle aligned icon camera"></i>
						<div
							onClick={() => {
								history.push(`/streams/${item.id}`);
							}}
							className="content"
							style={{ color: "white" }}
						>
							{item.Title}
							<div
								className="description"
								style={{ color: "white" }}
							>
								{item.Description}
							</div>
						</div>
					</div>
				);
			});
		} else return <div>Loading....</div>;
	};
	const render_Delete_Edit = (userdata) => {
		if (userdata.UserID === props.Current_user_id) {
			return (
				<div className="right floated content">
					<Link
						to={`/streams/edit/${userdata.id}`}
						className="ui button primary"
					>
						Edit
					</Link>
					<Link
						to={`/streams/delete/${userdata.id}`}
						className="ui button negative"
					>
						Delete
					</Link>
				</div>
			);
		}
	};
	const render_create_button = () => {
		if (props.SignInStatus) {
			return (
				<div style={{ textAlign: "center" }}>
					<Link to="/streams/new" className="ui button primary">
						Create Stream
					</Link>
				</div>
			);
		}
	};
	return (
		<div style={{ backgroundColor: "#ffc30094" }}>
			<h2 style={{ color: "blue" }}>Streams</h2>
			<div className="ui celled list">{renderlist()}</div>
			{render_create_button()}
		</div>
	);
}

const MapStateToProps = (state) => {
	console.log("List", Object.values(state.StreamsReducer.streams));
	return {
		streams: Object.values(state.StreamsReducer.streams),
		Current_user_id: state.AuthReducer.UserID,
		SignInStatus: state.AuthReducer.SignInStatus,
	};
};
const MapDispatchToProps = (dispatch) => {
	return {
		GetStreams: () => dispatch(FetchStreams()),
	};
};
export default connect(MapStateToProps, MapDispatchToProps)(StreamList);
