import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./Components/Streams/StreamCreate";
import StreamDelete from "./Components/Streams/StreamDelete";
import StreamEdit from "./Components/Streams/StreamEdit";
import StreamList from "./Components/Streams/StreamList";
import StreamShow from "./Components/Streams/StreamShow";
import Header from "./Components/Header";
import history from "../src/history";

function App() {
	return (
		<div>
			<Router history={history}>
				<Header></Header>
				<Switch>
					<Route path="/" exact component={StreamList}></Route>
					<Route path="/streams/new" component={StreamCreate}></Route>
					<Route
						path="/streams/edit/:id"
						component={StreamEdit}
					></Route>
					<Route
						path="/streams/delete/:id"
						component={StreamDelete}
					></Route>
					<Route path="/streams/:id" component={StreamShow}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
