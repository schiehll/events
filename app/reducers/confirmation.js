import constants from '+/config/constants'

const {CONFIRMATION} = constants

const confirmation = (state = {
  open: false
}, action) : Object => {
  switch (action.type) {
    case CONFIRMATION:
      return action.payload
    default:
      return state
  }
}

export default confirmation