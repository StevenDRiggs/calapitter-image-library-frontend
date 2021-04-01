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


export { processErrors }
