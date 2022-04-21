import { useEffect, useState } from "react"

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    fetchUsers()
    
  }, [])

  const fetchUsers = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN }`,
      } 
    })

    const data = await res.json()
    setUsers(data)
    setLoader(false)
  }

  if(!loader) {
    return (
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <h3 key={user.id}>{user.login}</h3>
        ))}
      </div>
    )
  } else {
    return (
      <h3>Loading...</h3>
    )
  }
}
