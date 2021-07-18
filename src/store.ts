import create from "zustand";

export type User = {
	id: number;
	username: string;
	avatar: string;
};
export type Comment = {
	id: number;
	content: string;
	userId: number;
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
	likes: number;
	userId: number;
	comments: Comment[];
};

export type Store = {
	users: User[];
	setUsers: (users: User[]) => void;
	posts: Post[];
	setPosts: (posts: Post[]) => void;
	currentUser: number | null;
	setCurrentUser: (userId: number) => void;
    comments: Comment[]
    setComments: (comments :Comment[]) => void
};

const useStore = create<Store>((set, get) => ({
	users: [],
	setUsers: (users) => set({ users: users }),
	posts: [],
	setPosts: (posts) => set({ posts: posts }),
	currentUser: null,
	setCurrentUser: (userId) => set({ currentUser: userId }),
    comments: [],
    setComments: (newComments) => set({comments: newComments})
}));

export default useStore;
