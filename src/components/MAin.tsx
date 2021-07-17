import React from "react";
import CreatePost from "./CreatePost";
import Feed from "./Feed";

function Main() {
	return (
		<main className="wrapper">
			<CreatePost/>
			<Feed/>
		</main>
	);
}

export default Main;
