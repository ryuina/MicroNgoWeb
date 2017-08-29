import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class TopNav extends React.Component {
	render() {

		return (
			<div className='topNav'>
				<div className='leftBox'>Mi NGO</div>
				<div className='rightBox'>
					<div className='doNav'>Do</div>
					<div className='searchNav'><img src={require("./img/search_white.png")}></img></div>
					<Link to='/login'>
					<div className='profileNav white'>{this.props.loggedIn ? this.props.name :'Sign in'}</div>
					</Link>
				</div>
			</div>
		);

	}
}

let mapStateToProps = (state) => {
    return {
    	loggedIn: state.loginStatus.login,
        name: state.loginStatus.memberStatus.Name,
        
    };
}

TopNav = connect(mapStateToProps)(TopNav);

export default TopNav;