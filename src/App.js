import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamCreate from "./Components/Streams/StreamCreate";
import StreamDelete from "./Components/Streams/StreamDelete";
import StreamEdit from "./Components/Streams/StreamEdit";
import StreamList from "./Components/Streams/StreamList";
import StreamShow from "./Components/Streams/StreamShow";
import Header from "./Components/Header";

function App() {
	return (
		<div>
			<Router>
				<Header></Header>
				<Route path="/" exact component={StreamList}></Route>
				<Route path="/streams/new" component={StreamCreate}></Route>
				<Route path="/streams/edit" component={StreamEdit}></Route>
				<Route path="/streams/delete" component={StreamDelete}></Route>
				<Route path="/streams/show" component={StreamShow}></Route>
			</Router>
		</div>
	);
}

export default App;
