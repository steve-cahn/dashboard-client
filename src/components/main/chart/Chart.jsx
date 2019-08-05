import React from 'react';
import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';
import Table from '../Table';

const Chart = props => {
	return (
		<div className='content'>
			<div className='chart'>
				<LineChart dates={props.dates} prices={props.prices} />
				<DoughnutChart products={props.products} />
			</div>

			<Table
				prices={props.prices}
				dates={props.dates}
				products={props.products}
				names={props.names}
			/>
		</div>
	);
};

export default Chart;
