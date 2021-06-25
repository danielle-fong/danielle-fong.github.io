import "./App.css";
import Homepage from "./website/pages/Homepage";
import Projects from "./website/pages/Projects";
import Other from "./website/pages/Other";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./website/Nav";

const App = () => {
	return (
		<>
			<Router>
				<Nav />
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/how-it-works" exact component={Projects} />
					<Route path="/about" exact component={Other} />
				</Switch>
			</Router>
		</>
	);
};

export default App;

