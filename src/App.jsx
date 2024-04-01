import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Link from "./components/Link";

function App() {
	const [downloadLink, setDownloadLink] = useState(null)
	const [loading, setLoading] = useState(false)
	return (
		<div className="app-component">
			<Header />
			<Input setDownloadLink={setDownloadLink} setLoading={setLoading}/>
			<Link downloadLink={downloadLink} loading={loading}/>
		</div>
	);
}

export default App;
