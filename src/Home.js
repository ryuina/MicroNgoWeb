import React from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import TopNav from './TopNav.js';
import MicroNgoMy from './My.js';
import Chat_Bot from './Chat.js';
import SearchResult from './SearchResult.js';

import Search from './Search.js';


class MicroNgoBody extends React.Component {
	
	render() {

		return (
			<div>

			<div className="search">
				<Search/>
			</div>
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
					<Route path="/search" component={SearchResult}/>
				</Switch>
			</div>
			);
	}
}
export default Home;

