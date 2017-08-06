import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


class GroupInfo extends React.Component {
	constructor() {
		super();
		this.state = {
			groupTopic: 'Topic',
			groupSubject: 'Subject',
			groupScope: 'Daejeon',
			peopleNum: 30,
		}
	}

	render() {
		var link = "/group/"+this.props.info.id;
		return (
			<div className='groupBox'>
			<Link to={link}>
			<div>
				<span className='groupTitle'>
					<span className='groupTopic'>{this.props.info.groupTopic}</span>
					<span className='groupSubject'> - {this.props.info.groupSubject}</span>
				</span>
				<span className='groupNum'>{this.props.info.peopleNum}</span>
			</div>
			<span className='groupScope'>{this.props.info.groupScope}</span>
			</Link>
			</div>

			);
		
	}

}


class Groups extends React.Component {
	render() {
		const list = [{
				id: 1,
				groupTopic: '~~가문제입니다',
				groupSubject: 'Subject',
				groupScope: 'Daejeon',
				peopleNum: 10,
			},
			{
				id: 2,
				groupTopic: 'Topic',
				groupSubject: 'Subject',
				groupScope: 'Daejeon',
				peopleNum: 20,
			},
			{
				id: 3,
				groupTopic: 'Topic',
				groupSubject: 'Subject',
				groupScope: 'Daejeon',
				peopleNum: 30,
			}];
			const groupItems = list.map((info) => 
				<GroupInfo info={info}/>
				);
		return(
			<div className="active" > 
				<span className='title'>Top active groups</span>
				{groupItems}
				<div className="buttonMore">
					<button >more</button>
				</div>

			</div>
		);
	}
}

export default Groups;
