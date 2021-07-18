import React from "react";

function CreatePost() {
	return (
		<section className="create-post-section">
			<form id="create-post-form" autoComplete="off">
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
