import { useEffect } from "react";
import useStore, { Post } from "../store";

function useAddPostToServer(post: Post) {
	const posts = useStore((state) => state.posts);
	const setPosts = useStore((state) => state.setPosts);
	const postsURL = "http://localhost:4000/posts";

	useEffect(() => {
		fetch(postsURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ post }),
		}).then((resp) => {
			if (resp.ok) {
				console.log("POST SUCCESSFUL");
				setPosts([...posts, post]);
			} else console.log("FAILED TO POST");
		});
	}, []);
}
export default useAddPostToServer;
