import React from 'react';

import { Pie } from 'react-chartjs-2';

const DoughnutChart = props => {
	let productsOrganized = {};
	let dataItems = [];
	let labels = [];

	if (props.products) {
		for (const product of props.products) {
			productsOrganized[product] = productsOrganized[product]
				? productsOrganized[product] + 1
				: 1;
		}

		for (const item in productsOrganized) {
			dataItems.push(productsOrganized[item]);
			labels.push(item);
		}
	}

	const data = {
		labels,
		datasets: [
			{
				label: false,
				data: dataItems,
				borderColor: 'false',
				backgroundColor: [
					'#cea2b7',
					'#2988c0',
					'#a8a6ca',
					'#cabaa6',
					'#b68981'
				],
				borderWidth: 0
			}
		]
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			labels: {
				fontSize: 15
			}
		},
		layout: {
			padding: {
				bottom: 35,
				right: 100,
				left: 100
			}
		},
		tooltips: {
			callbacks: {
				label: function(tooltipItem, data) {
					var dataset = data.datasets[tooltipItem.datasetIndex];
					var meta = dataset._meta[Object.keys(dataset._meta)[0]];
					var total = meta.total;
					var currentValue = dataset.data[tooltipItem.index];
					var percentage = parseFloat(
						((currentValue / total) * 100).toFixed(1)
					);
					return currentValue + ' (' + percentage + '%)';
				},
				title: function(tooltipItem, data) {
					return data.labels[tooltipItem[0].index];
				}
			}
		}
	};

	return (
		<div className='chart-item-container'>
			<h3 className='title'>Products</h3>
			<div className='chart-item'>
				<Pie data={data} options={options} />
			</div>
		</div>
	);
};

export default DoughnutChart;
