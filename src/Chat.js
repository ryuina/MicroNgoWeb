import React from 'react';
import './css/chat.css';

class Chat_Bot extends React.Component {

	render() {
		return(
			<div className='guideBot'>
				<img src={require("./img/guide.png")}></img>
				<div className='chat'><div className='userName'>Bot</div> 
				<div className='chatContent'>{this.props.string}</div>
				</div>
			</div>
		);
	}

}

export default Chat_Bot;