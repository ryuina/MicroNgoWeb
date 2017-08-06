import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Timeline from './Timeline.js';
import './index.css';


class MicroNgoRoot extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
				
				<Route exact path="/" component={Home}/>
				<Route path="/my" component={Home}/>
				<Route path="/group/:id" component={Timeline}/>
					
				<div className='footer'>~~Footer~~</div>

				</div>
			</BrowserRouter>
			);
	}
}

ReactDOM.render(
	<MicroNgoRoot />, document.getElementById('root')
);