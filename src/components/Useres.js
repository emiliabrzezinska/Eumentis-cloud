import React, { useEffect, useState } from "react"

const Users= () => {
  const [users, setUsers] = useState([])


  useEffect(() => {
    console.log("useEffect run")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
        console.log(data)
      })
  }, [])

  return (
    <div>
      
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      
    </div>
  )
}

export default Users
