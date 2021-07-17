import React from "react";
import useFetchPosts from "../hooks/useFetchPosts";
import useStore, { Post } from "../store";
import UserChip from "./UserChip";

type PostProps = {
	post: Post;
};

function Comment() {
	return (
		<div className="post--comment">
			<div className="avatar-small">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU"
					alt="Van Gogh"
				/>
			</div>
			<p>What a great photo!!</p>
		</div>
	);
}

function PostListItem({ post }: PostProps) {
	const users = useStore((state) => state.users);
	const postUser = users.find((user) => user.id === post.userId);

	return (
		<li className="post">
			{postUser ? <UserChip user={postUser} /> : <h3>Loading...</h3>}
			<div className="post--image">
				<img src={post.image.src} alt={post.image.alt} />
			</div>
			<div className="post--content">
				<h2>{post.title}</h2>
				<p>{post.content}</p>
			</div>
			<div className="post--comments">
				<h3>Comments</h3>
				<div className="post--comment">
					<div className="avatar-small">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU"
							alt="Van Gogh"
						/>
					</div>
					<p>What a great photo!!</p>
				</div>
				<div className="post--comment">
					<div className="avatar-small">
						<img
							src="https://www.sartle.com/sites/default/files/images/artist/pablo-picasso-137216-5115406.jpg"
							alt="Picasso"
						/>
					</div>
					<p>So beautiful... perfect!</p>
				</div>
				<form id="create-comment-form" autoComplete="off">
					<label htmlFor="comment">Add comment</label>
					<input id="comment" name="comment" type="text" />
					<button type="submit">Comment</button>
				</form>
			</div>
		</li>
	);
}

function Feed() {
	useFetchPosts();
	const posts = useStore((state) => state.posts);

	if (posts == []) {
		return <h1>Loading...</h1>;
	}
	return (
		<section className="feed">
			<ul className="stack">
				{posts.map((post) => {
					return <PostListItem key={post.id} post={post} />;
				})}
			</ul>
		</section>
	);
}

export default Feed;
