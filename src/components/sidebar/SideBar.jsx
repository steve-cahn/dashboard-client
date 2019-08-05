import React from 'react';
import icon from '../../assets/icon.png';

import homeIcon from '../../assets/home-icon.png';
import salesIcon from '../../assets/sales.png';
import chartIcon from '../../assets/chart.png';
import tableIcon from '../../assets/table.png';
import userIcon from '../../assets/users.png';

import './sidebar.scss';

const SideBar = () => {
	return (
		<div className='sidebar'>
			<img src={icon} alt='' className='logo-icon' />

			<nav>
				<ul>
					<li className='selected'>
						<img className='icon' src={homeIcon} alt='' />
						<span className='title'>Overview</span>
					</li>
					<li>
						<img className='icon' src={salesIcon} alt='' />
						<span className='title'>Sales</span>
					</li>
					<li>
						<img className='icon' src={userIcon} alt='' />
						<span className='title'>Users</span>
					</li>
					<li>
						<img className='icon' src={chartIcon} alt='' />
						<span className='title'>Charts</span>
					</li>
					<li>
						<img className='icon' src={tableIcon} alt='' />
						<span className='title'>Tables</span>
					</li>
				</ul>
			</nav>

			<div />
		</div>
	);
};

export default SideBar;
