import React, { useState, useEffect } from 'react';
import './SideBar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption from './SideBarOption/SideBarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InputIcon from '@material-ui/icons/Input';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';

function SideBar() {
	const [channel, setChannel] = useState([]);

	useEffect(() => {
		// note in this DB we are dealing with COLLECTION in ANOTHER COLLECTION

		db.collection('rooms').onSnapshot((snapshot) =>
			setChannel(
				snapshot.docs.map((doc) => ({
					id: doc.id, // getting the id
					name: doc.data().name, // getting the name
				}))
			)
		);
	}, []);

	return (
		<div className="sideBar">
			<div className="sideBar__header">
				<div className="sideBar__info">
					<h2>Web Developers</h2>
					<h3>
						<FiberManualRecordIcon />
						Nazhim Kalam
					</h3>
				</div>
				<CreateIcon />
			</div>
			<SideBarOption Icon={InsertCommentIcon} title="Threads" />
			<SideBarOption Icon={InputIcon} title="Mentions & Reactions" />
			<SideBarOption Icon={DraftsIcon} title="Saved items" />
			<SideBarOption Icon={BookmarkBorderIcon} title="Channel browser" />
			<SideBarOption Icon={PeopleAltIcon} title="People & user groups" />
			<SideBarOption Icon={AppsIcon} title="Apps" />
			<SideBarOption Icon={FileCopyIcon} title="File browser" />
			<SideBarOption Icon={ExpandLessIcon} title="Show less" />

			<hr />
			<SideBarOption Icon={ExpandMoreIcon} title="Channels" />

			<hr />
			<SideBarOption Icon={AddIcon} addChannelOption title="Add Channel" />

			{channel.map((channel) => (
				<SideBarOption title={channel.name} id={channel.id} />
			))}
		</div>
	);
}

export default SideBar;
