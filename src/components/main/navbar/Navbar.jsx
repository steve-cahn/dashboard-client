import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import dataInfo from '../../../data';

import './navbar.scss';

const Navbar = props => {
	let thisMonth = {
		link: moment()
			.format('MMMM')
			.toLowerCase(),
		title: 'This Month'
	};
	let lastMonth = {
		link: moment()
			.subtract('1', 'month')
			.format('MMMM')
			.toLowerCase(),
		title: 'Last Month'
	};
	let twoMonthsPrior = {
		link: moment()
			.subtract('2', 'month')
			.format('MMMM')
			.toLowerCase()
	};
	let threeMonthsPrior = {
		link: moment()
			.subtract('3', 'month')
			.format('MMMM')
			.toLowerCase()
	};

	twoMonthsPrior.title = twoMonthsPrior.link;
	threeMonthsPrior.title = threeMonthsPrior.link;

	if (props.allData) {
		lastMonth.sales = dataInfo.getDataByMonth(
			props.allData,
			lastMonth.link
		).length;
	}

	function numbersHandler(month) {
		if (!props.allData || !props.allData.length) return;

		const dataPerMonth = dataInfo.getDataByMonth(props.allData, month);
		const sales = dataPerMonth.length;

		if (!sales) return;
		let revenue = dataInfo
			.getDataBy()
			.prices(dataPerMonth)
			.reduce((accumulator, currentVal) => accumulator + currentVal);
		revenue = Math.round(revenue).toLocaleString();

		return { sales, revenue };
	}

	return (
		<nav className='navbar'>
			<MenuItem {...thisMonth} {...numbersHandler(thisMonth.link)} />
			<MenuItem {...lastMonth} {...numbersHandler(lastMonth.link)} />
			<MenuItem
				{...twoMonthsPrior}
				{...numbersHandler(twoMonthsPrior.link)}
			/>
			<MenuItem
				{...threeMonthsPrior}
				{...numbersHandler(threeMonthsPrior.link)}
			/>
		</nav>
	);
};

const MenuItem = props => {
	return (
		<NavLink
			to={`/overview/${props.link}`}
			activeClassName='selected'
			className='link'
		>
			<div className='title'>{props.title}</div>
			<div className='stat-container'>
				<div className='stat'>
					<span className='stat-info'>${props.revenue}</span>
					<span className='stat-title'>Revenue</span>
				</div>
				<div className='stat'>
					<span className='stat-info'>{props.sales}</span>
					<span className='stat-title'>Sales</span>
				</div>
			</div>
		</NavLink>
	);
};

export default Navbar;
