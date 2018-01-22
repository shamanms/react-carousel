const initialState = {
  users: {
    a: {name: "a", email: "shamanovms@gmai.com", message: "aaaaaa"},
    b: {name: "b", email: "shamanovms@gmai.com", message: "bbbbbb"}
  }
}

export default function form(state = initialState, action) {
  if (action.type === 'NEW_USER') {
    const newUser = {
      ...state.users,
      [action.payload.name]: action.payload,
    }
    return {
      ...state,
      users: newUser,
    } 
  } else if (action.type === 'REMOVE_USER') {
    const newStateUsers = {
      ...state.users,
      [action.payload]: {},
    }
    return {
      ...state,
      users: newStateUsers,
    }
  }
  return state;
}