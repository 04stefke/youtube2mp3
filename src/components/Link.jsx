import React from "react";
import "../styles/Link.css";
import loader from "../assets/bouncing-circles.svg";
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
					{" "}
					<iframe src={loader} title="Loading"></iframe>
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
