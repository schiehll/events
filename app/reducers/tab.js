import constants from '+/config/constants'

const {CHANGE_TAB} = constants

const tab = (state = 'EVENT_LIST', action) : string => {
  switch (action.type) {
    case CHANGE_TAB:
      return action.payload
    default:
      return state
  }
}

export default tab