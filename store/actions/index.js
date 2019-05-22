import * as types from './types'

// ACTION CREATORS GOES HERE../../services/post

export const serverRenderAction = () => {
}

export const setLoginState = (payload) => {
  return {
    type: types.SET_LOGIN_STATE,
    payload
  }
}