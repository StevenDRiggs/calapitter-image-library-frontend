const processErrors = errorsArr => {
  return dispatch => {
    dispatch({
      type: 'PROCESS_ERRORS',
      payload: {
        errors: errorsArr,
      },
    })
  }
}

const clearErrors = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_ERRORS',
      payload: {
        errors: [],
      }
    })
  }
}


export { processErrors, clearErrors }
