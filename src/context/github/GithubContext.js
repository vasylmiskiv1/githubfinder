import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loader: true,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const { users, loader } = state;

  const fetchUsers = async () => {
    const res = await fetch(
      `${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      }
    })

    const data = await res.json()

    console.log(initialState)
    dispatch({
      type: 'GET_USERS',
      payload: data
    })
  }

  return <GithubContext.Provider value ={{
    users,
    loader,
    fetchUsers
  }}>
    { children }
    </GithubContext.Provider>
}


export default GithubContext