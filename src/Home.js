import React from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import TopNav from './TopNav.js';
import MicroNgoMy from './My.js';
import Groups from './Group.js';
import Chat_Bot from './Chat.js';

class Search extends React.Component {

	handleInput() {
		this.props.onHandleInput(
			this.refs.keyword.value, 
		);

	}
	render() {

		return (
			<div className='searchBox'>
			<Chat_Bot string='참여하고 싶은 이슈가 있나요?' />

			<div className='inputKeyword'>

				<input type='text' placeholder='Input keywords here...' ref="keyword" /*onChange={this.handleChange}*/ />
			
				<div className='submitSearch'>
				<button onClick={() => this.handleInput()}>find</button>
				</div>
			</div>
			</div>
			);
	}
}




class MicroNgoBody extends React.Component {
	constructor() {
		super();
		this.state = {
			topic: '',
		}
	}

	onHandleInput(topic) {
		this.setState({topic: topic}, function (){

		});
		
	}

	render() {

		return (
			<div>
			<div className="logo"/>

			<div className="search">
				<Search topic={this.state.topic} onHandleInput={(topic) => this.onHandleInput(topic)}/>
			</div>
			<Groups />
			</div>
			);
	}
}


class Home extends React.Component {
	render() {
		return(
			<div>
				<TopNav />
				<Switch>
					<Route exact path="/" component={MicroNgoBody}/>
					<Route path="/my" component={MicroNgoMy}/>

				</Switch>
			</div>
			);
	}
}
export default Home;

