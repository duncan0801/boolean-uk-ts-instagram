import React, { SyntheticEvent } from "react";
import useAddCommentToServer from "../hooks/useAddCommentToServer";
import useStore, { Comment } from "../store";

type CommentFormProps = {
	postId: number;
};
function CommentForm({ postId }: CommentFormProps) {
	const currentUserId = useStore((state) => state.currentUser);
	const comments = useStore((state) => state.comments);
	const setComments = useStore((state) => state.setComments);

    function addCommentToServer(newComment: Comment) {
        const commentsURL = "http://localhost:4000/comments"
        fetch(commentsURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify( newComment ),
		}).then((resp) => {
			if (resp.ok) {
				console.log("POST SUCCESSFUL");
				setComments([...comments, newComment]);
			} else console.log("FAILED TO POST");
		});
    }
	function handleOnSubmitEvent(event: SyntheticEvent) {
		event.preventDefault();
		// Change State
		const newCommnet: Comment = {
			content: event.target.comment.value,
			userId: currentUserId,
			postId: postId,
		};

		setComments([...comments, newCommnet]);
        addCommentToServer(newCommnet)
        console.log(comments)
        event.target.reset()
		// Update db
	}
	return (
		<form
			onSubmit={handleOnSubmitEvent}
			id="create-comment-form"
			autoComplete="off"
		>
			<label htmlFor="comment">Add comment</label>
			<input id="comment" name="comment" type="text" />
			<button type="submit">Comment</button>
		</form>
	);
}

export default CommentForm;
