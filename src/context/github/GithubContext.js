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

  // Get search results
  const searchUsers = async (text) => {
    setLoader()

    // define search params for query
    const params = new URLSearchParams({
      q: text
    })
    
    const res = await fetch(
      `${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      }
    })

    const { items } = await res.json()

    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  // Set loader
  const setLoader = () => dispatch({
    type: 'SET_LOADER'
  })

  // Clear users list
  const clearList = () => {
    dispatch({
      type: 'DELETE_USERS',
      payload: users
    })
  } 

  return <GithubContext.Provider value ={{
    users,
    loader,
    searchUsers,
    clearList,
  }}>
    { children }
    </GithubContext.Provider>
}


export default GithubContext