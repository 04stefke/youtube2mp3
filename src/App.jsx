import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Link from "./components/Link";

function App() {
	const [downloadLink, setDownloadLink] = useState(null)
	console.log(downloadLink);
	return (
		<div className="app-component">
			<Header />
			<Input setDownloadLink={setDownloadLink}/>
			<Link downloadLink={downloadLink}/>
		</div>
	);
}

export default App;
