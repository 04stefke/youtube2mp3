import React, { useEffect, useState } from "react";

const themes = {
	light: {
		"--bg-color": "#ffffff",
		"--text-color": "#000000",
		"--button-bg": "#f0f0f0",
		"--button-text": "#333",
	},
	dark: {
		"--bg-color": "#121212",
		"--text-color": "#ffffff",
		"--button-bg": "#333",
		"--button-text": "#fff",
	},
};

const ThemeSwitcher = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
		const root = document.documentElement;
		const selectedTheme = themes[theme];

		Object.keys(selectedTheme).forEach((key) => {
			root.style.setProperty(key, selectedTheme[key]);
		});

		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<div
			style={{
				backgroundColor: "var(--bg-color)",
				color: "var(--text-color)",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<button
				onClick={toggleTheme}
				style={{
					backgroundColor: "var(--button-bg)",
					color: "var(--button-text)",
					padding: "10px 20px",
					border: "none",
					cursor: "pointer",
					borderRadius: "5px",
				}}
			>
				Toggle Theme
			</button>
		</div>
	);
};

export default ThemeSwitcher;
