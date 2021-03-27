import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

// const App = () => {
// 	return(
// 		<div className="tc">
// 			<h1>Robofriends</h1>
// 			<SearchBox />
// 			<CardList robots={robots} />
// 		</div>


// 	);
// }
class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: '', 
		}
	}

	onSearchChange = (event) =>  {
		this.setState({ searchfield: event.target.value });
		console.log(event.target.value);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));
	}

	render() {
		//Este também funciona, porque nunca usamos o state de robos, usamos sempre o 
		//filteredRobot.
		// const filteredRobots = robots.filter(robot => {
		// 	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

		// })
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

		})
		if (this.state.robots.length === 0) {
			return(
				<div className="tc">
					<h1 className="f1">Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<h1>Loading</h1>
				</div>
			);
		} else {
			return(
				<div className="tc">
					<h1 className="f1">Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);	
		}
		
	}
}

export default App;

