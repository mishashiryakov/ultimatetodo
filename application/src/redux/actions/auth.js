import { AUTH_SUCCESS, LOGOUT } from './actionTypes';

export function authUser(loginData) {
  return {
    type: AUTH_SUCCESS,
    payload: loginData
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}
