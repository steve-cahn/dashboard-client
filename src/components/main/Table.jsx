import React from 'react';

const Table = props => {
	const titles = ['Name', 'Product', 'Price', ' Purchase Date'];
	return (
		<div className='table-container chart-item-container'>
			<div className='title'>
				{titles.map(title => (
					<div className='title-item' key={title}>
						{title}
					</div>
				))}
			</div>
			<div className='table-body'>
				{props.names &&
					props.names.map((name, index) => {
						return (
							<div
								className='row-wrapper'
								key={`${name}${index}`}
							>
								<div className='row'>{props.names[index]}</div>
								<div className='row'>
									{props.products[index]}
								</div>
								<div className='row'>
									${props.prices[index]}
								</div>
								<div className='row'>{props.dates[index]}</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Table;
