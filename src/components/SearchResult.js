import React from 'react';
import Groups from './Group.js';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button, Label } from 'semantic-ui-react';
import '../css/searchResult.css';
class SearchResult extends React.Component {

	constructor(props) {
        super();
        this.state = {
        	ngos : [],
        	willMount: true,
        }

    }
    onClick() {
    	console.log('click');
    	//this.props.isMainFalse();

    }
	fetchNGOInfo = async () => {
		
        const ngos = await axios.get('http://45.32.37.119:8000/ngo'); //example
        this.setState({ ngos : ngos.data, fetching: false });
    }
    /*
    componentWillMount() {
    	console.log(this.state);
    	if (this.state.willMount) {
    		this.setState({willMount: false, keyword : this.props.location.query.keyword, place: this.props.location.query.place})

    	}
    }
*/

	componentDidMount() {
        this.fetchNGOInfo();
    }

	render() {
		console.log(this.props);
		return (
			<div className='searchResult'>
				<div className='searchInputs'>
					<img src={require("../img/guide.png")}></img>
					<div className='resultString'>
						<div className='stringIntro'>Here are NGOs talking about</div>
						<div className='stringInputs'>
							<div className='keyword'>keyword: {this.props.keyword}</div>
							<div className='place'>place: {this.props.place}</div>
						</div>
					</div>
				</div>
				<Groups ngos = {this.state.ngos}/>
				<div className='makeNew'>
					<Label pointing='right' size='big' as='a' basic color='blue'>새 그룹 만들기</Label>

					<Link to='/new' >
  						<Button circular icon='plus' basic color='blue' size='big' onClick={()=> this.onClick()}/>

					</Link>
				</div>
			</div>
			);
	}

}

let mapStateToProps = (state) => {
    return {
        keyword: state.inputs.keyword,
        place: state.inputs.place
    };
}

SearchResult = connect(mapStateToProps)(SearchResult);

export default SearchResult;