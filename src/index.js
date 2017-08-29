import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';

import microNGOApp from './reducers';

import Home from './Home.js';
import MakeNew from './MakeNew.js';
import NGO from './NGO.js';

import 'semantic-ui-css/semantic.min.css';
import './css/index.css';

const store = createStore(microNGOApp);

class MicroNgoRoot extends React.Component {

	render() {


		return (
			<Provider store = {store}>
			<BrowserRouter>

				<div>
				
				<Switch>
					<Route exact path='/new' component={MakeNew}/>
					<Route exact path="/groups/:id" component={NGO}/>
					<Route path='/' component={Home}/>
				</Switch>
				<style>
@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans:400,600|Slabo+27px');			</style>
				</div>
			</BrowserRouter>
			</Provider>
			
			);
	}
}

ReactDOM.render(
	<MicroNgoRoot />, document.getElementById('root')
);