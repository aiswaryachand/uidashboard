import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

function Navbar() {
	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='search'>
					<SearchIcon className='search-icon' />
					<input type='text' placeholder='Search' />
				</div>
				<div className='notification'>
					<NotificationsNoneOutlinedIcon />
				</div>
			</div>
		</div>
	);
}

export default Navbar;