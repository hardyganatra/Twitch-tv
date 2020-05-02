import React, { useEffect } from "react";
import Modal from "./../Modal";
import history from "../../history";
import { DeleteStream, FetchStream } from "../../Middleware/Action";
import { connect } from "react-redux";

const StreamDelete = (props) => {
	//;
	useEffect(() => {
		props.fetchStream(props.match.params.id);
		//;
	}, []);
	const actions = (
		<React.Fragment>
			<div className="actions">
				<button
					onClick={() => {
						handleDeleteevent();
					}}
					className="ui primary button"
				>
					Delete
				</button>
				<button
					onClick={() => {
						handleCancelevent();
					}}
					className="ui button"
				>
					Cancel
				</button>
			</div>
			;
		</React.Fragment>
	);
	const handleDeleteevent = () => {
		props.DeleteStream(props.match.params.id);
	};
	const handleCancelevent = () => {
		history.push("/");
	};
	const onDismiss = () => {
		history.push("/");
	};
	const renderContent = () => {
		if (props.streams) {
			return ` Are you Sure You Want to delete this Stream with Title : ${props.streams.Title}`;
		} else {
			return ` Are you Sure You Want to delete this Stream`;
		}
	};
	console.log("Delete-fetch", props.streams);
	return (
		<Modal
			title={"Delete Stream"}
			//content={"Are you Sure You Want to delete this Stream"}
			content={renderContent()}
			actions={actions}
			onDismiss={onDismiss}
		></Modal>
	);
};

const MapStateToProps = (state, ownProps) => {
	return {
		streams: state.StreamsReducer.streams[ownProps.match.params.id],
	};
};
const MapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchStream: (id) => dispatch(FetchStream(id)),
		DeleteStream: (id) => dispatch(DeleteStream(id)),
	};
};
export default connect(MapStateToProps, MapDispatchToProps)(StreamDelete);
