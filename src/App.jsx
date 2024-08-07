import { useState, useEffect } from "react";
import MovieDisplay from "./component.js/MovieDisplay";
import Form from "./component.js/Form";
import "./App.css";

function App() {
	const apiKey = "98e3fb1f";
	const [movie, setMovie] = useState(null);

	const getMovie = async (searchTerm) => {
		try {
			const response = await fetch(
				`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
			);
			const data = await response.json();
			setMovie(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getMovie("batman");
	}, []);

	return (
		<div className="App">
			<Form movieSearch={getMovie} />
			<MovieDisplay movie={movie} />
		</div>
	);
}

export default App;
