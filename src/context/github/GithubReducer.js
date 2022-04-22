const githubReducer = (state, action) => {

  switch(action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loader: false,
      }
    case 'SET_LOADER':
    return {
      ...state,
      loader: true,
    }
    default: 
    return state
  }
}

export default githubReducer 