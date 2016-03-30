import constants from '+/config/constants'

const {PROGRESS} = constants

const progress = (state = {
  percent: -1,
  increment: false
}, action) : Object => {
  switch (action.type) {
    case PROGRESS:
      return action.payload
    default:
      return state
  }
}

export default progress