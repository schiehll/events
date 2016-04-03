import constants from '+/config/constants'

const {CHANGE_FORM} = constants

const form = (state = {
  editing: false,
  open: false,
  fields: {}
}, action) : Object => {
  switch (action.type) {
    case CHANGE_FORM:
      return action.payload
    default:
      return state
  }
}

export default form