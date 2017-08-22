
import React from 'react';
import Search from './Search.js';
import { browserHistory } from 'react-router'

class MakeNew extends React.Component {
	render() {
		return (
			<div>
				<div className='topNav'>
					<div className='leftBox'>New NGO</div>
					<div className='rightBox'>
						<div className='closeButton'><img src={require("./img/close_white.png")}></img></div>
					</div>
				</div>



				<div className='searchBox'>
				<div className='searchBot'>
					<img src={require("./img/guide.png")}></img>
					<div className='searchString'>
						<div className='stringMain'>Make a new NGO!</div>
						<div className='stringSub'>Select place<br/>and organize the problem</div>
					</div>
				</div>

				<div className='searchInput'>
				<div className='inputPlace' >
					<input type='text' placeholder='SELECT PLACE' ref="place" value={this.props.location.query.place} /*onChange={this.handleChange}*/ />
				</div>
				<div  className='inputKeyword'>
					<input type='text' placeholder='ENTER PROBLEM TITLE' ref="keyword" /*onChange={this.handleChange}*/ />
				</div>
				</div>
				<div className='submitSearch'>
					<button >Complete</button>
				</div>
				
			</div>
			</div>
		);
	}
}

export default MakeNew;