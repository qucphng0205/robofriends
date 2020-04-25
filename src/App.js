import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			robots: [],
			inputField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then((users) => this.setState({robots: users}));
	} 

	onSearchChange = (event) => {
		this.setState({inputField: event.target.value});
	}

	render() {
		let filterRobots = this.state.robots.filter((robot) =>
			robot.name.toLowerCase().includes(this.state.inputField.toLowerCase())
		);
		return (
			<div className='tc'>
				<h1 style={{color: 'white'}} >RoboFriends</h1>
				<SearchBox searchChangeEvent = {this.onSearchChange}/>
				<Scroll>
					<CardList robots={filterRobots} />
				</Scroll>
			</div>
		);
	}
}
	
export default App;