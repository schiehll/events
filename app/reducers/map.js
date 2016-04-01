import constants from '+/config/constants'

const {SHOW_EVENT_INFO} = constants

const map = (state = {
  event: {}
}, action) : Object => {
  switch (action.type) {
    case SHOW_EVENT_INFO:
      return action.payload
    default:
      return state
  }
}

export default map