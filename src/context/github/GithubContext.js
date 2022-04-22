import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loader: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const { users, loader } = state;

  const fetchUsers = async () => {
    setLoader()
    
    const res = await fetch(
      `${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      }
    })

    const data = await res.json()

    dispatch({
      type: 'GET_USERS',
      payload: data
    })
  }

  // Set loader
  const setLoader = () => dispatch({
    type: 'SET_LOADER'
  })

  return <GithubContext.Provider value ={{
    users,
    loader,
    fetchUsers
  }}>
    { children }
    </GithubContext.Provider>
}


export default GithubContext