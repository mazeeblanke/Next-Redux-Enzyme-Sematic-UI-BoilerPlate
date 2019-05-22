import { SET_LOGIN_STATE } from '../actions/types';

const INITIAL_STATE = {
  login: {
    isLoggedIn: false
  }
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SET_LOGIN_STATE: {
      return {
        ...state,
        login: {
          ...state.login,
          ...payload
        }
      }
    }
    default:
     return state
  }

}