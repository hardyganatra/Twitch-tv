import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import {
	SignInClickedAction,
	SignOutClickedAction
} from "../Middleware/Action";
class GoogleAuth extends React.Component {
	state = {
		SignInStatus: null
	};
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"1061346940851-of9s9hvjethpf4192lnmai0bltoos3so.apps.googleusercontent.com",
					scope: "email"
				})
				.then(() => {
					this.auth2 = window.gapi.auth2.getAuthInstance();
					this.onAuthChange();
					this.auth2.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		this.setState({
			SignInStatus: this.auth2.isSignedIn.get()
		});
	};
	SignInClicked = () => {
		this.auth2.signIn();
	};
	SignOutClicked = () => {
		this.auth2.signOut();
	};
	renderButton = () => {
		if (this.state.SignInStatus === null) {
			return null;
		} else if (this.state.SignInStatus) {
			//if signed in show sign out button and handle signout event
			return (
				<Button
					onClick={this.SignOutClicked}
					className="ui red google button"
				>
					<i className="google icon"></i>
					Sign Out
				</Button>
			);
		} else if (!this.state.SignInStatus) {
			//if signed out show sign in button and handle signin event
			return (
				<Button
					onClick={this.SignInClicked}
					className="ui blue google button"
				>
					<i className="google icon"></i>Sign In
				</Button>
			);
		}
	};
	render() {
		console.log("-------------Render Called-----------------");
		console.log("State", this.state);
		return (
			<div>
				{this.renderButton()}
				{/* <span>{this.state.SignInStatus}</span>
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
				</Button> */}
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
