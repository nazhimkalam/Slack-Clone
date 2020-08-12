import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { provider, auth } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {
	const [state, dispatch] = useStateValue();

	const signIn = () => {
		// setting up GOOGLE user authentication, NOTE that for this you have to enable GOOGLE authentication in your firebase under the Authentication tab
		auth.signInWithPopup(provider)
			.then((result) => {
				console.log(result); // returns details of the user logged
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png"
					alt="logo"
				/>
				<h1>
					<span className="login__red">Sign </span>
					<span className="login__blue">into </span>
					<span className="login__yellow">Web</span>
					<span className="login__green">Developer</span>
				</h1>
				<p>webdeveloper.slack.com</p>
				<Button onClick={signIn}>Sign in with Google</Button>
			</div>
		</div>
	);
}

export default Login;
