import constants from '+/config/constants'

const {GO_TO_ROUTE} = constants

const navigation = (state = null, action) : string | null => {
  switch (action.type) {
    case GO_TO_ROUTE:
      return action.payload
    default:
      return state
  }
}

export default navigation