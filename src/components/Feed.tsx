import React from "react";
import useFetchComments from "../hooks/useFetchComments";
import useFetchPosts from "../hooks/useFetchPosts";
import useStore, { Post } from "../store";
import CommentForm from "./CommentForm";
import UserChip from "./UserChip";

// TYPES
export type PostProps = {
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
export function PostListItem({ post }: PostProps) {
	useFetchComments();

	const posts = useStore((state) => state.posts);
	const setPosts = useStore((state) => state.setPosts);
	const comments = useStore((state) => state.comments);
	const users = useStore((state) => state.users);
	const postUser = users.find((user) => user.id === post.userId);

	function handleOnClickEvent() {
		console.log("clicked");
		const updatedPosts = posts.map((p) => {
			if (p.id === post.id) {
				console.log(p.likes);
				return { likes: p.likes + 1, ...p };
			}
			return p;
		});
		console.log("updatedPosts:", updatedPosts);
		setPosts(updatedPosts);
		console.log("posts:", posts);
	}

	return (
		<li className="post">
			{postUser ? (
				<UserChip key={postUser.id} user={postUser} />
			) : (
				<h3>Loading...</h3>
			)}
			<div className="post--image">
				<img src={post.image.src} alt={post.image.alt} />
			</div>
			<div className="post--content">
				<h2>{post.title}</h2>
				<span onClick={handleOnClickEvent}>
					{"♥" + "" + post.likes}
				</span>
				<p>{post.content}</p>
			</div>
			<div className="post--comments">
				<h3>Comments</h3>
				{comments.map((comment) => {
					if (comment.postId == post.id) {
						return <Comment key={comment.id} comment={comment} />;
					}
					return null;
				})}
				<CommentForm postId={post.id} />
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
