import React from 'react';
import GoogleLogin from 'react-google-login';
import { setLogin } from '../actions';
import { connect } from 'react-redux';




const responseGoogle = (response) => {
  console.log(response);
}
/*
const onSignIn = (googleUser) => {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  this.setState({ login:true, 
  	memberStatus : 
  	{ID: profile.getId(), 
  		Name: profile.getName(), 
  		Img: profile.getImageUrl(), 
  		Email: profile.getEmail()}});

}

*/

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			login: false,
			memberStatus: {
				ID: '',
				Name: '',
				Img: '',
				Email: ''
			}
		}
		this.onSignIn = this.onSignIn.bind(this);

	}

	onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  this.props.onLogin(true, {ID: profile.getId(), 
  		Name: profile.getName(), 
  		Img: profile.getImageUrl(), 
  		Email: profile.getEmail()});
  	this.props.history.goBack();

}
	render() {
		return (
			<div className='contentBox'>
			<GoogleLogin
			    clientId={"701630843222-sbfp59qcni730f5a3pq6jt1fnu4qhmtb.apps.googleusercontent.com"}
			    buttonText="Login with Google"
			    onSuccess={(e) => this.onSignIn(e)}
			    onFailure={responseGoogle}
			  />

			{ this.state.login ? (<div>{this.state.memberStatus.Name}</div>) : null }
			 </div>
			
			);
	}
}


let mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (isLogin, member) => dispatch(setLogin(isLogin, member))
    };
}


Login = connect(undefined, mapDispatchToProps)(Login);


export default Login;