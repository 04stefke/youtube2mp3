import React from "react";
import "../styles/Input.css";

const Input = () => {
	return (
		<div className="input-component">
			<form action="" className="input-form">
				<label htmlFor="link-input">
					Please Insert A Valid Youtube Music Url
				</label>
				<div className="input-wrapper">
					<input type="text" id="link-input" className="link-input" />
					<button type="submit">Convert</button>
				</div>
			</form>
		</div>
	);
};

export default Input;
