import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './css/groups.css';


class NGOInfo extends React.Component {
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
		var link = "/groups/"+this.props.ngo.id;
		return (
			
			<Link to={link}>
			<div className='NGOBox'>
			<div className='NGOTitle'>
				{this.props.ngo.name}
			</div>
			<div className='NGOPlace'>KAIST</div>
			</div>
			</Link>
			

			);
		
	}

}

const Groups = ({ngos}) => {
	ngos.map((info) => console.log(info));
		const ngoList = ngos.map((ngo) => 
			<NGOInfo ngo={ngo}/>
			);
		return(
			<div className="NGOs" > 
				{ngoList}

			</div>
		);
}


export default Groups;
