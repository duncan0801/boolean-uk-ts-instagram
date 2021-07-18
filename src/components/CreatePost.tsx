import React, { SyntheticEvent } from "react";
import useAddPostToServer from "../hooks/useAddPostToServer";
import useStore, { Post } from "../store";
import UserChip from "./UserChip";

function CreatePost() {
	const currentUserId = useStore((state) => state.currentUser);
	const users = useStore((state) => state.users);
	const posts = useStore((state) => state.posts);
	const setPosts = useStore((state) => state.setPosts);
	const previewPost = useStore((state) => state.previewPost);
	const setPreviewPost = useStore((state) => state.setPreviewPost);
	const currentUser = users.find((user) => user.id == currentUserId);

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
			userId: currentUserId,
		};

		addPostToServer(newPost);
		event.target.reset();
	}
	function renderPreview() {}
	function handleOnClickEvent() {}

	// function handleOnchangeEvent(event: SyntheticEvent) {
	// 	const name = event.target.name
	// 	if(name === "title") {
    //         setPreviewPost({title: name.value, ...previewPost})
    //     }
	// }
	return (
		<section className="create-post-section">
			<form
				onSubmit={handleOnSubmitEvent}
				id="create-post-form"
				autoComplete="off"
			>
				<h2>Create a post</h2>
				<label htmlFor="image">Image</label>
				<input
					// onChange={handleOnchangeEvent}
					id="image"
					name="image"
					type="text"
				/>
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
				{currentUser ? (
					<UserChip user={currentUser} />
				) : (
					<h3>Select a user in the header</h3>
				)}
				<div className="post--image loading-state"></div>
				<div className="post--content">
					<h2 className="loading-state"></h2>
					<p className="loading-state"></p>
				</div>
			</div>
			{/* <!-- FOR THE CHALLENGE END --> */}
		</section>
	);
}

export default CreatePost;
