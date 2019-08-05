import http from './http';
import moment from 'moment';

let allData = [];

const getData = async () => {
	if (!allData.length) {
		try {
			const { data } = await http.get('api/sales/');
			allData = data;
			return data;
		} catch (error) {
			console.log(error);
		}
	} else return allData;
};

function getDataByMonth(data, month) {
	if (!data) return;
	return data.filter(
		singleData =>
			moment(singleData.created_at)
				.format('MMMM')
				.toLowerCase() === month.toLowerCase()
	);
}

function getDataBy() {
	const prices = data => {
		if (!data) return;
		return data.map(dataItem => dataItem.cost);
	};

	const products = data => {
		if (!data) return;
		return data.map(dataItem => dataItem.product);
	};

	const names = data => {
		if (!data) return;
		return data.map(dataItem => dataItem.userName);
	};

	const dates = data => {
		if (!data) return;
		return data.map(dataItem =>
			moment(dataItem.created_at).format('MMM-DD-YY ')
		);
	};

	return { prices, products, dates, names };
}

function sortBy() {
	const price = data => {
		if (!data) return;
		let tempData = [...data];

		tempData.sort((a, b) => {
			if (a.cost < b.cost) return -1;
			else if (a.cost > b.cost) return 1;

			return 0;
		});

		return tempData;
	};

	const productName = data => {
		if (!data) return;
		let tempData = [...data];

		tempData.sort((a, b) => {
			if (a.product < b.product) return -1;
			else if (a.product > b.product) return 1;

			return 0;
		});
		return tempData;
	};

	const date = data => {
		if (!data) return;
		let tempData = [...data];

		tempData.sort((a, b) => {
			return moment.utc(b.created_at).diff(moment.utc(a.created_at));
		});

		return tempData.reverse();
	};

	return {
		price,
		productName,
		date
	};
}

export default { getData, getDataBy, sortBy, getDataByMonth };
