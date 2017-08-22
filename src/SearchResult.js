import React from 'react';
import Groups from './Group.js';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import './css/searchResult.css';
import './css/chat.css';
class SearchResult extends React.Component {

	constructor(props) {
        super();
        this.state = {
        	ngos : [],
        	fetching: false,
        }

    }
	fetchNGOInfo = async () => {
		this.setState({
            fetching: true // requesting..
        });
        const ngos = await axios.get('http://45.32.37.119:8000/ngo'); //example
        this.setState({ ngos : ngos.data, fetching: false });
    }

	componentDidMount() {
        this.fetchNGOInfo();
    }

	render() {
		return (
			<div className='searchResult'>
				<div className='searchInputs'>
					<img src={require("./img/guide.png")}></img>
					<div className='resultString'>
						<div className='stringIntro'>Here are NGOs talking about</div>
						<div className='stringInputs'>
							<div className='keyword'>keyword: {this.props.location.query.keyword}</div>
							<div className='place'>place: {this.props.location.query.place}</div>
						</div>
					</div>
				</div>
				<Groups ngos = {this.state.ngos}/>
				<div className='makeNew'>
					<div className='makeNewString'>
						Wanna make new?
					</div>
					<Link to={{ pathname: '/new', query: { place: this.props.location.query.place } }}>
					<div className='makeNewButton'>
						<img src={require("./img/add.png")}></img>

					</div>
					</Link>
				</div>
			</div>
			);
	}

}

export default SearchResult;