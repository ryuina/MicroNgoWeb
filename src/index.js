import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import microNGOApp from './reducers';

import Home from './Home.js';
import MicroNgoMy from './My.js';
import Timeline from './Timeline.js';
import MakeNew from './MakeNew.js';
import Search from './Search.js';
import TopNav from './TopNav.js';
import SearchResult from './SearchResult.js';
import NGO from './NGO.js';

import 'semantic-ui-css/semantic.min.css';
import './css/index.css';



const store = createStore(microNGOApp);

class MicroNgoRoot extends React.Component {
	constructor() {
		super();
		this.state = {
			isMain:true,
			name:'',
			keyword:'',
			place:''
		};
	}

	onSubmit(keyword, place) {
		console.log(keyword);
		console.log(place);
		this.setState({
			keyword: keyword,
			place: place,

		}, () => console.log(this.state.keyword));
	}

	onMainChange() {
		this.setState({isMain: !this.state.isMain});
		console.log('d');
	}
	componentWillUpdate(nextProps) {
		console.log('will update');
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps.location);
	}
	render() {
		const { location } = this.props;
		console.log(this);

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
/*
{this.state.isMain ? <TopNav /> : null}
<Route exact path="/" component={()=> (<Search onSubmit={(keyword, place) => this.onSubmit(keyword, place)}/>)}/>
				<Route path="/my" component={MicroNgoMy}/>
				<Route path="/search" component={()=> (<SearchResult keyword={this.state.keyword} place={this.state.place} isMainFalse={() => this.onMainChange()}/>)}/>
				*/
ReactDOM.render(
	<MicroNgoRoot />, document.getElementById('root')
);