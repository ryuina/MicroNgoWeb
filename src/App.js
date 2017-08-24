import React from 'react';
import TopNav from './TopNav.js';

class App extends React.Component {
	render() {
		return(
			<div>
				<TopNav />
				{this.props.children}
			</div>
			);
	}
}
export default App;