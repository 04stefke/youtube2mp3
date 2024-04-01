import React from "react";

const Link = ({ downloadLink, loading }) => {
	return (
		<div className="link-component">
			{loading ? (
				<div> Loading Please Wait</div>
			) : (
				downloadLink && (
					<div>
						<p>{downloadLink.title || "Download Ready"}</p>
						<a
							href={downloadLink.link}
							download
							target="_blank"
							rel="noopener noreferrer"
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
