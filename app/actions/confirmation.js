import constants from '+/config/constants'

const {CONFIRMATION} = constants

const confirmation = (state : Object) : Function => {
  return dispatch => {
    const action = {
      type: CONFIRMATION,
      payload: state
    }

    dispatch(action)
  }
}

export default confirmation