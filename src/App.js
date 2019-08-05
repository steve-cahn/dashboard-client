import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import moment from 'moment';

// Components
import SideBar from './components/sidebar/SideBar';
import Main from './components/main/Main';

import './style/defaultStyling.scss';
import './App.scss';

function App() {
	const currentMonth = moment()
		.format('MMMM')
		.toLowerCase();

	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route
						path='/overview/:month'
						render={() => (
							<>
								<SideBar />
								<Main />
							</>
						)}
					/>

					<Route
						path='*'
						render={() => (
							<Redirect to={`/overview/${currentMonth}`} />
						)}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
