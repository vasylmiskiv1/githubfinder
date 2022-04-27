const githubReducer = (state, action) => {

  switch(action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loader: false,
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      } 
    case 'SET_LOADER':
      return {
        ...state,
        loader: true,
      }
    case 'OFF_LOADER':
      return {
        ...state,
        loader: action.payload,
      }
    case 'DELETE_USERS':
      return {
        ...state,
        users: [],
      }
    default: 
      return state
  }
}

export default githubReducer 