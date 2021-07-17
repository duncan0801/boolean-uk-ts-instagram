import React from "react";
import { User } from "../store";

type UserChipProps = {
    user: User
}

function UserChip({user}: UserChipProps) {
	return (
		<div className="chip">
			<div className="avatar-small">
				<img src={user.avatar} alt={user.username} />
			</div>
			<span>{user.username}</span>
		</div>
	);
}
export default UserChip;
