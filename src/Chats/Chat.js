import React, { useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useEffect } from 'react';
import db from '../firebase';
import Message from './Messages/Message';

function Chat() {
	const { roomID } = useParams();
	const [roomDetails, setRoomDetails] = useState(null);
	const [roomMessages, setRoomMessages] = useState([]);

	// WHAT HAPPENS ACTUALLY IS THAT:
	// 1. Changes the URL when a particular room is clicked
	// 2. Connects to the database
	// 3. Uses URL param (roomID) to fetch room details from the database

	// get the data of a particular room / channel using firebase
	useEffect(() => {
		if (roomID) {
			// we are fetching the data of the first collection here
			db.collection('rooms')
				.doc(roomID)
				.onSnapshot((snapshot) => setRoomDetails(snapshot.data()));

			// now we are fetching the data of the second collection
			db.collection('rooms')
				.doc(roomID)
				.collection('messages')
				.orderBy('timestamp', 'asc')
				.onSnapshot((snapshot) => setRoomMessages(snapshot.docs.map((doc) => doc.data())));
		}
	}, [roomID]);

	return (
		<div className="chat">
			<div className="chat__header">
				<div className="chat__headerLeft">
					<h4 className="chat__channelName">
						<strong># {roomDetails?.name}</strong>
						<StarBorderIcon />
					</h4>
				</div>
				<div className="chat__headerRight">
					<p>
						<InfoOutlinedIcon /> Details
					</p>
				</div>
			</div>

			<div className="chat__message">
				{roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message 
                        message={ message } 
                        timestamp={ timestamp } 
                        user={ user } 
                        userImage={ userImage } 
                    />
				))}
			</div>
		</div>
	);
}

export default Chat;
