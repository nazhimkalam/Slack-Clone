import React from 'react';
import './SideBarOption.css';
import { useHistory } from 'react-router-dom';
import db from '../../firebase';

function SideBarOption({ Icon, title, addChannelOption, id }) {
	const history = useHistory();

	// redirecting by adding the fetched id to the url there for it can be used in the chat section to fetch the chat messages for that particular room/channel
	const selectChannel = () => {
		if (id) {
			history.push(`/room/${id}`);
		} else {
			history.push(title);
		}
	};

	// if the user clicked the add channel icon
	const addChannel = () => {
		const channelName = prompt('Please enter the name of the channel');

		// If the user enters a channel name, then we pop in up into the database
		if (channelName) {
			db.collection('rooms').add({
				name: channelName,
			});
		}
	};

	return (
		<div className="sideBarOption" onClick={addChannelOption ? addChannel : selectChannel}>
			{Icon && <Icon className="sideBarOption__icon" />}
			{Icon ? (
				<h3>{title}</h3>
			) : (
				<h3 className="sideBarOption__channel">
					<span className="sideBarOption__hash"> # </span> {title}
				</h3>
			)}
		</div>
	);
}

export default SideBarOption;
