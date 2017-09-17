
import React from 'react';
import Search from './Search.js';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Button,Icon,Checkbox, Form } from 'semantic-ui-react';



class MakeNew extends React.Component {

	onClose() {
		this.props.history.goBack();
	}
	render() {
		console.log('new');
		return (
			<div>
				<div className='topNav'>
					<div className='leftBox'>New NGO</div>
					<div className='rightBox'>
						<Icon name='close' size='large' onClick={()=>this.onClose()} />
					</div>
				</div>



				<div className='searchBox'>
				<div className='searchBot'>
					<img src={require("../img/guide.png")}></img>
					<div className='searchString'>
						<div className='stringMain'>Make a new NGO!</div>
						<div className='stringSub'>Select place<br/>and organize the problem</div>
					</div>
				</div>


				<Form>
				    <Form.Field>
				      <label>장소</label>
				      <input placeholder='장소를 선택하세요.'  defaultValue={this.props.place}/>
				    </Form.Field>
				    <Form.Field>
				      <label>NGO 제목</label>
				      <input placeholder='문제를 입력하세요.' />
				    </Form.Field>

				    <Button type='submit'>NGO 만들기</Button>
				  </Form>
				
				
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

MakeNew = connect(mapStateToProps)(MakeNew);

export default MakeNew;