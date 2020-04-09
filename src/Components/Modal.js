import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div className="ui dimmer modals modals visible active">
			<div className="ui standard modal visible active">
				<h2>Its A MOdal WOWWWWWWWWWWWWW</h2>
			</div>
		</div>,
		document.querySelector("#modal")
	);
};
export default Modal;
