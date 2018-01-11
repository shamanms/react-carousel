export const formActions = {
  submitToState,
}

export function submitToState (values) {
  return (dispatch) => {
    dispatch({type: 'NEW_USER', payload: values})
  }
}
