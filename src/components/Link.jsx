import React from "react";
import loader from "../assets/bouncing-circles.svg";
import "../styles/Link.css";
const Link = ({ downloadLink, setDownloadLink, loading, setLoading }) => {
	const handleReset = () => {
		setTimeout(() => {
			setDownloadLink(null);
			setLoading(false);
		}, 100);
	};
	return (
		<div className="link-component">
			{loading ? (
				<div className="loading">
					<img src={loader} title="Loading"></img>
				</div>
			) : (
				downloadLink && (
					<div className="music-wrapper">
						<h2 className="music-title">
							{downloadLink.title || "Download Ready"}
						</h2>
						<a
							href={downloadLink.link}
							download
							target="_blank"
							rel="noopener noreferrer"
							className="music-anchor-btn"
							onClick={handleReset}
						>
							<button>Download</button>
						</a>
					</div>
				)
			)}
		</div>
	);
};

export default Link;
