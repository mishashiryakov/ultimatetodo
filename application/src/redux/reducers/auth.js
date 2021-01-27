import { AUTH_SUCCESS, LOGOUT } from '../actions/actionTypes';

const initialState = {
  username: 'test',
  password: 'test',
  isLogged: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state, ...action.payload
      }
    case LOGOUT: {
      return {
        ...state,
        username: '',
        password: '',
        isLogged: false
      }
    }
    default:
      return state
  }
}
