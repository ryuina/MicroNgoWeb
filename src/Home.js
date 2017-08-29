import React from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import MicroNgoMy from './My.js';
import SearchResult from './SearchResult.js';
import TopNav from './TopNav.js';
import Login from './Login.js';
import Search from './Search.js';


class Home extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			keyword :'a', 
			place : 'b',
			fetching : true,
		};
		this.onChange = this.onChange.bind(this);
		this.onHandleChange = this.onHandleChange.bind(this);

	}

	onChange(keyword, place) {
		console.log(keyword);
		console.log(place);
		this.setState({
			keyword: keyword,
			place: place,
			fetching: false
		}, () => console.log(this.state.keyword));
	}

	onHandleChange() {
		console.log('onchange');
		this.props.onHandleChange();
	}
	componentWillUpdate() {
		console.log('willUpdate');
		console.log(this.state.keyword);
	}
	
	render() {
		return(
			<div>
				<TopNav />
				<Switch>
					<Route exact path='/' component={Search}/>
					<Route path="/my" component={MicroNgoMy}/>
					<Route path='/login' component={Login}/>
					<Route path='/search' component={() => (<SearchResult keyword={this.state.keyword} place={this.state.place}/>)}/>
				</Switch>
			</div>
		);
	}
/*
			<div>
				<TopNav />
				<Switch>
					<Route exact path="/" component={() => 
						(this.state.fetching ? 
							(<Search onSubmit={(keyword, place) => this.onChange(keyword, place)}/>) 
							: (<SearchResult keyword={this.state.keyword} place={this.state.place}/>))}/>
					<Route path="/my" component={MicroNgoMy}/>
					<Route path='/search' component={() => (<SearchResult keyword={this.state.keyword} place={this.state.place}/>)}/>
						
					
				</Switch>
			</div>

			);
	}
	
	render() {
		return (
			<div>
			<Search onSubmit={(keyword, place) => this.onChange(keyword, place)}/>
			</div>
			);
	}
*/
}
export default Home;

