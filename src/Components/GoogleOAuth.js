import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { SignInAction, SignOutAction } from "../Middleware/Action";
class GoogleAuth extends React.Component {
	// state = {
	// 	SignInStatus: null
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
					this.auth2 = window.gapi.auth2.getAuthInstance();
					this.onAuthChange();
					this.auth2.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		const status = this.auth2.isSignedIn.get();
		if (status) {
			this.props.UserSigned_In(this.auth2.currentUser.get().getId());
		} else {
			this.props.UserSigned_Out();
		}
		// this.setState({
		// 	SignInStatus: this.auth2.isSignedIn.get()
		// });
		// console.log(a, "Listenned");
	};
	SignInClicked = () => {
		this.auth2.signIn();
	};
	SignOutClicked = () => {
		this.auth2.signOut();
	};
	renderButton = () => {
		if (this.props.SignInStatus === null) {
			return (
				<div>
					<Button
						onClick={this.SignInClicked}
						className="ui blue google button"
					>
						<i className="google icon"></i>Sign In
					</Button>
					<Button
						onClick={this.SignOutClicked}
						className="ui red google button"
					>
						<i className="google icon"></i>
						Sign Out
					</Button>
				</div>
			);
		} else if (this.props.SignInStatus) {
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
		} else if (!this.props.SignInStatus) {
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
		return <div>{this.renderButton()}</div>;
	}
}
const mapStateToProps = state => {
	console.log("State =>", state.AuthReducer);
	return {
		SignInStatus: state.AuthReducer.SignInStatus
	};
};

const mapDispatchToProps = dispatch => {
	return {
		UserSigned_In: ID => dispatch(SignInAction(ID)),
		UserSigned_Out: msg => dispatch(SignOutAction())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
