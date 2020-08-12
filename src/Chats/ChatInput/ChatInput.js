import React from 'react';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useStateValue } from '../../StateProvider';
import db from '../../firebase';
import firebase from 'firebase';

function ChatInput({ channelName, channelID }) {
	const [inputMessage, setInputMessage] = useState('');
	const [{ user }] = useStateValue();

	const sendMessage = (e) => {
		e.preventDefault();

		if (channelID) {
			db.collection('rooms').doc(channelID).collection('messages').add({
				message: inputMessage,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(), // server timestamp not the local time stamp so the timestamps works properly in global usage
				user: user.displayName,
				userImage: user.photoURL,
			});
		}
	};

	return (
		<div className="chatInput">
			<form>
				<input
					type="text"
					value={inputMessage}
					onChange={(e) => setInputMessage(e.target.value)}
					placeholder={`Message #${channelName?.toLowerCase()}`}
				/>
				<Button onClick={sendMessage} type="submit">
					SEND
				</Button>
			</form>
		</div>
	);
}

export default ChatInput;
