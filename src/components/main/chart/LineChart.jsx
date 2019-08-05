import React from 'react';

import { Line } from 'react-chartjs-2';

const LineChart = props => {
	const dataOrganized = {};
	let dates = [];
	let revenues = [];

	if (props.dates) {
		props.dates.forEach((date, index) => {
			// Does the date already exist?
			// If it does, then add the revenue values.
			// If not, create the key value with the revenue as the property
			if (dataOrganized[date])
				dataOrganized[date] = dataOrganized[date] + props.prices[index];
			else dataOrganized[date] = props.prices[index];
		});

		for (const item in dataOrganized) {
			revenues.push(dataOrganized[item]);
			dates.push(item);
		}
	}

	const data = {
		labels: dates,
		datasets: [
			{
				label: false,
				data: revenues,
				borderColor: '#548fd7',
				fill: false,
				borderWidth: 2
			}
		]
	};

	return (
		<div className='chart-item-container'>
			<h3 className='title'>Sales</h3>
			<div className='chart-item'>
				<Line
					data={data}
					options={{
						maintainAspectRatio: false,
						legend: {
							display: false
						},
						scales: {
							yAxes: [
								{ ticks: { callback: value => `$${value}` } }
							]
						},
						tooltips: {
							enabled: false
						}
					}}
				/>
			</div>
		</div>
	);
};

export default LineChart;
