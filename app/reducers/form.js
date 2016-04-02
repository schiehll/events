import constants from '+/config/constants'

//const {CONFIRMATION} = constants

const form = (state = {
  open: false
}, action) : Object => {
  switch (action.type) {
    case 'TOGGLE_FORM':
      return action.payload
    default:
      return state
  }
}

export default form