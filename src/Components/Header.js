import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
	state = { activeItem: "home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	render() {
		return (
			<div className="ui secondary pointing menu">
				<Link to="/" className="active item">
					StreamyTV
				</Link>
				<div className="right menu">
					<div className="item">
						<div className="ui icon input">
							<Link to="/streams/new" className="active item">
								ALL Streams
							</Link>
						</div>
					</div>
					<Link to="/" className="item">
						Logout
					</Link>
				</div>
			</div>
		);
	}
}
