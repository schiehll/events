import constants from '+/config/constants'

const {SNACKBAR} = constants

const snackbar = (state = {
  open: false,
  message: ''
}, action) : Object => {
  switch (action.type) {
    case SNACKBAR:
      return action.payload
    default:
      return state
  }
}

export default snackbar