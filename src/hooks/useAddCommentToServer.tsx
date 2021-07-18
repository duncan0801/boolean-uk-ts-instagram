import { useEffect } from "react";
import useStore, { Comment } from "../store";

function useAddCommentToServer(newComment: Comment) {
	const comments = useStore((state) => state.comments);
	const setComments = useStore((state) => state.setComments);
	const commentsURL = "http://localhost:4000/comments";

	useEffect(() => {
		fetch(commentsURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ newComment }),
		}).then((resp) => {
			if (resp.ok) {
				console.log("POST SUCCESSFUL");
				setComments([...comments, newComment]);
			} else console.log("FAILED TO POST");
		});
	}, []);
}
export default useAddCommentToServer;
