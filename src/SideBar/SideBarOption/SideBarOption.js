import React from 'react';
import './SideBarOption.css';

function SideBarOption({ Icon, title }) {
	return (
		<div className="sideBarOption">
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
