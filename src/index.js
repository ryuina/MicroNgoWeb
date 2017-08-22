import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Timeline from './Timeline.js';
import MakeNew from './MakeNew.js';
import './css/index.css';


class MicroNgoRoot extends React.Component {
	constructor() {
		super();
		this.state = {
	
		}
	}

	onHandleChange() {

	}
	render() {
		return (
			<BrowserRouter>
				<div>
				
				<Route exact path="/" component={Home}/>
				<Route path="/my" component={Home}/>
				<Route path="/search" component={Home}/>
				<Route exact path="/groups/:id" component={Timeline}/>
				<Route path='/new' component={MakeNew}/>
				<style>
@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans:400,600|Slabo+27px');			</style>
				</div>

			</BrowserRouter>

			
			);
	}
}

ReactDOM.render(
	<MicroNgoRoot />, document.getElementById('root')
);