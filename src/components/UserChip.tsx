import React, { SyntheticEvent } from "react";
import useStore, { User } from "../store";

type SetCurrentUser = (userId: number) => void
type UserChipProps = {
    user: User
    // onClick: () => void
}

function UserChip({user}: UserChipProps) {
    const currentUser = useStore((state) => state.currentUser);
    const setCurrentUser = useStore((state) => state.setCurrentUser);

    function handleOnClickEvent(event: SyntheticEvent) {
        setCurrentUser(user.id)
    }
    
	return (
		<div onClick={handleOnClickEvent} className={currentUser == user.id ? "chip active" : "chip"}>
			<div className="avatar-small">
				<img src={user.avatar} alt={user.username} />
			</div>
			<span>{user.username}</span>
		</div>
	);
}
export default UserChip;
