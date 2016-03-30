import constants from '+/config/constants'

const {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT} = constants

const auth = (state = {
  user: {},
  isAuthenticated: false
}, action) : Object => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state
    case LOGIN_SUCCESS:
    case LOGIN_ERROR:
    case LOGOUT:
      return action.payload
    default:
      return state
  }
}

export default auth