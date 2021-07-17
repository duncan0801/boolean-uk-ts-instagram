import React, { useEffect } from"react"
import useStore from "../store"


function useFetchPosts() {
    const postsURL =   "http://localhost:4000/posts"
    const setPosts = useStore(state => state.setPosts)

    useEffect(() => {
        fetch(postsURL)
            .then(resp => resp.ok ? resp.json() : alert("oops, there was an error"))
            .then(posts => setPosts(posts))
    }, [])

    
} 

export default useFetchPosts