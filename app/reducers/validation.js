import constants from '+/config/constants'

const {VALIDATION} = constants

const validation = (state = {
  fields: []
}, action) : Object => {
  switch (action.type) {
    case VALIDATION:
      return action.payload
    default:
      return state
  }
}

export default validation