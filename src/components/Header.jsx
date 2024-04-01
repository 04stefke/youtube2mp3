import React from "react";
import Logo from "../assets/logo.webp";
import "../styles/Header.css";
const Header = () => {
	return (
		<div className="header-component">
			<div className="logo">
				<img src={Logo} alt="logo" className="logo" />
			</div>
			<div className="app-title">
				<h1>Youtube Converter</h1>
			</div>
		</div>
	);
};

export default Header;
