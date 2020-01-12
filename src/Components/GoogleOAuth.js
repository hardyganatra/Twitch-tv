import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import {
	SignInClickedAction,
	SignOutClickedAction
} from "../Middleware/Action";
class GoogleAuth extends React.Component {
	// state = {
	// 	SignInStatus: ""
	// };
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"1061346940851-of9s9hvjethpf4192lnmai0bltoos3so.apps.googleusercontent.com",
					scope: "email"
				})
				.then(() => {
					// const Auth2 = window.gapi.auth2.getAuthInstance();
					// const signInstatus = Auth2.isSignedIn.get();
					// var RenderMessage = signInstatus
					// 	? "User is Signed In"
					// 	: "User Signed Out";
					// this.setState({
					// 	SignInStatus: RenderMessage
					// });
					// console.log(RenderMessage);
				});
		});
	}
	SignInClicked = () => {
		const Auth2 = window.gapi.auth2.getAuthInstance();
		Auth2.signIn();
		var RenderMessage = "User is Signed In";
		// this.setState({
		// 	SignInStatus: RenderMessage
		// });
		this.props.SignInClicked(RenderMessage);
	};
	SignOutClicked = () => {
		const Auth2 = window.gapi.auth2.getAuthInstance();
		Auth2.signOut();
		var RenderMessage = "User Signed Out";
		// this.setState({
		// 	SignInStatus: RenderMessage
		// });
		this.props.SignOutClicked(RenderMessage);
	};

	render() {
		console.log("-------------Render Called-----------------");
		return (
			<div>
				{/* <span>{this.state.SignInStatus}</span> */}
				{this.props.SignInStatus !== "User is Signed In" ? (
					<Button
						className="ui blue google button"
						onClick={this.SignInClicked}
					>
						<i className="google icon"></i>
						Sign IN
					</Button>
				) : null}

				<Button
					className="ui red google button"
					onClick={this.SignOutClicked}
				>
					<i className="google icon"></i>
					Sign Out
				</Button>
			</div>
		);
	}
}
const mapStateToProps = state => {
	console.log("State =>", state.AuthReducer);
	return {
		SignInStatus: state.AuthReducer.SignInStatus,
		SignOutStatus: state.AuthReducer.SignOutStatus
	};
};

const mapDispatchToProps = dispatch => {
	return {
		SignInClicked: msg => dispatch(SignInClickedAction(msg)),
		SignOutClicked: msg => dispatch(SignOutClickedAction(msg))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
