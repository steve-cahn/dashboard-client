import React, { useState, useEffect } from 'react';
import Navbar from './navbar/Navbar';
import Chart from './chart/Chart';
import { withRouter } from 'react-router-dom';

import dataInfo from '../../data';

import './main.scss';

const Main = props => {
	const [currentResults, setCurrentResults] = useState([]);
	const [allData, setAllData] = useState([]);

	useEffect(() => {
		const selectedMonth = props.location.pathname.split('/').pop();

		const results = async () => {
			let temp = await dataInfo.getData();
			temp = dataInfo.sortBy().date(temp);

			setCurrentResults(dataInfo.getDataByMonth(temp, selectedMonth));
			setAllData(temp);
		};
		results();
	}, [props.location.pathname]);

	const prices = dataInfo.getDataBy().prices(currentResults);
	const dates = dataInfo.getDataBy().dates(currentResults);
	const products = dataInfo.getDataBy().products(currentResults);
	const names = dataInfo.getDataBy().names(currentResults);

	return (
		<div className='main'>
			<Navbar allData={allData} />
			<Chart
				prices={prices}
				dates={dates}
				products={products}
				names={names}
				currentResults={currentResults}
			/>
		</div>
	);
};

export default withRouter(Main);
