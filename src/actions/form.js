export const formActions = {
  submitToState,
  removeUser
}

export function submitToState (values) {
  return (dispatch) => {
    dispatch({type: 'NEW_USER', payload: values})
  }
}

export function removeUser (name) {
  return (dispatch) => {
    dispatch({type: 'REMOVE_USER', payload: name})
  }
}