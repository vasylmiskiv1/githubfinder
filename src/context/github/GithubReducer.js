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
    case 'LOADER_ON':
      return {
        ...state,
        loader: true,
      }
      case 'LOADER_OFF':
      return {
        ...state,
        loader: false
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