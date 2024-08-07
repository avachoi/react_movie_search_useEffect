import React from "react";
import { useState } from "react";

function Form(props) {
	const [formData, setFormData] = useState({
		searchTerm: "",
	});

	const handleChange = (event) => {
		console.log("event.target", event.target);
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		props.movieSearch(formData.searchTerm);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="searchTerm"
					onChange={handleChange}
					value={formData.searchTerm}
				/>
				<input type="submit" value="submit" />
			</form>
		</div>
	);
}

export default Form;
