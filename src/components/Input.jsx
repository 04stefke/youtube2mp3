import React, { useEffect, useState } from "react";
import "../styles/Input.css";
import { getDownloadLink } from "../api/api";

const Input = ({ setDownloadLink }) => {
	const [term, setTerm] = useState("");

	const saveTerm = (e) => setTerm(e.target.value);

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const linkData = await getDownloadLink(term);
		setDownloadLink(linkData);
		setTerm("");
	};

	return (
		<div className="input-component">
			<form action="" className="input-form" onSubmit={handleOnSubmit}>
				<label htmlFor="link-input">
					Please Insert A Valid Youtube Music Url
				</label>
				<div className="input-wrapper">
					<input
						type="text"
						id="link-input"
						className="link-input"
						placeholder="Enter a Youtube URL"
						onChange={saveTerm}
					/>
					<button type="submit">Convert</button>
				</div>
			</form>
		</div>
	);
};

export default Input;
