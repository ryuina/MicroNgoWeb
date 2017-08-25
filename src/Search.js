import React from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setInputs } from './actions';

class Search extends React.Component {

	constructor() {
		super();
		this.state = {
			
			keyword: '',
			place: ''
		}
		this.onPlaceInput = this.onPlaceInput.bind(this);
		this.onKeywordInput = this.onKeywordInput.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}

	onPlaceInput() {
		this.setState({place: this.refs.place.value});
		
	}
	onKeywordInput() {
		this.setState({keyword: this.refs.keyword.value});
	}
	onSubmit() {
		console.log('onSubmit');
		this.props.onSubmit(this.state.keyword, this.state.place);
		
	}
	render() {
		var searchLink = '/search?'+'keyword='+this.state.keyword+'&place='+this.state.place;

		return (

			<div className='searchBox'>
				<div className='searchBot'>
					<img src={require("./img/guide.png")}></img>
					<div className='searchString'>
						<div className='stringMain'>What's your problem?</div>
						<div className='stringSub'>Find a NGO<br/>and Solve it together!</div>
					</div>
				</div>

				<div className='searchInput'>
				<div className='inputPlace' >
					<input type='text' placeholder='SELECT PLACE' ref="place" onChange={this.onPlaceInput} />
				</div>
				<div  className='inputKeyword'>
					<input type='text' placeholder='INSERT KEYWORD' ref="keyword" onChange={this.onKeywordInput}/>
				</div>
				</div>
				<Link to='/search'>
				<div className='submitSearch' onClick={() =>this.onSubmit()}>
					NGO Search
				</div>


				
				</Link>
				
			</div>
			);
	}
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (keyword, place) => dispatch(setInputs(keyword, place))
    };
}
				//<Link to={{ pathname: {searchLink}, query: { keyword: this.state.keyword, place: this.state.place } }}>
Search = connect(undefined, mapDispatchToProps)(Search);

export default Search;