import React from 'react';
import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './Chats/Chat';
import Login from './Login/Login';
import { useStateValue } from './StateProvider';

function App() {
	const [{ user }] = useStateValue();

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<div>
						<Header />
						<div className="app__body">
							<SideBar />

							<Switch>
								<Route path="/room/:roomID">
									<Chat />
								</Route>
								<Route path="/">
									<div className="app__welcomeMsg">
										<div>WELCOME TO SLACK</div>
										<div>{user.displayName} !</div>
										<div>😀</div>
									</div>
								</Route>
							</Switch>
						</div>
					</div>
				)}
			</Router>
		</div>
	);
}

export default App;
