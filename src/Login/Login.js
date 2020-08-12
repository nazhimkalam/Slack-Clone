import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';

function Login() {
	return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png"
					alt="logo"
				/>
                <h1>Sign into Web Developer</h1>
                <p>webdeveloper.slack.com</p>
                <Button>Sign in with Google</Button>
			</div>
		</div>
	);
}

export default Login;
