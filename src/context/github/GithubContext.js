import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loader: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const { users, user, loader, repos } = state;

    // Set loader
    const setLoader = () => dispatch({
      type: 'SET_LOADER'
    })

    // off loader
    const offLoader = () => dispatch({
      type: 'OFF_LOADER',
      payload: false,
    })

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

  // gett single user
  const getUser = async (login) => {
    setLoader()
    
    const res = await fetch(
      `${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      }
    })

    if(res.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await res.json()

      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    }
  }

  // Get user repos
  const getUserRepos = async (login) => {
    setLoader()

    // define search params for query
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    })
    
    const res = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      }
    })

    const data = await res.json()

    dispatch({
      type: 'GET_REPOS',
      payload: data,
    })
  }

  // Clear users list
  const clearList = () => {
    dispatch({
      type: 'DELETE_USERS',
      payload: users
    })
  } 

  return <GithubContext.Provider value ={{
    users,
    user,
    loader,
    repos,
    searchUsers,
    clearList,
    getUser,
    getUserRepos,
    offLoader,
  }}>
    { children }
    </GithubContext.Provider>
}


export default GithubContext