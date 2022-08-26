import React, { useState, useEffect } from 'react'
import { PaginatedTable } from './PaginatedTable'
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const ReduxApp = () => {

	// const [data, setData] = useState([]);

	const initialValue = [];

	const reducer = (state = initialValue, acctions) => {
		return state;
	}

	const store = createStore(reducer);

	const getData = async () => {
		const url = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';
		const req = await fetch(url);
		const { results } = await req.json();
		// setData(results);
	}

	useEffect(() => {
		getData();
	}, [])


	return (
		<Provider store={store}>
			<div className="App">
				<h1>Weather data</h1>

				<PaginatedTable />
			</div>
		</Provider>
	);
}

export default ReduxApp;
