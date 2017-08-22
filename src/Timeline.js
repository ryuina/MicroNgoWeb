import React from 'react';
import Chat_Bot from './Chat.js';

import './css/timeline.css';


class Timeline extends React.Component {
	/*

	group timeline 받아오기

	*/

	render() {
		return (
			<div>
				<div className='topNav'>
					<span>Group Timeline</span>
					<img src={require("./img/\close.png")}></img>
				</div>
				<div className='problem'> 
					<div className='problemTitle'>
						<div className='fieldTitleBig'>Problem</div>
						<div className='fieldContentBig'>이런이런것이 문제입니다.</div>
					</div>
					<hr/>
					<div className='problemBg'>
						<div className='fieldTitle'>문제배경</div>
						<div className='fieldContent'>주말에 아무나 와서 차를 대기 때문이에요.</div>

					</div>
					<div className='problemSol'>
						<div className='fieldTitle'>해결방안</div>
						<div className='fieldContent'>구청에 도움을 요청해 봅시다.</div>
					</div>
					<hr />
					
				</div>
				<div className='action'>
					<div className='actionTop'>
						<div className='fieldTitleBig'>Action</div>
					</div>
					<div className='actionBoxs'>
						<div className='actionBox'>
							<span>
							<div className='actionTitle'>
								유성구청에 전화하기
							</div>
							<div className='actionDue'>
								~ 17/08/10
							</div>
							<div className='actionIcon'>
								<img />
							</div>
							<div className='actionGroup'>
								카이스트 주차장 해결
							</div>
							</span>
						</div>
						<div className='blank' />
						<div className='actionBox'>

						</div>
					</div>
				</div>
				



				<div className='problemChat'>
					<div className='rightChat'>
						<Chat_Bot string='이래서 문제인겁니다~' />
					</div>
					<div className='enterChat'>들어가기</div>
				</div>
				
			</div>

			);
	}
}

export default Timeline;