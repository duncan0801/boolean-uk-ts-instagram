import create from "zustand"

type User = {
    id: number
    username: string
    avatar: string
}

type Store = {
    users: User[]
    setUsers: (users: User[]) => void
}


const useStore= create<Store>((set, get) => ({
    users: [],
    setUsers: (users) => set({users: users})
}))

export default useStore

