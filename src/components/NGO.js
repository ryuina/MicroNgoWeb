import React from 'react';
import { Button,Icon, Header, Card, List, Segment, Label } from 'semantic-ui-react';

class NGO extends React.Component {
	render() {
		var isFav = true;
		return (
			<div>
				<div className='topNav'>
					<div className='leftBox'>
						카이스트 주차장 해결
					</div>
					<div className='rightBox'>
						
						<Icon name='empty star' size='large' />
						
						<Icon name='close' size='large' onClick={()=>this.onClose()} />

					</div>
				</div>
				<div className='NGOContents'>
				<Header as='h4' attached='top' color='blue'>
				Problem
				</Header>
				<Segment attached>
    				<Header as='h2'>
    				카이스트 주차장 해결
    				<Header.Subheader>
    					Kaist
    				</Header.Subheader>
    				</Header>

    				<List divided relaxed bulleted>
    					<List.Item>주말에 아무나 차를 대요</List.Item>
    					<List.Item>자리가 부족합니다.</List.Item>
    					<List.Item>구청에 도움을 요청해 봅시다.</List.Item>
    				</List>
    				<Button basic color='green'>채팅 참여</Button>
				</Segment>

				
				<Segment.Group>
				<Header as='h4' attached='top' color='violet'>
				Action
				</Header>
				<Segment attached>
    				<Header as='h2'>
    				구청에 전화하기 
    				
    				</Header>

    				<List divided relaxed bulleted>
    					<List.Item>내용1</List.Item>
    					<List.Item>내용2</List.Item>
    					<List.Item>내용3</List.Item>
    				</List>
    				<Button basic color='green'>채팅 참여</Button>
    				<Button basic color='blue'>액션 맡기
    				</Button>

				</Segment>
				<Segment attached>
    				<Header as='h2'>
    				구청에 전화하기 
    				
    				</Header>

    				<List divided relaxed bulleted>
    					<List.Item>내용1</List.Item>
    					<List.Item>내용2</List.Item>
    					<List.Item>내용3</List.Item>
    				</List>
    				<Button basic color='green'>채팅 참여</Button>
    				<Button basic color='blue'>액션 맡기
    				</Button>
				</Segment>
				</Segment.Group>

    			</div>
			</div>
			);
	}
}
/*

<Card>
					<Card.Content>
						<Card.Header>
						this.props.title
						</Card.Header>
						<Card.Meta>
          				this.props.place
        				</Card.Meta>
        				<Card.Description>
        					<List divided relaxed>
        					<List.Item>this.props.list[0]</List.Item>
        					<List.Item>this.props.list[1]</List.Item>
        					<List.Item>this.props.list[2]</List.Item>
						</List>
						</Card.Description>
      				</Card.Content>
      				<Card.Content extra>
      					<Button basic color='green'>채팅 참여</Button>
      				</Card.Content>
    			</Card>

    			*/


//this.props.title, .place, .list(<- list of string Shared artifacts)
export default NGO;