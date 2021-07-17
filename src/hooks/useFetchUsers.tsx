import React, { useEffect } from"react"
import useStore from "../store"


function useFetchUsers() {
    const usersURL =   "http://localhost:4000/users"
    const setUsers = useStore(state => state.setUsers)

    useEffect(() => {
        fetch(usersURL)
            .then(resp => resp.ok ? resp.json() : alert("oops, there was an error"))
            .then(users => setUsers(users))
    }, [])

    
} 

export default useFetchUsers