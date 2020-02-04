import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends React.Component {
	renderInput({ input }) {
		return <input />;
	}
	render() {
		return (
			<form>
				<Field name="Title" component={this.renderInput} />
			</form>
		);
	}
}

export default reduxForm({ form: "StreamCreate" })(StreamCreate);
