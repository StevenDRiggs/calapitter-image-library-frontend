import { HYDRATE } from 'next-redux-wrapper'


const usersReducer = (state={}, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload.user}
    case 'LOGIN_USER':
      return {
        user: action.user,
        token: action.token,
      }
    case 'LOGOUT_USER':
      return null
    case 'SIGNUP_USER':
      return {
        user: action.user,
        token: action.token,
      }
    default:
      return state
  }
}


export default usersReducer
