import constants from '+/config/constants'

//const {EVENTS_SUCCESS, EVENTS_ERROR} = constants

const map = (state = {}, action) : Object => {
  switch (action.type) {
    case 'HIDE_EVENT_INFO':
    case 'SHOW_EVENT_INFO':
      return action.payload
    default:
      return state
  }
}

export default map