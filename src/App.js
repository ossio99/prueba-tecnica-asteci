import React, { useState, useEffect } from 'react'
import {PaginatedTable} from './PaginatedTable'

const App = () => {

	const [data, setData] = useState([]);

	const getData = async() => {
		const url = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';
		const req = await fetch(url);
		const {results} = await req.json();
		setData(results);
	}
	
	useEffect(() => {
		getData();
	}, [])
	

	return (
		<div className="App">
			<h1>Weather data</h1>
			<PaginatedTable data={data}/>
		</div>
	);
}

export default App;
