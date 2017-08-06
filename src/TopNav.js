import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class TopNav extends React.Component {
	render() {
		return (
			<div className='topBox'>
			<Row style={{margin:"0px"}}>
			<Col xs className='navBox true' >Micro NGO</Col>
			<Col xs className='navBox'>My</Col>
			<Col xs className='navBox'>Do</Col>
			<Col xs className='navBox'>Setting</Col>
			</Row>
			</div>
		);

	}
}

export default TopNav;