import React from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import useStore from "../store";
import UserChip from "./UserChip";

function Header() {
	const users = useStore((state) => state.users);
	useFetchUsers();

	if (users == []) {
		return <h1>Loading...</h1>;
	}
	return (
		<header className="main-header">
			<div className="wrapper">
				{users.map((user) => {
					return <UserChip key={user.id} user={user} />;
				})}
			</div>
		</header>
	);
}

export default Header;
