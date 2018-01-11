const initialState = {
  users: {}
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
  } 
  return state;
}