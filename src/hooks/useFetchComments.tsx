import React, { useEffect } from"react"
import useStore from "../store"


function useFetchComments() {
    const postsURL =   "http://localhost:4000/comments"
    const setComments = useStore(state => state.setComments)

    useEffect(() => {
        fetch(postsURL)
            .then(resp => resp.ok ? resp.json() : alert("oops, there was an error"))
            .then(comments => setComments(comments))
    }, [])

    
} 

export default useFetchComments