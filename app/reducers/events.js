import constants from '+/config/constants'

const {EVENTS_SUCCESS, EVENTS_ERROR} = constants

const events = (state = {}, action) : Object => {
  switch (action.type) {
    case EVENTS_ERROR:
    case EVENTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default events