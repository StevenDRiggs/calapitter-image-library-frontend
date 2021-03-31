import { HYDRATE } from 'next-redux-wrapper'


const errorsReducer = (state=[], action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.errors
    case 'PROCESS_ERRORS':
      return action.payload.errors
    default:
      return state
  }
}


export default errorsReducer


