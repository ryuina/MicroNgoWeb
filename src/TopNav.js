import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class TopNav extends React.Component {
	render() {
		return (
			<div className='topNav'>
				<div className='leftBox'>Mi NGO</div>
				<div className='rightBox'>
					<div className='doNav'>Do</div>
					<div className='searchNav'><img src={require("./img/search_white.png")}></img></div>
					<div className='profileNav'>Sign up</div>
				</div>
			</div>
		);

	}
}

export default TopNav;