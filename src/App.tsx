import React, { useState } from "react";
import "../styles/reset.css"
import "../styles/index.css"
import Header from "./components/Header";
import Main from "./components/MAin";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Header className="main-header">
				{/* <!-- Go to 2-header-section.html --> */}
			</Header>
			<Main className="wrapper">
				{/* <!-- Go to 3-header-section.html --> */}
			</Main>
		</div>
	);
}

export default App;
