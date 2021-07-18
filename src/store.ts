import create from "zustand";

export type User = {
	id: number;
	username: string;
	avatar: string;
};
export type Comment = {
	id?: number;
	content: string;
	userId: number | null;
	postId: number;
};

export type Post = {
	id: number;
	title: string;
	content: string;
	image: {
		src: string;
		alt: string;
	};
	likes?: number;
	userId: number;
	comments?: Comment[];
};

type PreviewPost = {
    title: string;
	content: string;
	image: {
		src: string;
		alt: string;
	};
    userId: number
}

export type Store = {
	users: User[];
	setUsers: (users: User[]) => void;
	posts: Post[];
	setPosts: (posts: Post[]) => void;
	currentUser: number | null;
	setCurrentUser: (userId: number) => void;
	comments: Comment[];
	setComments: (comments: Comment[]) => void;
	previewPost: PreviewPost | {};
    setPreviewPost: (postData : PreviewPost) => void
};

const useStore = create<Store>((set, get) => ({
	users: [],
	setUsers: (users) => set({ users: users }),
	posts: [],
	setPosts: (posts) => set({ posts: posts }),
	currentUser: null,
	setCurrentUser: (userId) => set({ currentUser: userId }),
	comments: [],
	setComments: (newComments) => set({ comments: newComments }),
	previewPost: {},
    setPreviewPost: (postData) => set({previewPost: postData })
}));

export default useStore;
