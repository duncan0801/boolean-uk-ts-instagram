import React, { SyntheticEvent } from "react";
import useAddPostToServer from "../hooks/useAddPostToServer";
import useStore, { Post } from "../store";

function CreatePost() {
	const currentUser = useStore((state) => state.currentUser);
	const posts = useStore((state) => state.posts);
	const setPosts = useStore((state) => state.setPosts);

	function addPostToServer(newPost: Post) {
		const postsURL = "http://localhost:4000/posts";

		fetch(postsURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newPost),
		}).then((resp) => {
			if (resp.ok) {
				console.log("POST SUCCESSFUL");
				setPosts([...posts, newPost]);
			} else console.log("FAILED TO POST");
		});
	}
	function handleOnSubmitEvent(event: SyntheticEvent) {
		event.preventDefault();

		const newPost: Post = {
			title: event.target.title.value,
			content: event.target.content.value,
			image: {
				src: event.target.image.value,
				alt: event.target.title.value,
			},
			likes: 0,
			userId: currentUser,
		};

		addPostToServer(newPost);
		event.target.reset();
	}
	return (
		<section className="create-post-section">
			<form
				onSubmit={handleOnSubmitEvent}
				id="create-post-form"
				autoComplete="off"
			>
				<h2>Create a post</h2>
				<label htmlFor="image">Image</label>
				<input id="image" name="image" type="text" />
				<label htmlFor="title">Title</label>
				<input id="title" name="title" type="text" />
				<label htmlFor="content">Content</label>
				<textarea
					id="content"
					name="content"
					maxLength={30}
					columns={30}
				></textarea>
				<div className="action-btns">
					<button id="preview-btn" type="button">
						Preview
					</button>
					<button type="submit">Post</button>
				</div>
			</form>
			{/* <!-- FOR THE CHALLENGE START --> */}
			<div className="post">
				{/* <!-- Go to post.html and scroll down to the preveiw cards --> */}
			</div>
			{/* <!-- FOR THE CHALLENGE END --> */}
		</section>
	);
}

export default CreatePost;
