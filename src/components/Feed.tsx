import React from "react";
import useFetchPosts from "../hooks/useFetchPosts";
import useStore, { Post } from "../store";
import UserChip from "./UserChip";

// TYPES
type PostProps = {
	post: Post;
};
type Comment = {
	id: number;
	content: string;
	userId: number;
	postId: number;
};
type CommentProps = {
	comment: Comment;
};

// COMPONENTS
function Comment({ comment }: CommentProps) {
	const users = useStore((state) => state.users);
	const commentUser = users.find((user) => user.id === comment.userId);
	return (
		<div className="post--comment">
			<div className="avatar-small">
				<img
					src={commentUser ? commentUser.avatar : ""}
					alt={commentUser ? commentUser.username : "Image Not Found"}
				/>
			</div>
			<p>{comment.content}</p>
		</div>
	);
}
function PostListItem({ post }: PostProps) {
	const users = useStore((state) => state.users);
	const postUser = users.find((user) => user.id === post.userId);

	return (
		<li className="post">
			{postUser ? <UserChip key={postUser.id} user={postUser} /> : <h3>Loading...</h3>}
			<div className="post--image">
				<img src={post.image.src} alt={post.image.alt} />
			</div>
			<div className="post--content">
				<h2>{post.title}</h2>
				<p>{post.content}</p>
			</div>
			<div className="post--comments">
				<h3>Comments</h3>
				{post.comments.map((comment) => {
					return <Comment key={comment.id} comment={comment} />;
				})}
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
